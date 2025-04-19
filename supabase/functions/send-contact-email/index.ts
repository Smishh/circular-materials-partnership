
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Edge function received request");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling OPTIONS request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Processing request body");
    const { name, email, phone, message }: ContactEmailRequest = await req.json();
    console.log("Request data:", { name, email, phone, message: message.substring(0, 20) + "..." });

    // Check API key
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      console.error("ERROR: No Resend API key found in environment variables");
      return new Response(
        JSON.stringify({ error: "Email service configuration error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    console.log("API key is configured (not showing for security)");

    // Validate input
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Attempting to send email to owner");
    // Send email to site owner
    try {
      const ownerEmailResponse = await resend.emails.send({
        from: "CMIG Contact <onboarding@resend.dev>",
        to: "info@cmig.co.za",
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
      console.log("Owner email response:", ownerEmailResponse);
    } catch (emailError) {
      console.error("Failed to send email to owner:", emailError);
      throw new Error(`Owner email error: ${emailError instanceof Error ? emailError.message : String(emailError)}`);
    }

    console.log("Attempting to send confirmation to user");
    // Send confirmation email to the user
    try {
      const userEmailResponse = await resend.emails.send({
        from: "CMIG <onboarding@resend.dev>",
        to: email,
        subject: "Thank you for contacting CMIG",
        html: `
          <h2>Thank you for contacting CMIG</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>CMIG Team</p>
        `,
      });
      console.log("User email response:", userEmailResponse);
    } catch (emailError) {
      console.error("Failed to send confirmation email to user:", emailError);
      // Continue execution even if confirmation email fails
    }

    return new Response(JSON.stringify({ 
      success: true,
      message: "Emails sent successfully"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Critical error in send-contact-email function:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
      cause: error.cause,
    });
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: typeof error === 'object' ? JSON.stringify(error) : 'No details available',
        type: error.name || typeof error
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);


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
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received request to send email");
    const { name, email, phone, message }: ContactEmailRequest = await req.json();
    console.log("Received form data:", { name, email, phone, message: message.substring(0, 20) + "..." });

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

    console.log("Sending email to owner");
    // Send email to site owner
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
    console.log("Owner email sent:", ownerEmailResponse);

    console.log("Sending confirmation to user");
    // Send confirmation email to the user
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
    console.log("User email sent:", userEmailResponse);

    return new Response(JSON.stringify({ 
      success: true,
      ownerEmail: ownerEmailResponse,
      userEmail: userEmailResponse
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        stack: error.stack,
        details: typeof error === 'object' ? JSON.stringify(error) : 'No details available'
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

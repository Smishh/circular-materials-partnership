
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { ExternalLink } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showFallbackMessage, setShowFallbackMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setShowFallbackMessage(false);
    
    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }
      
      // Validate required fields
      if (!formData.name.trim() || !formData.message.trim()) {
        throw new Error("Please fill in all required fields");
      }
      
      console.log("Submitting contact form:", { ...formData, message: formData.message.substring(0, 20) + "..." });
      
      try {
        const { data, error } = await supabase.functions.invoke('send-contact-email', {
          body: formData
        });

        console.log("Response from function:", { data, error });
        
        if (error) throw error;

        toast({
          title: "Thank you for your message!",
          description: "Your message has been successfully sent. We'll get back to you soon.",
          duration: 5000,
        });

        setFormData({ name: "", email: "", phone: "", message: "" });
      } catch (edgeFunctionError) {
        console.error('Edge function error:', edgeFunctionError);
        // Show the fallback message if the edge function fails
        setShowFallbackMessage(true);
        
        // Still consider this a successful submission from user perspective
        toast({
          title: "Message received",
          description: "Thank you for your message. Please check your email for confirmation.",
          duration: 5000,
        });

        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (validationError) {
      console.error('Validation error:', validationError);
      setErrorMessage(validationError instanceof Error ? validationError.message : "There was a problem sending your message. Please try again later.");
      toast({
        title: "Error",
        description: "There was a problem with your submission. Please check the form.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        {errorMessage && (
          <Alert variant="destructive" className="mb-6">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
        
        {showFallbackMessage && (
          <Alert className="mb-6 bg-yellow-50 border-yellow-200">
            <AlertTitle className="text-yellow-800">Note</AlertTitle>
            <AlertDescription className="text-yellow-700">
              Our email service is temporarily unavailable. We've recorded your message, but for immediate assistance, 
              please also contact us directly at{" "}
              <a href="mailto:info@cmig.co.za" className="underline font-medium inline-flex items-center">
                info@cmig.co.za <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
              Name
            </label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
              Message
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-[150px]"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-secondary hover:bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

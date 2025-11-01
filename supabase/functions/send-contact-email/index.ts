import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", { email: formData.email, subject: formData.subject });

    // Send email to the business
    const emailResponse = await resend.emails.send({
      from: "Kontaktformular <onboarding@resend.dev>",
      to: ["ritter@birnbaum-hotels.de"],
      subject: `Neue Kontaktanfrage: ${formData.subject}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Von:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>E-Mail:</strong> ${formData.email}</p>
        ${formData.phone ? `<p><strong>Telefon:</strong> ${formData.phone}</p>` : ''}
        <p><strong>Betreff:</strong> ${formData.subject}</p>
        <hr>
        <p><strong>Nachricht:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

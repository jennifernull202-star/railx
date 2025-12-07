import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY!);

// Utility to send emails
export async function sendEmail({ 
  to, 
  subject, 
  html 
}: { 
  to: string; 
  subject: string; 
  html: string;
}) {
  await resend.emails.send({
    from: "The Rail Exchange <notifications@therailexchange.com>",
    to,
    subject,
    html,
  });
}

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.SCHOOL_EMAIL || 'info@h-elite.co.za';

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : 'Not provided';
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    const { data, error } = await resend.emails.send({
      from: 'Hammanskraal Elite School <noreply@h-elite.co.za>',
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Contact Form: ${safeSubject} - from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2C3E6B; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Message</h1>
          </div>
          <div style="padding: 24px; background: #f9fafb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 8px; font-weight: bold; color: #374151; width: 30%;">Name:</td><td style="padding: 10px 8px; color: #111827;">${safeName}</td></tr>
              <tr style="background: white;"><td style="padding: 10px 8px; font-weight: bold; color: #374151;">Email:</td><td style="padding: 10px 8px; color: #111827;">${safeEmail}</td></tr>
              <tr><td style="padding: 10px 8px; font-weight: bold; color: #374151;">Phone:</td><td style="padding: 10px 8px; color: #111827;">${safePhone}</td></tr>
              <tr style="background: white;"><td style="padding: 10px 8px; font-weight: bold; color: #374151;">Subject:</td><td style="padding: 10px 8px; color: #111827;">${safeSubject}</td></tr>
            </table>

            <h3 style="color: #2C3E6B; border-bottom: 2px solid #CC5500; padding-bottom: 8px; margin-top: 24px;">Message</h3>
            <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <div style="background: #2C3E6B; padding: 16px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">Submitted via the Hammanskraal Elite School website</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
  }
}

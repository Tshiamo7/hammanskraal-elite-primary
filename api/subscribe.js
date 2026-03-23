import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.SCHOOL_EMAIL || 'info@h-elite.co.za';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Please provide an email address.' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Hammanskraal Elite School <noreply@h-elite.co.za>',
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2C3E6B; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Newsletter Subscriber</h1>
          </div>
          <div style="padding: 24px; background: #f9fafb;">
            <p style="color: #374151; font-size: 16px;">A new visitor has subscribed to receive news and updates:</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 8px; font-weight: bold; color: #374151; width: 30%;">Email:</td>
                <td style="padding: 10px 8px; color: #111827;">${email}</td>
              </tr>
            </table>
          </div>
          <div style="background: #2C3E6B; padding: 16px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">Submitted via the Hammanskraal Elite School website</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to subscribe. Please try again.' });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
  }
}

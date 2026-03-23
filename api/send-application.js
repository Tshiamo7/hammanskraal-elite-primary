import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.SCHOOL_EMAIL || 'info@h-elite.co.za';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      grade,
      parentName,
      relationship,
      email,
      phone,
      address,
      additionalInfo
    } = req.body;

    if (!firstName || !lastName || !dateOfBirth || !grade || !parentName || !relationship || !email || !phone || !address) {
      return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Hammanskraal Elite School <noreply@h-elite.co.za>',
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Application: ${firstName} ${lastName} - Grade ${grade}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2C3E6B; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Admission Application</h1>
          </div>
          <div style="padding: 24px; background: #f9fafb;">
            <h3 style="color: #2C3E6B; border-bottom: 2px solid #CC5500; padding-bottom: 8px;">Learner Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 8px; font-weight: bold; color: #374151; width: 40%;">First Name:</td><td style="padding: 10px 8px; color: #111827;">${firstName}</td></tr>
              <tr style="background: white;"><td style="padding: 10px 8px; font-weight: bold; color: #374151;">Last Name:</td><td style="padding: 10px 8px; color: #111827;">${lastName}</td></tr>
              <tr><td style="padding: 10px 8px; font-weight: bold; color: #374151;">Date of Birth:</td><td style="padding: 10px 8px; color: #111827;">${dateOfBirth}</td></tr>
              <tr style="background: white;"><td style="padding: 10px 8px; font-weight: bold; color: #374151;">Grade Applying For:</td><td style="padding: 10px 8px; color: #111827;">Grade ${grade}</td></tr>
            </table>

            <h3 style="color: #2C3E6B; border-bottom: 2px solid #CC5500; padding-bottom: 8px; margin-top: 24px;">Parent/Guardian Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 8px; font-weight: bold; color: #374151; width: 40%;">Name:</td><td style="padding: 10px 8px; color: #111827;">${parentName}</td></tr>
              <tr style="background: white;"><td style="padding: 10px 8px; font-weight: bold; color: #374151;">Relationship:</td><td style="padding: 10px 8px; color: #111827;">${relationship}</td></tr>
              <tr><td style="padding: 10px 8px; font-weight: bold; color: #374151;">Email:</td><td style="padding: 10px 8px; color: #111827;">${email}</td></tr>
              <tr style="background: white;"><td style="padding: 10px 8px; font-weight: bold; color: #374151;">Phone:</td><td style="padding: 10px 8px; color: #111827;">${phone}</td></tr>
              <tr><td style="padding: 10px 8px; font-weight: bold; color: #374151;">Home Address:</td><td style="padding: 10px 8px; color: #111827;">${address}</td></tr>
            </table>

            ${additionalInfo ? `
            <h3 style="color: #2C3E6B; border-bottom: 2px solid #CC5500; padding-bottom: 8px; margin-top: 24px;">Additional Information</h3>
            <p style="color: #374151; line-height: 1.6;">${additionalInfo}</p>
            ` : ''}
          </div>
          <div style="background: #2C3E6B; padding: 16px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">Submitted via the Hammanskraal Elite School website</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send application. Please try again.' });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
  }
}

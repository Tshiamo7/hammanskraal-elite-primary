import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.SCHOOL_EMAIL || 'info@h-elite.co.za';

const SECTIONS = [
  {
    title: 'Learner Information',
    rows: [
      ['Full names', 'learnerFullNames'],
      ['Surname', 'learnerSurname'],
      ['Preferred name', 'learnerPreferredName'],
      ['Date of birth', 'learnerDob'],
      ['ID number', 'learnerIdNumber'],
      ['Nationality', 'learnerNationality'],
      ['Religious denomination', 'religiousDenomination'],
      ['Gender', 'learnerGender'],
      ['Ethnic group', 'ethnicGroup'],
      ['Home language', 'homeLanguage'],
      ['Preferred tuition language', 'tuitionLanguage'],
      ['Dexterity', 'dexterity'],
      ['Learner mobile', 'learnerMobile'],
      ['Learner e-mail', 'learnerEmail'],
      ['Other learners at school', 'hasOtherLearners'],
      ['Other learner names', 'otherLearnerNames']
    ]
  },
  {
    title: 'Admission Details (2027)',
    rows: [
      ['Admission date', 'admissionDate'],
      ['Grade in 2027', 'grade'],
      ['Years in grade for 2027', 'yearsInGrade'],
      ['Years in phase for 2027', 'yearsInPhase'],
      ['Pre-primary education', 'prePrimary'],
      ['Pre-primary (other)', 'prePrimaryOther']
    ]
  },
  {
    title: 'Transport',
    rows: [
      ['Method of transport', 'transportMethod'],
      ['Taxi/Bus registration', 'vehicleReg'],
      ['Driver name', 'driverName'],
      ['Driver contact', 'driverContact']
    ]
  },
  {
    title: 'Family Information',
    rows: [
      ['Family status', 'familyStatus'],
      ['Parents deceased', 'parentsDeceased']
    ]
  },
  {
    title: 'Next of Kin',
    rows: [
      ['Name', 'nokName'],
      ['Relation', 'nokRelation'],
      ['Contact number', 'nokContact'],
      ['Alternative contact', 'nokAltContact']
    ]
  },
  {
    title: 'Learner Health',
    rows: [
      ['Chronic diseases', 'chronicDiseases'],
      ['Allergies', 'allergies'],
      ['Medication', 'medication']
    ]
  },
  {
    title: 'Medical Aid',
    rows: [
      ['Name', 'medAidName'],
      ['Telephone', 'medAidTel'],
      ['Member number', 'medAidMember'],
      ['Primary member', 'medAidPrimary']
    ]
  },
  {
    title: 'Family Doctor',
    rows: [
      ['Name', 'doctorName'],
      ['Telephone', 'doctorTel'],
      ['Business address', 'doctorAddress']
    ]
  },
  {
    title: 'Previous School',
    rows: [
      ['First registration in Gauteng', 'firstRegGauteng'],
      ['Attended school last year', 'attendedLastYear'],
      ['Province / Country', 'prevProvinceCountry'],
      ['Previous school', 'prevSchool'],
      ['Telephone', 'prevSchoolTel'],
      ['Address', 'prevSchoolAddress'],
      ['Province', 'prevSchoolProvince'],
      ['Highest grade', 'prevSchoolGrade'],
      ['Reason for leaving', 'reasonForLeaving']
    ]
  },
  {
    title: 'Biological Parent / Legal Guardian 1',
    rows: [
      ['Title', 'g1Title'],
      ['Initials', 'g1Initials'],
      ['Full names', 'g1FullNames'],
      ['Surname', 'g1Surname'],
      ['Preferred name', 'g1PreferredName'],
      ['ID number', 'g1IdNumber'],
      ['Nationality', 'g1Nationality'],
      ['Home language', 'g1HomeLanguage'],
      ['Marital status', 'g1MaritalStatus'],
      ['Mobile', 'g1Mobile'],
      ['Home telephone', 'g1HomeTel'],
      ['E-mail', 'g1Email'],
      ['Communication language', 'g1CommLang'],
      ['Communication methods', 'g1Comm'],
      ['Learner lives with this parent', 'g1LearnerLivesWith'],
      ['Residential address', 'g1ResAddress'],
      ['Postal address', 'g1PostalAddress'],
      ['Occupation status', 'g1OccStatus'],
      ['Occupation', 'g1Occupation'],
      ['Employer', 'g1Employer'],
      ['Work telephone', 'g1WorkTel'],
      ['Employer address', 'g1EmployerAddress']
    ]
  },
  {
    title: 'Biological Parent / Legal Guardian 2',
    rows: [
      ['Title', 'g2Title'],
      ['Initials', 'g2Initials'],
      ['Full names', 'g2FullNames'],
      ['Surname', 'g2Surname'],
      ['Preferred name', 'g2PreferredName'],
      ['ID number', 'g2IdNumber'],
      ['Nationality', 'g2Nationality'],
      ['Home language', 'g2HomeLanguage'],
      ['Marital status', 'g2MaritalStatus'],
      ['Mobile', 'g2Mobile'],
      ['Home telephone', 'g2HomeTel'],
      ['E-mail', 'g2Email'],
      ['Communication language', 'g2CommLang'],
      ['Communication methods', 'g2Comm'],
      ['Learner lives with this parent', 'g2LearnerLivesWith'],
      ['Residential address', 'g2ResAddress'],
      ['Postal address', 'g2PostalAddress'],
      ['Occupation status', 'g2OccStatus'],
      ['Occupation', 'g2Occupation'],
      ['Employer', 'g2Employer'],
      ['Work telephone', 'g2WorkTel'],
      ['Employer address', 'g2EmployerAddress']
    ]
  },
  {
    title: 'Accountable Person (Fees)',
    rows: [
      ['Accountable person', 'accountablePerson'],
      ['Other (individual)', 'accOtherIndividual'],
      ['Other (company / CC / trust)', 'accOtherCompany']
    ]
  }
];

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

function fmtValue(v) {
  if (v === undefined || v === null || v === '') return null;
  if (Array.isArray(v)) return v.length ? v.join(', ') : null;
  return String(v);
}

function renderSection(section, data) {
  const rows = section.rows
    .map(([label, key]) => {
      const value = fmtValue(data[key]);
      if (!value) return null;
      return `<tr>
        <td style="padding: 8px 12px; font-weight: 600; color: #374151; width: 40%; border-bottom: 1px solid #f3f4f6; vertical-align: top;">${escapeHtml(label)}</td>
        <td style="padding: 8px 12px; color: #111827; border-bottom: 1px solid #f3f4f6; white-space: pre-wrap;">${escapeHtml(value)}</td>
      </tr>`;
    })
    .filter(Boolean);
  if (rows.length === 0) return '';
  return `
    <h3 style="color: #2C3E6B; border-bottom: 2px solid #CC5500; padding-bottom: 8px; margin: 28px 0 12px; font-size: 16px;">${escapeHtml(section.title)}</h3>
    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">${rows.join('')}</table>`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body || {};

    const learnerFirstName = (data.learnerFullNames || '').split(' ')[0] || '';
    const learnerSurname = data.learnerSurname || '';
    const grade = data.grade || '';
    const g1Email = data.g1Email || '';

    if (!data.learnerFullNames || !data.learnerSurname || !data.learnerDob || !data.learnerIdNumber || !grade || !data.g1FullNames || !data.g1Mobile || !g1Email || !data.g1ResAddress) {
      return res.status(400).json({ error: 'Please complete all required fields before submitting.' });
    }
    if (!data.consent1 || !data.consent2 || !data.consent3 || !data.consent4 || !data.consent5) {
      return res.status(400).json({ error: 'Please tick all consent items to submit your application.' });
    }

    const guardian2Skipped = !!data.g2Skip;
    const sections = SECTIONS.filter((s) => !(guardian2Skipped && s.title.includes('Guardian 2')));
    const sectionsHtml = sections.map((s) => renderSection(s, data)).join('');

    const subject = `New Application: ${learnerFirstName} ${learnerSurname} — Grade ${grade} (2027)`;

    const html = `
      <div style="font-family: -apple-system, Segoe UI, Roboto, Arial, sans-serif; max-width: 720px; margin: 0 auto; background: white;">
        <div style="background: #2C3E6B; padding: 28px 32px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 22px; font-family: 'Playfair Display', Georgia, serif;">New Admission Application — 2027</h1>
          <p style="color: #E8D5A3; margin: 6px 0 0; font-size: 13px; letter-spacing: 0.05em;">Submitted via the school website</p>
        </div>
        <div style="padding: 24px 32px; background: #fafafa;">
          ${sectionsHtml}
          <div style="margin-top: 32px; padding: 16px 20px; background: #eff6ff; border-left: 3px solid #3b82f6; font-size: 13px; line-height: 1.7;">
            <strong style="color: #1e3a8a;">Pending in-person items:</strong>
            <span style="color: #1e40af;">parent/guardian signature, attached learner photo, banking details for fee payments, and certified supporting documents (ID, birth certificate, proof of residence, previous school reports).</span>
          </div>
          <p style="margin-top: 24px; color: #6b7280; font-size: 12px;">All five consent items were ticked at the time of submission.</p>
        </div>
        <div style="background: #2C3E6B; padding: 14px; text-align: center;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">Reply directly to this email to contact the parent (${escapeHtml(g1Email)}).</p>
        </div>
      </div>`;

    const { data: sent, error } = await resend.emails.send({
      from: 'Hammanskraal Elite School <noreply@h-elite.co.za>',
      to: [TO_EMAIL],
      replyTo: g1Email,
      subject,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send application. Please try again.' });
    }

    return res.status(200).json({ success: true, id: sent?.id });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
  }
}

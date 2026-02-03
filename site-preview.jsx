import React from 'react';

const navy = '#1a2744';
const red = '#c41e3a';
const gold = '#B8860B';

// SVG Icons
const BookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>;
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
const AwardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const MessageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;

// School Logo Component
const SchoolLogo = ({ size = 70 }) => (
  <div style={{
    width: size,
    height: size,
    borderRadius: '50%',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}>
    <div style={{
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${navy} 0%, #2a3a5a 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div style={{ color: gold, fontSize: size * 0.4, fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>HE</div>
    </div>
  </div>
);

// Navbar
const Navbar = () => (
  <nav style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 50,
    padding: '16px 0',
    background: 'rgba(0,0,0,0.3)'
  }}>
    <div style={{
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <SchoolLogo size={60} />
        <div>
          <div style={{ fontSize: 20, fontFamily: 'Georgia, serif', fontWeight: 'bold', color: 'white', lineHeight: 1.1 }}>
            Hammanskraal Elite
          </div>
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', color: gold }}>
            We Are Special
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {['Home', 'About Us', 'Academics', 'Admissions', 'Gallery'].map(item => (
          <span key={item} style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', color: 'white', cursor: 'pointer' }}>
            {item}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        <button style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', padding: '12px 24px', border: '1px solid white', color: 'white', background: 'transparent', cursor: 'pointer' }}>
          Contact Us
        </button>
        <button style={{ background: red, color: 'white', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', padding: '12px 24px', border: 'none', cursor: 'pointer' }}>
          Enrol Now
        </button>
      </div>
    </div>
  </nav>
);

// Hero Section
const Hero = () => (
  <section style={{
    position: 'relative',
    height: '100vh',
    minHeight: 700,
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    background: navy
  }}>
    {/* Background with overlay */}
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <div style={{
        width: '100%',
        height: '100%',
        background: `linear-gradient(135deg, ${red}40 0%, ${navy} 50%, #1a1a2e 100%)`,
        opacity: 0.9
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.5), transparent)'
      }} />
    </div>

    {/* Decorative elements */}
    <div style={{
      position: 'absolute',
      top: '20%',
      right: '10%',
      width: 300,
      height: 300,
      borderRadius: '50%',
      border: `2px solid ${gold}20`,
      zIndex: 1
    }} />
    <div style={{
      position: 'absolute',
      bottom: '30%',
      right: '15%',
      width: 200,
      height: 200,
      borderRadius: '50%',
      border: `2px solid ${red}30`,
      zIndex: 1
    }} />

    {/* Content */}
    <div style={{
      position: 'relative',
      zIndex: 10,
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 24px',
      width: '100%',
      marginTop: 80
    }}>
      <div style={{ maxWidth: 640 }}>
        <p style={{ color: gold, textTransform: 'uppercase', letterSpacing: '0.4em', fontWeight: 'bold', fontSize: 14, marginBottom: 24 }}>
          Hammanskraal • Gauteng
        </p>
        <h1 style={{ fontSize: 52, fontFamily: 'Georgia, serif', fontWeight: 'bold', color: 'white', lineHeight: 1.1, marginBottom: 32 }}>
          Where Every Child <br/><span style={{ color: red, fontStyle: 'italic' }}>Is Special</span>
        </h1>
        <p style={{ fontSize: 18, color: '#e0e0e0', marginBottom: 40, lineHeight: 1.7, fontWeight: 300, maxWidth: 500 }}>
          At Hammanskraal Elite School, we nurture young minds with excellence, celebrate our rich South African heritage, and prepare children to become leaders of tomorrow.
        </p>
        <div style={{ display: 'flex', gap: 24 }}>
          <button style={{ background: red, color: 'white', padding: '16px 40px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 12, border: 'none', cursor: 'pointer' }}>
            Virtual Tour →
          </button>
          <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '16px 40px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 12, cursor: 'pointer' }}>
            Our Story
          </button>
        </div>
      </div>
    </div>

    {/* Accent */}
    <div style={{ position: 'absolute', bottom: 0, right: 0, width: '25%', height: 100, background: red }} />
    <div style={{ position: 'absolute', bottom: 40, right: 40, color: 'rgba(255,255,255,0.06)', fontSize: 60, fontFamily: 'Georgia, serif', fontWeight: 'bold', textTransform: 'uppercase' }}>
      We Are Special
    </div>
  </section>
);

// Values Section
const values = [
  { Icon: BookIcon, title: "Academic Excellence", desc: "A strong foundation in literacy, numeracy, and critical thinking to prepare learners for high school and beyond." },
  { Icon: ShieldIcon, title: "Character & Values", desc: "Building integrity, respect, and responsibility in every learner through Ubuntu principles and moral guidance." },
  { Icon: HeartIcon, title: "Cultural Pride", desc: "Celebrating our South African heritage through traditional dance, music, and cultural events throughout the year." },
  { Icon: AwardIcon, title: "Holistic Growth", desc: "Nurturing the whole child through sports, arts, and extracurricular activities that develop confidence and teamwork." }
];

const Values = () => (
  <section style={{ padding: '100px 24px', background: 'white' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ marginBottom: 60 }}>
        <p style={{ color: red, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', fontSize: 12, marginBottom: 16 }}>
          Our Foundations
        </p>
        <h2 style={{ fontSize: 40, fontFamily: 'Georgia, serif', fontWeight: 'bold', color: navy }}>
          The Pillars of Excellence
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderLeft: '1px solid #f0f0f0', borderTop: '1px solid #f0f0f0' }}>
        {values.map((v, i) => (
          <div key={i} style={{ padding: 40, borderRight: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ color: red, marginBottom: 24 }}><v.Icon /></div>
            <h3 style={{ fontSize: 20, fontFamily: 'Georgia, serif', fontWeight: 'bold', color: navy, marginBottom: 16 }}>{v.title}</h3>
            <p style={{ color: '#6b7280', lineHeight: 1.7, fontSize: 14 }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Culture Section
const Culture = () => (
  <section style={{ padding: '100px 24px', background: '#fafafa' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 64, alignItems: 'center' }}>
      <div>
        <p style={{ color: red, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', fontSize: 12, marginBottom: 16 }}>
          School Life
        </p>
        <h2 style={{ fontSize: 40, fontFamily: 'Georgia, serif', fontWeight: 'bold', color: navy, marginBottom: 32, lineHeight: 1.2 }}>
          A Vibrant Community<br/>of Young Leaders
        </h2>
        <div style={{ color: '#6b7280', fontWeight: 300, lineHeight: 1.8 }}>
          <p style={{ marginBottom: 24 }}>
            At Hammanskraal Elite, education extends beyond the classroom. We celebrate our rich South African culture through traditional dance, music performances, and heritage day celebrations.
          </p>
          <p>
            Our learners participate in annual graduation ceremonies, sports days, cultural events, and community programmes that build character and create lasting memories.
          </p>
        </div>

        <div style={{ marginTop: 48, paddingTop: 48, borderTop: '1px solid #e5e7eb', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div>
            <span style={{ display: 'block', fontSize: 30, fontFamily: 'Georgia, serif', fontWeight: 'bold', color: red }}>15+</span>
            <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', color: '#9ca3af' }}>Years of Excellence</span>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: 30, fontFamily: 'Georgia, serif', fontWeight: 'bold', color: red }}>100%</span>
            <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', color: '#9ca3af' }}>Dedicated Staff</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ height: 300, background: `linear-gradient(135deg, ${gold}40, ${red}40)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontFamily: 'Georgia, serif', fontSize: 16, textAlign: 'center', padding: 20 }}>
              🎭 Cultural Dance<br/>Performance
            </span>
          </div>
          <div style={{ height: 180, background: red, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
            <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 18, color: 'white', textAlign: 'center', lineHeight: 1.4 }}>
              "We Are Special —<br/>Every child matters,<br/>every dream counts."
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 48 }}>
          <div style={{ height: 180, background: `linear-gradient(135deg, ${navy}80, ${navy})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontFamily: 'Georgia, serif', fontSize: 16, textAlign: 'center', padding: 20 }}>
              🎓 Graduation<br/>Ceremony
            </span>
          </div>
          <div style={{ height: 300, background: `linear-gradient(135deg, ${red}40, ${gold}40)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontFamily: 'Georgia, serif', fontSize: 16, textAlign: 'center', padding: 20 }}>
              👧 Our Proud<br/>Graduates
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer style={{ background: navy, color: 'white', padding: '80px 24px 48px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 64, marginBottom: 60 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <SchoolLogo size={50} />
            <div>
              <div style={{ fontSize: 18, fontFamily: 'Georgia, serif', fontWeight: 'bold', color: 'white', lineHeight: 1 }}>Hammanskraal Elite</div>
              <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', color: gold }}>We Are Special</div>
            </div>
          </div>
          <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: 14, fontWeight: 300 }}>
            Nurturing young minds with excellence and celebrating our South African heritage in Hammanskraal.
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', marginBottom: 24, fontSize: 18 }}>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
              <span style={{ color: red }}><MapPinIcon /></span>
              <span style={{ fontSize: 14, fontWeight: 300 }}>Hammanskraal, Gauteng, South Africa</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <span style={{ color: red }}><PhoneIcon /></span>
              <span style={{ fontSize: 14, fontWeight: 300 }}>+27 (12) 000 0000</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ color: red }}><MailIcon /></span>
              <span style={{ fontSize: 14, fontWeight: 300 }}>info@hammanskraalelite.co.za</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', marginBottom: 24, fontSize: 18 }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af', fontSize: 14 }}>
            {['About Our School', 'Academic Programme', 'Admissions', 'School Fees', 'Contact Us'].map(item => (
              <li key={item} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontWeight: 300, cursor: 'pointer' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', marginBottom: 24, fontSize: 18 }}>Stay Connected</h4>
          <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 24, fontWeight: 300 }}>
            Subscribe to receive news and updates from Hammanskraal Elite School.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input type="email" placeholder="Your Email Address" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: 14, fontSize: 14, color: 'white' }} />
            <button style={{ background: red, color: 'white', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 10, padding: 14, border: 'none', cursor: 'pointer' }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>
        <p>© 2024 Hammanskraal Elite School. We Are Special.</p>
        <div style={{ display: 'flex', gap: 40 }}>
          <span style={{ cursor: 'pointer' }}>Privacy</span>
          <span style={{ cursor: 'pointer' }}>Terms</span>
          <span style={{ cursor: 'pointer' }}>POPIA</span>
        </div>
      </div>
    </div>
  </footer>
);

// Chatbot Button
const ChatbotButton = () => (
  <div style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 60 }}>
    <button style={{
      width: 56,
      height: 56,
      background: red,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    }}>
      <MessageIcon />
    </button>
  </div>
);

// Main App
export default function HammanskraalEliteSchool() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Values />
        <Culture />
      </main>
      <ChatbotButton />
      <Footer />
    </div>
  );
}

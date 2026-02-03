import React, { useState } from 'react';

// Icons as simple SVG components
const Book = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>;
const Shield = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>;
const Heart = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
const Award = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
const Mail = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const Phone = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MapPin = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const MessageSquare = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;

const navy = '#1a2744';
const gold = '#B8860B';

// Navbar Component
const Navbar = () => {
  return (
    <nav style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 50, backgroundColor: 'transparent', padding: '24px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '48px', height: '48px', backgroundColor: navy, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: '24px' }}>L</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '20px', fontFamily: 'Georgia, serif', fontWeight: 'bold', color: 'white', lineHeight: 1 }}>Lumina</span>
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', color: '#d1d5db' }}>Primary School</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {['Home', 'About Us', 'Academics', 'Admission'].map((item) => (
            <a key={item} href="#" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
              {item}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', padding: '12px 24px', border: '1px solid white', color: 'white', backgroundColor: 'transparent', cursor: 'pointer' }}>
            Contact Us
          </button>
          <button style={{ backgroundColor: gold, color: 'white', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', padding: '12px 24px', border: 'none', cursor: 'pointer' }}>
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '700px', display: 'flex', alignItems: 'center', overflow: 'hidden', backgroundColor: navy }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1544717297-fa95b3ee9bc4?auto=format&fit=crop&q=80&w=2000"
          alt="School Campus"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${navy}, ${navy}99, transparent)` }}></div>
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%', marginTop: '80px' }}>
        <div style={{ maxWidth: '640px' }}>
          <p style={{ color: gold, textTransform: 'uppercase', letterSpacing: '0.4em', fontWeight: 'bold', fontSize: '14px', marginBottom: '24px' }}>Established 1998 • Cape Town</p>
          <h1 style={{ fontSize: '56px', fontFamily: 'Georgia, serif', fontWeight: 'bold', color: 'white', lineHeight: 1.1, marginBottom: '32px' }}>
            Nurturing Excellence <br />
            <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>Through Tradition</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#d1d5db', marginBottom: '40px', lineHeight: 1.7, fontWeight: 300, maxWidth: '500px' }}>
            A classical approach to education in a modern world. Lumina Primary provides a foundation of virtue, wisdom, and character for the leaders of tomorrow.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <button style={{ backgroundColor: gold, color: 'white', padding: '16px 40px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer' }}>
              Virtual Tour <ChevronRight />
            </button>
            <button style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '16px 40px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', cursor: 'pointer' }}>
              Our Heritage
            </button>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '25%', height: '128px', backgroundColor: gold }}></div>
      <div style={{ position: 'absolute', bottom: '48px', right: '48px', color: 'rgba(255,255,255,0.1)', fontSize: '100px', fontFamily: 'Georgia, serif', fontWeight: 'bold', pointerEvents: 'none' }}>
        EXCELLENCE
      </div>
    </section>
  );
};

// Values Component
const valueList = [
  { Icon: Book, title: "Classical Education", desc: "A curriculum rooted in the liberal arts, emphasizing critical thinking and rhetorical excellence." },
  { Icon: Shield, title: "Moral Integrity", desc: "Instilling universal virtues of honesty, responsibility, and courage in every student." },
  { Icon: Heart, title: "Servant Leadership", desc: "Teaching children that true greatness is found in serving others and their community." },
  { Icon: Award, title: "Academic Rigor", desc: "Striving for the highest standards of scholarship through disciplined study and curiosity." }
];

const Values = () => {
  return (
    <section style={{ padding: '128px 24px', backgroundColor: 'white', borderBottom: '1px solid #f3f4f6' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '80px' }}>
          <div style={{ maxWidth: '576px' }}>
            <p style={{ color: gold, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', fontSize: '12px', marginBottom: '16px' }}>Our Foundations</p>
            <h2 style={{ fontSize: '40px', fontFamily: 'Georgia, serif', fontWeight: 'bold', color: navy }}>The Four Pillars of a Lumina Education</h2>
          </div>
          <div style={{ height: '1px', backgroundColor: '#e5e7eb', flex: 1, marginBottom: '24px', marginLeft: '48px', marginRight: '48px' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderLeft: '1px solid #f3f4f6', borderTop: '1px solid #f3f4f6' }}>
          {valueList.map((v, i) => (
            <div key={i} style={{ padding: '48px', borderRight: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6' }}>
              <div style={{ color: gold, marginBottom: '32px' }}>
                <v.Icon />
              </div>
              <h3 style={{ fontSize: '20px', fontFamily: 'Georgia, serif', fontWeight: 'bold', color: navy, marginBottom: '16px' }}>{v.title}</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.7, fontSize: '14px' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Culture Component
const Culture = () => {
  return (
    <section style={{ padding: '128px 24px', backgroundColor: '#fafafa' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <p style={{ color: gold, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', fontSize: '12px', marginBottom: '16px' }}>Campus Life</p>
            <h2 style={{ fontSize: '40px', fontFamily: 'Georgia, serif', fontWeight: 'bold', color: navy, marginBottom: '32px', lineHeight: 1.2 }}>
              A Community of <br />Character & Culture
            </h2>
            <div style={{ color: '#6b7280', fontWeight: 300, lineHeight: 1.8 }}>
              <p style={{ marginBottom: '24px' }}>
                At Lumina, education extends far beyond the classroom walls. We cultivate a rich environment where the arts, athletics, and cultural traditions are celebrated as essential parts of a whole person.
              </p>
              <p>
                Our students participate in a diverse range of extracurricular societies, from the debating union to the classical orchestra, fostering lifelong passions and friendships.
              </p>
            </div>

            <div style={{ marginTop: '48px', paddingTop: '48px', borderTop: '1px solid #e5e7eb', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <span style={{ display: 'block', fontSize: '30px', fontFamily: 'Georgia, serif', fontWeight: 'bold', color: navy }}>25+</span>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', color: '#9ca3af' }}>Student Clubs</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '30px', fontFamily: 'Georgia, serif', fontWeight: 'bold', color: navy }}>100%</span>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', color: '#9ca3af' }}>Participation</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ height: '400px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Classroom" />
              </div>
              <div style={{ height: '250px', overflow: 'hidden', backgroundColor: gold, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px', color: 'white', textAlign: 'center' }}>
                <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px' }}>"Education is not the filling of a pail, but the lighting of a fire."</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '48px' }}>
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Graduation" />
              </div>
              <div style={{ height: '400px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Campus Building" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer style={{ backgroundColor: navy, color: 'white', padding: '96px 24px 48px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '64px', marginBottom: '80px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: gold, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontWeight: 'bold', fontSize: '20px' }}>L</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '20px', fontFamily: 'Georgia, serif', fontWeight: 'bold', lineHeight: 1 }}>Lumina</span>
                <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', color: '#9ca3af' }}>Primary School</span>
              </div>
            </div>
            <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: '14px', fontWeight: 300 }}>
              Fostering a tradition of academic excellence and character development in Cape Town.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', marginBottom: '32px', fontSize: '18px' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                <span style={{ color: gold }}><MapPin /></span>
                <span style={{ fontSize: '14px', fontWeight: 300 }}>123 Protea Avenue, Newlands, Cape Town, 7700</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <span style={{ color: gold }}><Phone /></span>
                <span style={{ fontSize: '14px', fontWeight: 300 }}>+27 (21) 555 0123</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ color: gold }}><Mail /></span>
                <span style={{ fontSize: '14px', fontWeight: 300 }}>office@luminaprimary.ac.za</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', marginBottom: '32px', fontSize: '18px' }}>Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af', fontSize: '14px' }}>
              {['Academic Calendar', 'Prospectus 2024', 'Admissions Portal', 'School Fees', 'Parent Portal'].map(item => (
                <li key={item} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: 300 }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', marginBottom: '32px', fontSize: '18px' }}>Inquiry</h4>
            <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '24px', fontWeight: 300 }}>Enter your email to receive our monthly heritage newsletter.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input type="email" placeholder="Email Address" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', fontSize: '14px', color: 'white', outline: 'none' }} />
              <button style={{ backgroundColor: gold, color: 'white', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '10px', padding: '16px', border: 'none', cursor: 'pointer' }}>
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '48px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>
          <p>© 2024 Lumina Primary School. Designed for Excellence.</p>
          <div style={{ display: 'flex', gap: '40px' }}>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Compliance</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>PAIA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Chatbot Button (simplified - just shows the button)
const ChatbotButton = () => {
  return (
    <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 60 }}>
      <button style={{ width: '56px', height: '56px', backgroundColor: navy, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', border: 'none', cursor: 'pointer' }}>
        <MessageSquare />
      </button>
    </div>
  );
};

// Main App
export default function LuminaPrimarySchool() {
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

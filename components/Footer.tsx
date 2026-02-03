
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#B8860B] flex items-center justify-center font-serif font-bold text-xl">L</div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight leading-none">Lumina</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400">Primary School</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm font-light">
              Fostering a tradition of academic excellence and character development in Cape Town. We believe in the classical pursuit of truth, goodness, and beauty.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#B8860B] hover:border-[#B8860B] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-8 text-lg text-white">Contact</h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-start gap-4">
                <MapPin className="text-[#B8860B] flex-shrink-0" size={20} />
                <span className="text-sm font-light">123 Protea Avenue, Newlands, Cape Town, 7700</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-[#B8860B] flex-shrink-0" size={20} />
                <span className="text-sm font-light">+27 (21) 555 0123</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-[#B8860B] flex-shrink-0" size={20} />
                <span className="text-sm font-light">office@luminaprimary.ac.za</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-8 text-lg text-white">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['Academic Calendar', 'Prospectus 2024', 'Admissions Portal', 'School Fees', 'Parent Portal'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-[#B8860B] transition-colors flex items-center justify-between group py-2 border-b border-white/5">
                    <span className="font-light">{item}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-8 text-lg text-white">Inquiry</h4>
            <p className="text-xs text-gray-400 mb-6 font-light">Enter your email to receive our monthly heritage newsletter.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 px-4 py-4 text-sm focus:border-[#B8860B] outline-none transition-all"
              />
              <button className="bg-[#B8860B] text-white font-bold uppercase tracking-widest text-[10px] py-4 hover:bg-[#9a7009] transition-all">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <p>© 2024 Lumina Primary School. Designed for Excellence.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
            <a href="#" className="hover:text-white transition-colors">PAIA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

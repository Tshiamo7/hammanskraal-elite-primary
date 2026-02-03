
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544717297-fa95b3ee9bc4?auto=format&fit=crop&q=80&w=2000" 
          alt="School Campus" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
        <div className="max-w-2xl animate-fade-in">
          <p className="text-[#B8860B] uppercase tracking-[0.4em] font-bold text-sm mb-6">Established 1998 • Cape Town</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8">
            Nurturing Excellence <br />
            <span className="italic font-normal">Through Tradition</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light max-w-lg">
            A classical approach to education in a modern world. Lumina Primary provides a foundation of virtue, wisdom, and character for the leaders of tomorrow.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-[#B8860B] text-white px-10 py-4 font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-[#9a7009] transition-all group shadow-xl">
              Virtual Tour <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border border-white/30 text-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
              Our Heritage
            </button>
          </div>
        </div>
      </div>

      {/* Side Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/4 h-32 bg-[#B8860B] hidden lg:block"></div>
      <div className="absolute bottom-12 right-12 text-white/50 text-[120px] font-serif font-bold pointer-events-none hidden lg:block opacity-20">
        EXCELLENCE
      </div>
    </section>
  );
};

export default Hero;

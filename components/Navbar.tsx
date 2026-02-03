
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-navy flex items-center justify-center">
            <span className="text-white font-serif font-bold text-2xl">L</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-serif font-bold tracking-tight leading-none ${isScrolled ? 'text-navy' : 'text-white'}`}>Lumina</span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`}>Primary School</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-10">
          {['Home', 'About Us', 'Academics', 'Admission'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className={`text-xs uppercase tracking-widest font-bold transition-all hover:text-[#B8860B] ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className={`hidden sm:block text-xs uppercase tracking-widest font-bold px-6 py-3 border transition-all ${isScrolled ? 'border-navy text-navy hover:bg-navy hover:text-white' : 'border-white text-white hover:bg-white hover:text-navy'}`}>
            Contact Us
          </button>
          <button className="bg-[#B8860B] text-white text-xs uppercase tracking-widest font-bold px-6 py-3 hover:bg-[#9a7009] transition-all">
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

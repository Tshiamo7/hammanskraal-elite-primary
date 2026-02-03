
import React from 'react';
import { Book, Heart, Shield, Award } from 'lucide-react';

const valueList = [
  {
    icon: <Book size={32} />,
    title: "Classical Education",
    desc: "A curriculum rooted in the liberal arts, emphasizing critical thinking and rhetorical excellence."
  },
  {
    icon: <Shield size={32} />,
    title: "Moral Integrity",
    desc: "Instilling universal virtues of honesty, responsibility, and courage in every student."
  },
  {
    icon: <Heart size={32} />,
    title: "Servant Leadership",
    desc: "Teaching children that true greatness is found in serving others and their community."
  },
  {
    icon: <Award size={32} />,
    title: "Academic Rigor",
    desc: "Striving for the highest standards of scholarship through disciplined study and curiosity."
  }
];

const Values: React.FC = () => {
  return (
    <section id="values" className="py-32 px-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <p className="text-[#B8860B] uppercase tracking-widest font-bold text-xs mb-4">Our Foundations</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">The Four Pillars of a Lumina Education</h2>
          </div>
          <div className="h-px bg-gray-200 flex-1 hidden md:block mb-6 mx-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-100">
          {valueList.map((v, i) => (
            <div 
              key={i} 
              className="p-12 border-r border-b border-gray-100 hover:bg-gray-50 transition-colors group"
            >
              <div className="text-[#B8860B] mb-8 group-hover:scale-110 transition-transform duration-500">
                {v.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-4">{v.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

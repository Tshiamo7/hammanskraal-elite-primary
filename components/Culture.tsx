
import React from 'react';

const Culture: React.FC = () => {
  return (
    <section id="culture" className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="text-[#B8860B] uppercase tracking-widest font-bold text-xs mb-4">Campus Life</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8 leading-tight">
              A Community of <br />Character & Culture
            </h2>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                At Lumina, education extends far beyond the classroom walls. We cultivate a rich environment where the arts, athletics, and cultural traditions are celebrated as essential parts of a whole person.
              </p>
              <p>
                Our students participate in a diverse range of extracurricular societies, from the debating union to the classical orchestra, fostering lifelong passions and friendships.
              </p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-gray-200 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-3xl font-serif font-bold text-navy">25+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Student Clubs</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-navy">100%</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Participation</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-[400px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                    alt="Classroom"
                  />
                </div>
                <div className="h-[250px] overflow-hidden bg-[#B8860B] flex items-center justify-center p-8 text-white text-center">
                  <p className="font-serif italic text-xl">"Education is not the filling of a pail, but the lighting of a fire."</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-[250px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                    alt="Graduation"
                  />
                </div>
                <div className="h-[400px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                    alt="Campus Building"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;

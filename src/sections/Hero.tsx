import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#F9F7F2] pt-20 overflow-hidden">
      
      {/* MICRO-DRAWINGS: Subtle Triangle/Crystal Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 40L20 0L40 40H0Z' fill='%235E1214' fill-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }}>
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        
        {/* CENTERED BRANDING */}
        <div data-aos="fade-down" className="flex flex-col items-center">
          <div className="h-12 w-[1px] bg-[#5E1214] mb-6"></div>
          <span className="text-[#5E1214] font-bold tracking-[0.3em] text-xs uppercase mb-8">
            Roots Capital Advisory
          </span>
          
          <h1 className="text-5xl md:text-8xl font-serif text-slate-900 leading-tight mb-8">
            Preserving Wealth, <br />
            <span className="italic font-light text-[#5E1214]/70">Nurturing Legacies</span>
          </h1>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            A single-window approach to the complex needs of India's most influential families. 
            Built on trust, transparency, and a deep understanding of your journey.
          </p>

          {/* CURVED BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#5E1214] text-white px-10 py-4 rounded-full font-bold hover:bg-[#4A0D0F] transition-all transform hover:scale-105 shadow-xl shadow-maroon/20">
              Explore Services
            </button>
            <button className="border border-slate-300 text-slate-700 px-10 py-4 rounded-full font-bold hover:bg-white transition-all">
              Our Philosophy
            </button>
          </div>
        </div>
      </div>

      {/* PAINTERLY / ILLUSIONARY ELEMENT: Ghibli-style landscape at the very bottom */}
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#F2E8CF]/50 to-transparent flex justify-center items-end opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80" 
          alt="Painting Background" 
          className="w-full h-full object-cover mix-blend-multiply mask-image-gradient"
        />
      </div>
    </section>
  );
};

export default Hero;
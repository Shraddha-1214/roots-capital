import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[110vh] flex flex-col bg-[#F9F7F2] overflow-hidden">
      
      {/* 1. CRYSTALLINE MICRO-DRAWINGS */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-10" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 0l40 40-40 40L0 40z' fill='none' stroke='%235E1214' stroke-width='1'/%3E%3Cpath d='M40 10l30 30-30 30-30-30z' fill='none' stroke='%235E1214' stroke-width='0.5'/%3E%3C/svg%3E")`, 
          backgroundSize: '150px 150px' 
        }}
      ></div>

      {/* 2. FAMILY ILLUSTRATION BACKGROUND */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 transition-opacity duration-1000">
        <img 
          src="https://cdn.pixabay.com/photo/2020/08/25/18/28/family-5467537_1280.png" 
          alt="Family Legacy Illustration" 
          className="w-full h-full object-contain md:object-cover scale-110"
        />
        {/* Soft Radial Vignette: Makes the center clear for text */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#F9F7F2]/60 to-[#F9F7F2]"></div>
      </div>

      {/* 3. MAIN CONTENT: Centered Branding */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 pt-40 pb-20 relative z-20 text-center">
        {/* Vertical Branding Accent */}
        <div className="h-16 w-[1px] bg-[#5E1214] mb-8 shadow-sm"></div>
        
        <span className="text-[#5E1214] font-bold tracking-[0.4em] text-xs uppercase mb-8">
          Roots Capital Advisory
        </span>
        
        <h1 className="text-5xl md:text-8xl font-serif text-slate-900 leading-[1.1] mb-8 drop-shadow-sm">
          Preserving Wealth, <br />
          <span className="italic font-light text-[#5E1214]/80 text-4xl md:text-7xl block mt-2">Nurturing Legacies</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-700/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Securing the financial future of generations to come. 
          Bespoke advisory built on trust and family values.
        </p>

        {/* 4. CURVED BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-6 mb-24">
          <button className="bg-[#5E1214] text-white px-12 py-4 rounded-full font-bold hover:bg-[#4A0D0F] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#5E1214]/20 flex items-center gap-2">
            Explore Services <ArrowRight size={18} />
          </button>
          <button className="border border-slate-300 bg-white/40 backdrop-blur-sm text-slate-700 px-12 py-4 rounded-full font-bold hover:bg-white transition-all transform hover:-translate-y-1">
            Our Philosophy
          </button>
        </div>
      </div>

      {/* 5. STATS BAR */}
      <div className="relative z-30 w-full pb-16 px-4">
        <div className="max-w-6xl mx-auto bg-slate-900/95 backdrop-blur-md rounded-[2.5rem] p-10 shadow-2xl flex flex-wrap justify-around items-center gap-8 border border-white/10">
          <div className="text-center">
            <p className="text-4xl font-serif text-white mb-1">₹500Cr+</p>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">Assets Under Advisory</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif text-white mb-1">10+</p>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">Years of Excellence</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif text-white mb-1">500+</p>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">Families Secured</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif text-white mb-1">98%</p>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">Retention Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
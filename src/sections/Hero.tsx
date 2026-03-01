import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#F9F7F2] overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=2070" 
          alt="Family Legacy" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F7F2] via-transparent to-[#F9F7F2]"></div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 pt-40 pb-20 relative z-10 text-center">
        <div className="h-16 w-[1px] bg-[#5E1214] mb-8" data-aos="fade-down"></div>
        
        <span className="text-[#5E1214] font-bold tracking-[0.4em] text-[10px] uppercase mb-8" data-aos="fade-up">
          Roots Capital Advisory
        </span>
        
        <h1 className="text-5xl md:text-8xl font-serif text-slate-900 leading-[1.1] mb-8" data-aos="fade-up" data-aos-delay="100">
          Preserving Wealth, <br />
          <span className="italic font-light text-[#5E1214]/80 text-4xl md:text-7xl block mt-2">Nurturing Legacies</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed font-light" data-aos="fade-up" data-aos-delay="200">
          Securing the financial future of generations to come. <br />
          Bespoke advisory built on trust and family values.
        </p>

        {/* BUTTONS: rounded-lg (8px) */}
        <div className="flex flex-col sm:flex-row gap-4 mb-24" data-aos="fade-up" data-aos-delay="300">
          <button className="bg-[#5E1214] text-white px-12 py-4 rounded-lg font-bold hover:bg-[#4A0D0F] transition-all shadow-lg flex items-center gap-2">
            Explore Services <ArrowRight size={18} />
          </button>
          <button className="border border-slate-300 bg-white/60 text-slate-700 px-12 py-4 rounded-lg font-bold hover:bg-white transition-all">
            Our Philosophy
          </button>
        </div>
      </div>

      {/* 3. STAGGERED STATS BAR: Using AOS for a smoother entrance */}
      <div className="relative z-20 w-full pb-12 px-4">
        <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-lg p-10 shadow-sm flex flex-wrap justify-around items-center gap-8 border border-[#5E1214]/10">
          
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <p className="text-3xl font-serif text-slate-900 mb-1">₹500Cr+</p>
            <p className="text-[#5E1214]/60 text-[10px] uppercase tracking-widest font-bold">Assets Under Advisory</p>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="500">
            <p className="text-3xl font-serif text-slate-900 mb-1">10+</p>
            <p className="text-[#5E1214]/60 text-[10px] uppercase tracking-widest font-bold">Years of Excellence</p>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="600">
            <p className="text-3xl font-serif text-slate-900 mb-1">500+</p>
            <p className="text-[#5E1214]/60 text-[10px] uppercase tracking-widest font-bold">Families Secured</p>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="700">
            <p className="text-3xl font-serif text-slate-900 mb-1">98%</p>
            <p className="text-[#5E1214]/60 text-[10px] uppercase tracking-widest font-bold">Retention Rate</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
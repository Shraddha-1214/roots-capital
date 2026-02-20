import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F9F7F2] overflow-hidden pt-20">
      {/* Subtle Watercolor/Texture Overlay (Optional) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-[#5E1214]"></span>
            <span className="text-[#5E1214] font-bold tracking-[0.2em] text-xs uppercase">Boutique Wealth Advisory</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-[#2D3436] leading-[1.1] mb-8">
            Helping families <br />
            <span className="italic font-light text-slate-400">create lasting</span> <br />
            <span className="text-[#5E1214]">legacies</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Because wealth is only one dimension of what you leave behind. We provide conflict-free, transparent advice for the modern billionaire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#5E1214] text-white px-8 py-4 font-bold flex items-center justify-center gap-3 hover:bg-[#4A0D0F] transition-colors shadow-lg shadow-[#5E1214]/10">
              Get in Touch <ArrowRight size={18} />
            </button>
            <button className="border border-slate-300 text-slate-700 px-8 py-4 font-bold hover:bg-white transition-colors">
              Our Process
            </button>
          </div>
        </div>

        {/* Right Side: Sophisticated Visual */}
        <div className="relative" data-aos="zoom-in">
          <div className="aspect-[4/5] bg-[#F2F2F2] overflow-hidden">
             {/* Replace with a high-end image of a classic library or abstract architecture */}
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
               alt="Sophisticated Office" 
               className="w-full h-full object-cover mix-blend-multiply opacity-80"
             />
          </div>
          {/* Gold Accent Box */}
          <div className="absolute -bottom-6 -left-6 bg-[#B69354] p-8 hidden md:block">
            <p className="text-white text-3xl font-serif">13+</p>
            <p className="text-white/80 text-xs uppercase tracking-widest font-bold">Years of Trust</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
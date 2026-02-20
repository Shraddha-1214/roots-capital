import React from 'react';
import { Search, PenTool, Zap, RefreshCw } from 'lucide-react';

const steps = [
  { title: "Discovery & Listening", desc: "Our relationships begin with deep conversations where you do the talking.", icon: <Search /> },
  { title: "Bespoke Strategy", desc: "We avoid rigid models, instead developing custom strategies for your life goals.", icon: <PenTool /> },
  { title: "Proactive Execution", desc: "Implementing your strategy with undivided attention to detail and efficiency.", icon: <Zap /> },
  { title: "Continuous Evolution", desc: "Ongoing follow-up to keep your purpose-driven financial future on track.", icon: <RefreshCw /> }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-wealth-navy relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-wealth-gold font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Methodology</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-white">A Journey Built Around You</h3>
        </div>
        
        <div className="relative">
          {/* Central Glow Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-wealth-gold/50 via-wealth-gold/10 to-transparent" />
          
          <div className="space-y-24 lg:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 p-4" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                  <div className="bg-white/[0.03] border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-sm hover:border-wealth-gold/20 transition-all duration-500">
                    <div className="inline-flex p-4 rounded-2xl bg-wealth-gold/10 text-wealth-gold mb-6">
                      {React.cloneElement(step.icon as any, { size: 28 })}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                    <p className="text-white/50 leading-relaxed text-lg">{step.desc}</p>
                  </div>
                </div>

                {/* Number Circle */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-wealth-navy border-2 border-wealth-gold text-wealth-gold font-bold z-10 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  {index + 1}
                </div>
                
                <div className="w-full lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
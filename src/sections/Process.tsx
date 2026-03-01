import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { 
      number: "01",
      title: "Discovery", 
      desc: "Understanding your family's core values and financial landscape through deep consultation." 
    },
    { 
      number: "02",
      title: "Strategy", 
      desc: "Crafting a bespoke roadmap for wealth preservation tailored to your long-term objectives." 
    },
    { 
      number: "03",
      title: "Execution", 
      desc: "Disciplined implementation across global asset classes with rigorous risk management." 
    },
    { 
      number: "04",
      title: "Review", 
      desc: "Continuous monitoring and periodic rebalancing to align with evolving family needs." 
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#F5F2ED]"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-24" data-aos="fade-up">
          <h4 className="text-[#5E1214] font-bold uppercase tracking-[0.3em] text-[12px] mb-4">Our Methodology</h4>
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight">A Disciplined Approach</h2>
          <div className="mt-8 h-1 w-24 bg-[#5E1214] mx-auto"></div>
        </div>

        {/* Structured Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#5E1214]/20 -translate-x-1/2"></div>

          {/* Unified Spacing Logic for Equal Gaps */}
          <div className="flex flex-col gap-y-12 md:gap-y-24"> 
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center justify-between relative ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[45%]" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                  <div className="bg-white p-10 md:p-14 rounded-lg border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 group">
                    
                    {/* UPDATED: Visible Maroon Numbers */}
                    <span className="text-6xl font-serif text-[#5E1214]/40 group-hover:text-[#5E1214] transition-colors block mb-6">
                      {step.number}
                    </span>
                    
                    <h4 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">{step.title}</h4>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Center Connection Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#5E1214] border-4 border-[#F5F2ED] z-10 shadow-md"></div>

                {/* Empty Side for Staggered Effect */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
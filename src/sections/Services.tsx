import React from 'react';
import { ArrowRight } from 'lucide-react';

const modes = [
  {
    id: "01",
    title: "Personal Investment Management",
    desc: "Bespoke portfolios for portfolios starting at ₹20 Crores, focused on risk-adjusted growth.",
    category: "HNI Services"
  },
  {
    id: "02",
    title: "Multi-family Office",
    desc: "Strategic wealth coordination for families with > ₹50 Crores in investable assets.",
    category: "Institutional"
  },
  {
    id: "03",
    title: "Single Family Office",
    desc: "A dedicated 'Built-Operate-Transfer' model for asset bases exceeding ₹2000 Crores.",
    category: "Legacy"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#F9F7F2] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Minimalist & Balanced */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl" data-aos="fade-right">
            <h4 className="text-[#5E1214] font-bold uppercase tracking-[0.3em] text-xs mb-4">Modes of Engagement</h4>
            <h3 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              We help shorten the distance between <span className="italic text-slate-400 font-light underline decoration-[#B69354]/30">Success</span> and <span className="text-[#5E1214]">Happiness</span>
            </h3>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-[#5E1214] pb-2 hover:text-[#5E1214] transition-all">
            View All Services
          </button>
        </div>

        {/* Engagement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-slate-200">
          {modes.map((mode, index) => (
            <div 
              key={index} 
              className="group p-12 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-white transition-all duration-700"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <span className="text-4xl font-serif text-slate-200 group-hover:text-[#5E1214]/20 transition-colors duration-500">
                {mode.id}
              </span>
              <h5 className="mt-8 text-[#B69354] uppercase tracking-widest text-[10px] font-bold">
                {mode.category}
              </h5>
              <h4 className="mt-4 text-2xl font-serif text-slate-900 group-hover:text-[#5E1214] transition-colors">
                {mode.title}
              </h4>
              <p className="mt-6 text-slate-500 leading-relaxed text-sm">
                {mode.desc}
              </p>
              <div className="mt-10 flex items-center gap-2 text-[#5E1214] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Learn More <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
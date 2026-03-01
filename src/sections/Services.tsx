import React from 'react';
import { Briefcase, TrendingUp, ShieldCheck, HeartHandshake } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Estate Planning",
      desc: "Structuring legacies to ensure seamless transition of wealth across generations.",
      icon: <Briefcase size={24} />
    },
    {
      number: "02",
      title: "Investment Advisory",
      desc: "Bespoke portfolios aligned with your family’s risk profile and long-term goals.",
      icon: <TrendingUp size={24} />
    },
    {
      number: "03",
      title: "Tax Optimization",
      desc: "Strategic planning to protect assets and maximize efficiency in global markets.",
      icon: <ShieldCheck size={24} />
    },
    {
      number: "04",
      title: "Philanthropy",
      desc: "Guided charitable giving to create a lasting impact on causes your family values.",
      icon: <HeartHandshake size={24} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h4 className="text-[#5E1214] font-bold uppercase tracking-[0.3em] text-[12px] mb-4">Our Expertise</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900">Bespoke Family Solutions</h2>
          <div className="mt-6 h-1 w-20 bg-[#5E1214] mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white p-10 rounded-lg border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#5E1214]/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* UPDATED: High Visibility Numbers */}
              <span className="absolute top-4 right-6 text-5xl font-serif text-[#5E1214]/30 group-hover:text-[#5E1214]/60 transition-colors">
                {service.number}
              </span>

              <div className="text-[#5E1214] mb-8 bg-[#F5F2ED] w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-[#5E1214] group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>

              <h4 className="text-2xl font-serif text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
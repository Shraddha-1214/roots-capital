import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Wallet, 
  Briefcase, 
  HeartPulse,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: "Wealth Management",
    desc: "Investment portfolios reflecting your risk tolerance and time horizon.",
    icon: <TrendingUp />,
    gridClass: "md:col-span-2",
  },
  {
    title: "Retirement Strategy",
    desc: "A sound strategy to pursue your dream retirement goals.",
    icon: <Briefcase />,
    gridClass: "md:col-span-1",
  },
  {
    title: "Life Insurance",
    desc: "Protecting your family from financial consequences.",
    icon: <ShieldCheck />,
    gridClass: "md:col-span-1",
  },
  {
    title: "Fixed Income",
    desc: "Capital preservation and short-term goal alignment.",
    icon: <Wallet />,
    gridClass: "md:col-span-1",
  },
  {
    title: "Health Insurance",
    desc: "Unavoidable protection against rising health threats.",
    icon: <HeartPulse />,
    gridClass: "md:col-span-1",
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#F9F7F2]"> {/* The Cream Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 border-l-4 border-[#630D0E] pl-6" data-aos="fade-right">
          <h2 className="text-[#630D0E] font-bold uppercase tracking-widest text-sm mb-2">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-slate-900">
            Bespoke Financial <span className="italic font-light text-slate-500">Solutions</span>
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`group bg-white p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#630D0E]/20 transition-all duration-500 ${service.gridClass}`}
            >
              <div className="text-[#630D0E] mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {React.cloneElement(service.icon as React.ReactElement, { size: 40, strokeWidth: 1.2 })}
              </div>
              <h4 className="text-2xl font-serif font-semibold text-slate-800 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <button className="flex items-center text-[#630D0E] font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* THE MAROON BREAK SECTION (Just like Entrust) */}
      <div className="mt-24 bg-[#630D0E] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-[#C5A059] uppercase tracking-[0.3em] text-xs font-bold mb-6">Experience Excellence</h4>
          <p className="text-white text-2xl md:text-3xl font-serif leading-relaxed italic">
            "Our approach is built on the pillars of trust, transparency, and a deep understanding of your family's legacy."
          </p>
          <div className="mt-10 h-1 w-20 bg-[#C5A059] mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
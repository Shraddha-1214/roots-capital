import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Wallet, 
  Briefcase, 
  HeartPulse 
} from 'lucide-react';

const services = [
  {
    title: "Wealth Management",
    desc: "Investment portfolios reflecting your risk tolerance and time horizon.",
    tools: "Mutual Funds, Stocks, PMS & AIF",
    icon: <TrendingUp />,
    gridClass: "md:col-span-2 md:row-span-1",
    color: "from-blue-500/10"
  },
  {
    title: "Retirement Strategy",
    desc: "A sound strategy to pursue your dream retirement goals.",
    icon: <Briefcase />,
    gridClass: "md:col-span-1 md:row-span-2",
    color: "from-amber-500/10"
  },
  {
    title: "Life Insurance",
    desc: "Protecting your family from financial consequences.",
    icon: <ShieldCheck />,
    gridClass: "md:col-span-1 md:row-span-1",
    color: "from-emerald-500/10"
  },
  {
    title: "Fixed Income",
    desc: "Capital preservation and short-term goal alignment.",
    tools: "G-Secs, Bonds, Corporate FD",
    icon: <Wallet />,
    gridClass: "md:col-span-1 md:row-span-1",
    color: "from-slate-500/10"
  },
  {
    title: "Health Insurance",
    desc: "Unavoidable protection against rising health threats.",
    icon: <HeartPulse />,
    gridClass: "md:col-span-2 md:row-span-1",
    color: "from-rose-500/10"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-wealth-navy relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-wealth-gold font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Our Financial <span className="text-wealth-gold italic">Roots</span>
          </h3>
          <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
            Everything we do is custom rather than model-driven, ensuring your unique needs are met.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              /* ADDED: isolate and overflow-hidden explicitly here */
              className={`group relative p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-700 hover:border-wealth-gold/30 hover:-translate-y-2 overflow-hidden isolate ${service.gridClass}`}
            >
              {/* Gradient Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10`} />
              
              <div className="relative z-20">
                <div className="text-wealth-gold mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
                  {React.cloneElement(service.icon as any, { size: 36, strokeWidth: 1.5 })}
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{service.title}</h4>
                <p className="text-white/50 leading-relaxed text-sm md:text-base max-w-[90%]">
                  {service.desc}
                </p>
              </div>
              
              {service.tools && (
                <div className="relative z-20 mt-6 pt-5 border-t border-white/5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-wealth-gold/70 group-hover:text-wealth-gold transition-colors">
                    Featured: {service.tools}
                  </p>
                </div>
              )}

              {/* BACKGROUND ICON: Adjusted positioning and stroke */}
              <div className="absolute -right-10 -bottom-10 text-white/[0.02] group-hover:text-wealth-gold/[0.06] transition-all duration-1000 ease-out transform group-hover:-translate-x-6 group-hover:-translate-y-6 pointer-events-none z-0">
                {React.cloneElement(service.icon as any, { 
                  size: 220, 
                  strokeWidth: 0.5 
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
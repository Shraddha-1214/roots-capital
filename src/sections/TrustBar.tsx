import React from 'react';

const TrustBar: React.FC = () => {
  const stats = [
    { label: "Assets Under Advisory", value: "₹500Cr+" },
    { label: "Years of Excellence", value: "10+" },
    { label: "Families Secured", value: "500+" },
    { label: "Retention Rate", value: "98%" }
  ];

  return (
    <div className="relative z-30 -mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0F172A]/80 backdrop-blur-2xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="text-3xl md:text-5xl font-serif font-bold text-white mb-2 group-hover:text-wealth-gold transition-colors duration-500">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-white/40 font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </p>
              {/* Animated underline */}
              <div className="mt-4 h-0.5 w-8 bg-wealth-gold/30 mx-auto rounded-full group-hover:w-16 group-hover:bg-wealth-gold transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Roots Capital helped me transition into retirement with a strategy that was custom-built for my family's needs, not a generic model.",
    author: "Senior Executive",
    location: "Mumbai"
  },
  {
    quote: "Their 'Conversation First' approach made all the difference. I felt heard and my financial goals are finally on track.",
    author: "Business Owner",
    location: "Navi Mumbai"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 rounded-3xl bg-wealth-light/30 border border-wealth-navy/5 relative group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <Quote className="text-wealth-gold/20 absolute top-8 right-8 w-12 h-12 group-hover:text-wealth-gold/40 transition-colors" />
              <p className="text-xl font-serif italic text-wealth-navy/80 mb-8 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-bold text-wealth-navy">{t.author}</p>
                <p className="text-sm text-wealth-gold uppercase tracking-widest font-semibold">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
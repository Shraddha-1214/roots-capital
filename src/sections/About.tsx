import React from 'react';
import { MessageSquare, Users,} from 'lucide-react';

const About: React.FC = () => {
  const points = [
    {
      icon: <MessageSquare className="w-6 h-6 text-wealth-gold" />,
      title: "Conversation First",
      text: "Our relationships begin with listening. You do most of the talking so we truly understand your needs."
    },
    {
      icon: <Users className="w-6 h-6 text-wealth-gold" />,
      title: "Custom, Not Models",
      text: "Every client is unique. We avoid rigid models in favor of bespoke financial strategies."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Modern Visual */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                alt="Financial Consultation"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Glass Card */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-wealth-navy/90 backdrop-blur-xl p-8 rounded-2xl hidden md:block border border-white/10 max-w-xs">
              <p className="text-wealth-gold font-serif text-4xl font-bold mb-2">100%</p>
              <p className="text-white/80 text-sm font-medium uppercase tracking-widest">Client-Centric Approach</p>
            </div>
            {/* Abstract Background Shapes */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-wealth-gold/10 rounded-full blur-3xl" />
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-wealth-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-wealth-navy leading-tight">
                Built on Trust, <br />Driven by Purpose.
              </h3>
            </div>
            
            <p className="text-wealth-navy/70 text-lg leading-relaxed">
              After years in the business, we have developed a reputation for educating individuals in an easy-to-understand manner. We strive to anticipate challenges and keep you on track toward a meaningful financial future.
            </p>

            <div className="space-y-6">
              {points.map((point, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-wealth-light transition-colors duration-300">
                  <div className="flex-shrink-0 mt-1">{point.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-wealth-navy mb-1">{point.title}</h4>
                    <p className="text-wealth-navy/60">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
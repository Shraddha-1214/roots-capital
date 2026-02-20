import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-wealth-navy text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-wealth-gold/5 -skew-x-12 translate-x-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-wealth-gold font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to secure your <br/>financial future?</h3>
              <p className="text-white/60 text-lg max-w-md">
                Stop by our office or reach out via phone. Our relationships begin with a simple conversation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl"><MapPin className="text-wealth-gold" /></div>
                <div>
                  <h4 className="font-bold text-lg">Our Office</h4>
                  <p className="text-white/60">Office No 1003, Millenium Empire,<br/>Sector - 15, Kharghar, Navi Mumbai - 410210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl"><Phone className="text-wealth-gold" /></div>
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  <p className="text-white/60">9022757060 / 8097807061</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl"><Mail className="text-wealth-gold" /></div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-white/60">info@rootscapital.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Modern Mini-Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 text-wealth-navy shadow-2xl">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-wealth-navy/40">Full Name</label>
                  <input type="text" className="w-full bg-wealth-light border-none rounded-xl p-4 focus:ring-2 focus:ring-wealth-gold transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-wealth-navy/40">Email Address</label>
                  <input type="email" className="w-full bg-wealth-light border-none rounded-xl p-4 focus:ring-2 focus:ring-wealth-gold transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-wealth-navy/40">Message</label>
                <textarea rows={4} className="w-full bg-wealth-light border-none rounded-xl p-4 focus:ring-2 focus:ring-wealth-gold transition-all" placeholder="How can we help you?" />
              </div>
              <button className="w-full bg-wealth-gold text-wealth-navy font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:ring-2 hover:ring-wealth-gold transition-all duration-300">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
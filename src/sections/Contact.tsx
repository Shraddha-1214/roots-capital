import React from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h4 className="text-[#5E1214] font-bold uppercase tracking-[0.3em] text-[12px] mb-4">Connect With Us</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">
              Begin Your Family's <span className="italic font-light text-slate-500 text-3xl md:text-4xl block mt-2">Wealth Journey</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-md">
              Schedule a confidential consultation with our advisors to discuss your legacy objectives and preservation strategies.
            </p>
            <div className="h-1 w-20 bg-[#5E1214]"></div>
          </div>

          {/* Contact Form - Refined Nude Style */}
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-[#F5F2ED] border border-slate-200 rounded-lg focus:outline-none focus:border-[#5E1214]/40 transition-colors text-slate-800"
                    placeholder="Shraddha Jamdade"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 bg-[#F5F2ED] border border-slate-200 rounded-lg focus:outline-none focus:border-[#5E1214]/40 transition-colors text-slate-800"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2 ml-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-6 py-4 bg-[#F5F2ED] border border-slate-200 rounded-lg focus:outline-none focus:border-[#5E1214]/40 transition-colors text-slate-800 resize-none"
                  placeholder="How can we assist your legacy planning?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#5E1214] text-white py-5 rounded-lg font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#4A0D0F] transition-all shadow-lg flex items-center justify-center gap-3"
              >
                Request Consultation <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F2ED] pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif text-slate-900 mb-6">Roots Capital</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Empowering families to preserve their wealth and nurture their legacy across generations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#5E1214] hover:opacity-70 transition-opacity"><Linkedin size={20} /></a>
              <a href="#" className="text-[#5E1214] hover:opacity-70 transition-opacity"><Twitter size={20} /></a>
              <a href="#" className="text-[#5E1214] hover:opacity-70 transition-opacity"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-[#5E1214] font-bold uppercase tracking-widest text-[10px] mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#5E1214] transition-colors">Estate Planning</a></li>
              <li><a href="#" className="hover:text-[#5E1214] transition-colors">Investment Advisory</a></li>
              <li><a href="#" className="hover:text-[#5E1214] transition-colors">Tax Optimization</a></li>
              <li><a href="#" className="hover:text-[#5E1214] transition-colors">Philanthropy</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-[#5E1214] font-bold uppercase tracking-widest text-[10px] mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#5E1214] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#5E1214] transition-colors">Methodology</a></li>
              <li><a href="#" className="hover:text-[#5E1214] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#5E1214] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[#5E1214] font-bold uppercase tracking-widest text-[10px] mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-3"><Mail size={16} className="text-[#5E1214]" /> contact@rootscapital.in</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-[#5E1214]" /> +91 98765 43210</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-[#5E1214]" /> Pune, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">
            © 2026 Roots Capital Advisory. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-slate-500">Institutional Grade Architecture</span>
            <div className="w-2 h-2 rounded-full bg-[#5E1214]"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
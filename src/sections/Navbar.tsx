import React, { useState, useEffect } from 'react';
import type { NavbarProps } from '../types';

const Navbar: React.FC<NavbarProps> = ({
  navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  logoText = 'Roots Capital',
  ctaText = 'Get Started',
  onCtaClick,
  className = '',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-in-out
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-2 shadow-sm' 
          : 'bg-transparent py-4'
        }
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              className="text-xl font-serif font-bold tracking-tight text-slate-900"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {logoText}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-[#5E1214] transition-all"
              >
                {item.label}
              </a>
            ))}
            
            {/* UPDATED: Get Started Button with rounded-lg */}
            <button
            onClick={onCtaClick}
              className="bg-[#5E1214] text-white px-8 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#4A0D0F] transition-all shadow-sm"
            >
              GET STARTED
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
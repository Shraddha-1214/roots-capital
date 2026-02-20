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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Scroll Progress Bar - Changed to Maroon */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#5E1214] z-[70] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-in-out
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-2 shadow-sm' 
            : 'bg-[#F9F7F2]/80 py-5'
          }
          ${className}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo - Changed text-white to text-slate-900 */}
            <div className="flex-shrink-0 flex items-center">
              <a
                href="#"
                className="text-2xl font-serif font-bold tracking-tight text-slate-900 hover:text-[#5E1214] transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  closeMobileMenu();
                }}
              >
                {logoText}
              </a>
            </div>

            {/* Desktop Navigation - Changed text-white/80 to text-slate-600 */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-sm font-bold text-slate-600 hover:text-[#5E1214] transition-all relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5E1214] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA - Changed to Maroon button */}
            <div className="hidden md:block">
              <button
                onClick={onCtaClick || closeMobileMenu}
                className="bg-[#5E1214] text-white px-6 py-2.5 font-bold text-sm hover:bg-[#4A0D0F] transition-colors"
              >
                {ctaText}
              </button>
            </div>

            {/* Mobile menu button - Changed text-white to text-slate-900 */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className={`h-7 w-7 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`
            md:hidden fixed inset-0 z-40 bg-[#F9F7F2]
            transition-all duration-500 ease-in-out flex flex-col justify-center items-center
            ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
          `}
        >
          <div className="space-y-10 text-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-4xl font-serif font-bold text-slate-900 hover:text-[#5E1214] transition-colors"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-10">
               <button 
                className="bg-[#5E1214] text-white px-10 py-4 font-bold text-lg"
                onClick={onCtaClick || closeMobileMenu}
              >
                {ctaText}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
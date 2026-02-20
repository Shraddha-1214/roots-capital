import React, { useState, useEffect } from 'react';
import type { NavbarProps } from '../types';
import Button from '../components/Button';

/**
 * Professional Navigation Bar for Roots Capital
 * Updated for high-contrast visibility on dark themes
 */
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
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-wealth-gold z-[70] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-in-out
          ${isScrolled 
            ? 'bg-wealth-navy/90 backdrop-blur-xl border-b border-white/5 py-2' 
            : 'bg-transparent py-5'
          }
          ${className}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a
                href="#"
                className="text-2xl font-serif font-bold tracking-tight text-white hover:text-wealth-gold transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  closeMobileMenu();
                }}
              >
                {logoText}
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-sm font-bold text-white/80 hover:text-wealth-gold transition-all relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wealth-gold transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                size="md"
                onClick={onCtaClick || closeMobileMenu}
                className="shadow-lg border-none btn-gold-glow"
              >
                {ctaText}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
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
            md:hidden fixed inset-0 z-40 bg-wealth-navy backdrop-blur-3xl
            transition-all duration-500 ease-in-out flex flex-col justify-center items-center
            ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
          `}
        >
          <div className="space-y-10 text-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-4xl font-serif font-bold text-white hover:text-wealth-gold transition-colors"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-10">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={onCtaClick || closeMobileMenu}
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';

// Defining the props interface to ensure ctaText is recognized
interface NavbarProps {
  navItems?: { label: string; href: string }[];
  logoText?: string;
  ctaText?: string; // This was being ignored
  onCtaClick?: () => void;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  logoText = 'Roots Capital',
  ctaText = 'Get Started', // Now properly read below
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

  // This function is now called when a mobile link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? 'bg-white/90 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-4'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        <div className="text-xl font-serif font-bold text-slate-900">{logoText}</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-[#5E1214]">
              {item.label}
            </a>
          ))}
          
          {/* FIX: ctaText is now read here */}
          <button 
            onClick={onCtaClick}
            className="bg-[#5E1214] text-white px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#4A0D0F] transition-all"
          >
            {ctaText} 
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            <div className="w-6 h-0.5 bg-slate-900 mb-1"></div>
            <div className="w-6 h-0.5 bg-slate-900"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full p-6 shadow-xl flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              onClick={closeMobileMenu} // FIX: closeMobileMenu is now read here
              className="text-sm font-bold uppercase text-slate-600"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
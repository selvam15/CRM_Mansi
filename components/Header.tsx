import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'}`;
  const linkColorClass = isScrolled || isMenuOpen ? 'text-slate-700' : 'text-white';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home" className={`${linkColorClass} transition-colors`}>NST Group</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`relative group font-medium ${linkColorClass} hover:text-blue-600 transition-colors duration-300`}>
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${linkColorClass}`}>
            {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-4 p-6">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="font-semibold text-slate-700 hover:text-blue-600 text-lg transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
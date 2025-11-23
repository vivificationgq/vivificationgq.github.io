import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'Research', href: '#/research' },
    { name: 'Publications', href: '#/publications' },
    { name: 'Experience', href: '#/experience' },
    { name: 'Life', href: '#/gallery' },
  ];

  // Helper to handle navigation safely
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex-shrink-0 flex items-center gap-3 group cursor-pointer" 
            onClick={() => window.location.hash = '#/'}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-royal to-parrot rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                Q
            </div>
            <div className="flex flex-col">
                <span className={`font-serif text-lg font-bold leading-none ${scrolled ? 'text-rebecca' : 'text-rebecca'}`}>Qi Gao</span>
                <span className={`text-xs font-medium ${scrolled ? 'text-royal/80' : 'text-royal'}`}>Ph.D. Researcher</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
                {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                    className={`text-sm font-medium transition-colors hover:text-royal ${scrolled ? 'text-slate-600' : 'text-slate-700'}`}
                >
                    {link.name}
                </a>
                ))}
            </div>

            <div className="flex items-center space-x-3 border-l border-lavender pl-6">
              <a href={PERSONAL_INFO.scholar} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-royal transition-colors p-2 hover:bg-lavender/20 rounded-full">
                <GraduationCap size={20} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-royal transition-colors p-2 hover:bg-lavender/20 rounded-full">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-rebecca focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-lavender shadow-xl animate-fade-in-up">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-royal hover:bg-queen/20 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
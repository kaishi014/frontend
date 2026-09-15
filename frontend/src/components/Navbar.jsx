import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to make navbar more solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const hireMeMailto = '#contact';

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${isOpen || isScrolled ? 'border-slate-200 bg-white/90 py-3 shadow-[0_8px_30px_rgba(32,38,43,0.08)] backdrop-blur-xl' : 'border-transparent bg-white/70 py-4 backdrop-blur-md'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#" className="whitespace-nowrap text-2xl font-black tracking-tight text-slate-900">
            {personalInfo.brandName}<span className="text-amber-600">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="group relative font-medium text-slate-600 transition-colors duration-300 hover:text-slate-900"
            >
              {link}
              {/* Smooth hover underline */}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:block">
          <a 
            href={hireMeMailto}
            className="rounded-full border border-slate-300 bg-white px-5 py-2.5 font-bold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:shadow-md"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-600 md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 border-t border-slate-200 bg-white py-4 opacity-100 shadow-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="border-b border-slate-200 pb-2 text-lg font-bold text-slate-700 transition-colors hover:text-amber-700"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 pb-2">
             <a 
               href={hireMeMailto}
               onClick={() => setIsOpen(false)} 
               className="inline-block w-full rounded-full bg-slate-900 px-6 py-3 text-center font-black text-white shadow-lg transition-colors hover:bg-amber-700"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

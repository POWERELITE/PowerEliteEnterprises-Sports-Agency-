
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Protection', href: '#protection' },
    { label: 'Consulting', href: '#consulting' },
    { label: 'NIL & Wealth', href: '#wealth' },
    { label: 'Join', href: '#join' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <div className="w-10 h-10 bg-gold-shiny rounded-sm flex items-center justify-center font-serif text-black font-bold text-xl">PE</div>
            <span className="text-white font-serif font-bold text-xl tracking-tighter uppercase">
              Power <span className="shiny-text">Elite</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-gold px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#consulting"
                className="bg-gold-shiny text-black px-5 py-2 rounded-sm font-bold text-sm uppercase hover:brightness-110 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              >
                Schedule Consulting
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-navy-800 border-b border-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-gold block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

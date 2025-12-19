
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gold/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0">
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gold-shiny rounded-sm flex items-center justify-center font-serif text-black font-bold text-lg">PE</div>
              <span className="text-white font-serif font-bold text-lg tracking-tighter uppercase">Power <span className="shiny-text">Elite</span></span>
            </div>
            <p className="text-gray-500 text-xs text-center md:text-left leading-relaxed uppercase tracking-widest mb-6">
              Protect the Athlete. Preserve the Capital. Own the Future. Unified with Elitist Law - Mediation and Legal Services.
            </p>
            <div className="border-l-2 border-gold pl-4">
              <p className="shiny-text text-[10px] font-bold uppercase tracking-widest mb-1 italic">Strategic Affiliation</p>
              <p className="text-white text-xs font-serif font-bold">Elitist Law , LLC</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h5 className="shiny-text font-bold uppercase tracking-widest text-[10px]">Ecosystem</h5>
            <div className="flex flex-col space-y-2 text-xs font-bold uppercase tracking-[0.1em] text-gray-500">
              <a href="#protection" className="hover:text-gold transition-colors">Legal Shield</a>
              <a href="#consulting" className="hover:text-gold transition-colors">Prospect Evaluation</a>
              <a href="#wealth" className="hover:text-gold transition-colors">NIL to IUL Pipeline</a>
              <a href="#join" className="hover:text-gold transition-colors">Join Agency</a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h5 className="shiny-text font-bold uppercase tracking-widest text-[10px]">Legal</h5>
            <div className="flex flex-col space-y-2 text-xs font-bold uppercase tracking-[0.1em] text-gray-500">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-colors">ADR Disclaimer</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
             <div className="text-gray-600 text-[10px] font-bold uppercase tracking-widest text-right leading-relaxed">
                © 2024 Power Elite Pro Sports Agency <br />
                Power Elite, LLC | Elitist Law  Mediation & Legal Services <br />
                <span className="shiny-text">Led by E.M. Johnson, Esquire</span>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

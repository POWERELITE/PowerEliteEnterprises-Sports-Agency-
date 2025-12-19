
import React from 'react';

const RealityCheck: React.FC = () => {
  return (
    <div className="bg-black text-white py-24 relative overflow-hidden">
      {/* Subtle Stadium Background */}
      <div className="absolute inset-0 z-0 opacity-10 grayscale pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=1920" 
          alt="Night Stadium" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold uppercase tracking-tight mb-4">The Reality Check</h2>
          <div className="w-24 h-1 bg-gold-shiny mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-xl shadow-[0_0_50px_rgba(212,175,55,0.1)] border border-gold/10">
          {/* The Myth */}
          <div className="bg-navy-800/80 backdrop-blur-sm p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gold/10">
            <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4">The Myth</span>
            <h3 className="text-3xl font-serif font-bold mb-6">"I'm waiting to be discovered."</h3>
            <p className="text-gray-400 mb-8 italic">
              "I'll wait for the scouts to show up at my conference games. If I play well, the scholarship offers will find me eventually."
            </p>
            <div className="p-4 bg-red-950/20 border-l-4 border-red-500 text-red-400 text-sm">
              Result: You remain a name on a list. By the time you act, the spots are filled by those with a strategy.
            </div>
          </div>

          {/* The Truth */}
          <div className="bg-navy-900/80 backdrop-blur-sm text-white p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl"></div>
            <span className="shiny-text font-bold uppercase tracking-widest text-sm mb-4">The Power Elite Truth</span>
            <h3 className="text-3xl font-serif font-bold mb-6">Aggressive Discovery Wins.</h3>
            <p className="text-gray-300 mb-8 italic">
              Recruiting rewards the best communicators in every championship sport. We use the "Esquire" advantage to force coaches to evaluate your film.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <span className="text-gold">✓</span>
                <span>Direct communication pipelines for all championship sports.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold">✓</span>
                <span>Legal-grade discovery file for every athlete.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-gold">✓</span>
                <span>Proactive Digital Reputation Protection.</span>
              </li>
            </ul>
            <a href="#consulting" className="inline-block bg-gold-shiny text-black py-3 px-6 rounded-sm font-bold uppercase text-sm text-center hover:brightness-110 transition-all shadow-lg">
              Schedule My Session ($89)
            </a>
          </div>
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-400 italic">
                "We don't wait for scouts. We create a legal discovery process that forces coaches to make a decision on your talent."
                <br />
                <span className="font-bold shiny-text">— Elliott Johnson, Esq.</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default RealityCheck;

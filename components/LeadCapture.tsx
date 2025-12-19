
import React, { useState } from 'react';

const LeadCapture: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const paths = [
    { id: 'athlete', label: 'For the Athlete', magnet: "5 Mistakes That Kill Recruiting PDF" },
    { id: 'parent', label: 'For the Parent', magnet: "NIL Legal Checklist & Estate Planning Guide" },
    { id: 'transfer', label: 'For the Transfer', magnet: "Portal Re-Entry Communication Script" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 underline decoration-gold decoration-4 underline-offset-8">Join the Power Elite.</h2>
      <p className="text-xl text-gray-400 mb-12 italic">"Recruiting doesn’t reward the best athletes. It rewards the best communicators."</p>
      
      <div className="bg-navy-800 p-8 lg:p-12 border border-gold/20 shadow-2xl rounded-sm">
        <h3 className="text-xl font-bold text-white mb-8">Select Your Path to Get Your Free Strategy Guide:</h3>
        
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {paths.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPath(p.id)}
              className={`p-4 border-2 transition-all font-bold uppercase text-xs tracking-widest ${
                selectedPath === p.id 
                ? 'border-gold bg-gold/10 text-gold' 
                : 'border-white/10 text-gray-500 hover:border-white/30'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {selectedPath && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-gold font-semibold mb-6">Excellent choice. You'll receive the <span className="underline">{paths.find(p => p.id === selectedPath)?.magnet}</span>.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-navy-900 border border-white/20 p-4 text-white focus:outline-none focus:border-gold transition-colors"
                required
              />
              <button className="bg-gold text-navy-900 px-8 py-4 font-bold uppercase tracking-widest hover:bg-gold-light transition-all whitespace-nowrap">
                Send My Guide
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadCapture;

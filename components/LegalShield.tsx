
import React from 'react';

const LegalShield: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="shiny-text font-bold uppercase tracking-widest text-sm mb-4">Elitist Law Group & Protection</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-8">
            Your Scholarship is a Contract. <br />
            <span className="italic">We Guard It.</span>
          </h3>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Whether it's a <span className="text-white font-semibold italic">D1 soccer commitment</span> or a <span className="text-white font-semibold italic">pro-track basketball deal</span>, a single bad clause or digital PR scandal can end it. We provide the legal teeth other agencies lack.
          </p>
          
          <div className="space-y-6">
            {[
                { num: "01", title: "Scholarship Insurance", desc: "Proactive IDShield monitoring to protect your digital reputation from hackers and malicious actors across all platforms." },
                { num: "02", title: "Contract Discovery", desc: "Attorney-led review of all NIL and scholarship agreements before you sign on the dotted line." },
                { num: "03", title: "Signing Day Security", desc: "Ensuring that your legacy and assets are structured correctly from the moment you sign." }
            ].map((item) => (
                <div key={item.num} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center flex-shrink-0 text-gold font-bold italic group-hover:bg-gold group-hover:text-black transition-all">{item.num}</div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-1 group-hover:text-gold transition-colors">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-navy-800/50 border border-gold/20 italic text-gray-300 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-gold-shiny"></div>
            "We defend the eligibility of every championship athlete in the Power Elite family. Led by Elliott Johnson, Esq., we bulletproof your future."
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-black rounded-sm overflow-hidden relative shadow-[0_0_50px_rgba(212,175,55,0.1)] border border-gold/10 group">
            <img 
                src="https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?auto=format&fit=crop&q=80&w=800" 
                alt="Women's Basketball Signing Success" 
                className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 shiny-border m-4 pointer-events-none opacity-50"></div>
            <div className="absolute bottom-8 left-8 right-8 bg-black/90 p-8 backdrop-blur-md border-l-4 border-gold shadow-2xl">
                <h5 className="shiny-text font-bold uppercase tracking-widest text-xs mb-2">Signing Day Protection</h5>
                <p className="text-white text-lg font-serif italic">"Your signature is the start of your business. Treat it like one."</p>
            </div>
            {/* Overlay graphic of a contract signing */}
            <div className="absolute top-8 right-8 w-24 h-24 bg-gold-shiny p-1 rounded-sm shadow-xl transform rotate-12 hidden md:block">
               <div className="w-full h-full bg-black flex items-center justify-center">
                  <span className="text-gold font-bold text-[10px] text-center uppercase leading-none">Legal <br/> Protected</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalShield;

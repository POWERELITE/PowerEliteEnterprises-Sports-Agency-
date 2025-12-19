
import React from 'react';

const Masterclass: React.FC = () => {
  return (
    <div id="consulting" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black py-24">
      <div className="text-center mb-20">
        <h2 className="shiny-text font-bold uppercase tracking-widest text-sm mb-4">Strategic Advocacy</h2>
        <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">Prospect Consulting Session</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">Give your athlete the advantage 99% of families never get. This isn't just a class—it's a 1-on-1 strategy session to bridge the gap to D1 success.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
            <div className="p-8 bg-navy-800 border border-gold/20 rounded-sm">
                <h4 className="text-gold font-bold mb-4 uppercase tracking-tighter">The Championship Roadmap</h4>
                <ul className="space-y-4 text-gray-300 text-sm">
                    <li className="flex items-center space-x-2">
                        <span className="text-gold">●</span>
                        <span>Diverse Sports Strategy (Soccer, B-Ball, Volleyball).</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="text-gold">●</span>
                        <span>Multi-Level Scholarship Negotiations.</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="text-gold">●</span>
                        <span>Signing Day PR & Brand Launch.</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="text-gold">●</span>
                        <span className="font-bold text-white">Power Elite Sports Agency Athlete Blue Print.</span>
                    </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gold/10 text-xs text-gray-500 uppercase font-bold tracking-widest">
                    The Script turns interest into signed scholarships.
                </div>
            </div>

            <div className="p-8 bg-gold-shiny rounded-sm text-black shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 bg-black text-white text-[10px] font-bold uppercase tracking-tighter">Limited Slots</div>
                <h4 className="font-bold text-2xl mb-4">Book Your Session</h4>
                <p className="text-black/80 text-sm font-semibold mb-6">1-Hour Live Professional Evaluation & Communication Strategy</p>
                <div className="text-5xl font-serif font-bold mb-6 tabular-nums">$89.00</div>
                <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-black/90 transition-all shadow-xl group-hover:scale-105">Schedule My Evaluation</button>
            </div>
            
            <div className="aspect-video bg-navy-800 rounded-sm overflow-hidden border border-gold/10 group relative shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1540747913346-19e3adca174f?auto=format&fit=crop&q=80&w=800" 
                    alt="Scholarship Signing Day Hats" 
                    className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-white text-xs font-bold uppercase tracking-[0.3em] bg-black/80 px-4 py-2 border border-gold/30">Signing Day Readiness</span>
                </div>
            </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
                {[
                    { title: "The Discovery Script", desc: "Exactly what to say to position coaches across multiple men's and women's championship sports." },
                    { title: "The Pivot", desc: "How to turn a coach's 'read' into an official visit and a scholarship offer letter." },
                    { title: "Signing Day Prep", desc: "Managing the legal and PR aspects of your scholarship signing for maximum impact." },
                    { title: "The Power 5 List", desc: "A personalized list of target schools with verified coach contact info for your specific sport." },
                    { title: "NIL Pre-Flight", desc: "How to handle scholarship negotiations and initial NIL interest with legal precision." },
                    { title: "Myth Buster", desc: "Coaches recruit clarity and character. We show you how to package your talent for D1/Pro evaluation." }
                ].map((item) => (
                    <div key={item.title} className="p-8 border border-gold/10 hover:border-gold/30 transition-all rounded-sm bg-navy-800/40 backdrop-blur-sm group">
                        <h5 className="text-white font-bold text-xl mb-4 underline decoration-gold decoration-2 underline-offset-8 group-hover:text-gold transition-colors">{item.title}</h5>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
            
            {/* Diverse Sports Imagery Banner */}
            <div className="grid grid-cols-3 gap-4">
                <div className="aspect-video bg-navy-800 rounded-sm overflow-hidden border border-gold/10">
                    <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=600" alt="Women's Soccer" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
                <div className="aspect-video bg-navy-800 rounded-sm overflow-hidden border border-gold/10">
                    <img src="https://images.unsplash.com/photo-1511191988488-5344d881a696?auto=format&fit=crop&q=80&w=600" alt="Championship Trophy" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
                <div className="aspect-video bg-navy-800 rounded-sm overflow-hidden border border-gold/10">
                    <img src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=600" alt="Men's Football" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Masterclass;

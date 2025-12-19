
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-black pt-16 pb-32 lg:pt-32 lg:pb-48">
      {/* Background Layer: High-End Championship Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1540747913346-19e3adca174f?auto=format&fit=crop&q=80&w=1920" 
          alt="Signing Day Atmosphere" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse"></span>
            <span>Power Elite Pro Sports Agency | Elitist Law Group</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8">
            Own the <span className="shiny-text">Signing Table.</span> <br />
            Protect the Future.
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            The Power Elite advantage: Where Athlete recruitment strategy meets Elitist-backed protection. We guide championship athletes and their parents in <span className="text-white font-semibold">ALL men’s and women’s individual and team sports globally</span> from recruitment exposure, scholarship signing to Player and Name Image and Likeness Contract.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#consulting" className="inline-block bg-gold-shiny text-black px-8 py-4 rounded-sm font-bold text-lg uppercase hover:brightness-110 transition-all text-center shadow-[0_0_20px_rgba(212,175,55,0.3)] transform hover:-translate-y-1">
              Schedule Your Session ($89)
            </a>
            <a href="#protection" className="inline-block border-2 shiny-border text-gold px-8 py-4 rounded-sm font-bold text-lg uppercase hover:bg-gold/10 transition-all text-center">
              Secure My Legacy
            </a>
          </div>
        </div>

        {/* Hero Graphic: Multi-Sport Diverse Collage */}
        <div className="lg:w-1/2 w-full relative">
          <div className="grid grid-cols-2 gap-4">
            {/* Main Signing Day Visual */}
            <div className="col-span-2 relative aspect-[21/9] bg-black rounded-sm overflow-hidden border border-gold/30 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=1200" 
                alt="Collegiate Success" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                 <span className="shiny-text font-bold uppercase tracking-[0.3em] text-[10px] mb-1">Scholarship Sports Academy</span>
                 <h4 className="text-white font-serif text-2xl font-bold italic">Bridging the Gap to D1</h4>
              </div>
            </div>
            
            {/* Diverse Sports: Women's Volleyball */}
            <div className="aspect-square bg-navy-800 rounded-sm overflow-hidden border border-gold/10 relative group">
              <img 
                src="https://images.unsplash.com/photo-1592656670411-b91993efb2e2?auto=format&fit=crop&q=80&w=600" 
                alt="Women's Volleyball Championship" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute top-2 left-2 bg-gold-shiny text-black text-[8px] font-bold px-2 py-0.5 uppercase tracking-widest">
                Women's Volleyball
              </div>
            </div>
            
            {/* Diverse Sports: Men's Basketball */}
            <div className="aspect-square bg-navy-800 rounded-sm overflow-hidden border border-gold/10 relative group">
              <img 
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600" 
                alt="Men's Basketball Success" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute top-2 left-2 bg-white text-black text-[8px] font-bold px-2 py-0.5 uppercase tracking-widest">
                Elite Basketball
              </div>
            </div>
          </div>
          
          {/* Floating 'Esquire' badge */}
          <div className="absolute -bottom-6 -left-6 bg-gold-shiny p-4 shadow-2xl rounded-sm border-4 border-black z-30 transform rotate-3 hidden sm:block">
            <p className="text-black font-bold text-xs uppercase tracking-tighter text-center leading-none">
              Attorney <br /> <span className="text-lg font-serif italic">Athlete</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

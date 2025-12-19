
import React from 'react';

const WealthDesign: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-navy-800 p-8 flex flex-col justify-end group border border-gold/10 hover:border-gold/30 transition-all">
                    <span className="text-gold text-3xl font-serif mb-2 group-hover:scale-110 transition-transform">IUL</span>
                    <span className="text-white font-bold text-xs uppercase tracking-widest">Asset Preservation</span>
                </div>
                <div className="aspect-square bg-gold-shiny p-8 flex flex-col justify-end group shadow-lg">
                    <span className="text-black text-3xl font-serif mb-2 group-hover:scale-110 transition-transform">NIL</span>
                    <span className="text-black font-bold text-xs uppercase tracking-widest">Brand Growth</span>
                </div>
                <div className="aspect-square bg-navy-900 border border-gold/20 p-8 flex flex-col justify-end group hover:bg-gold/5 transition-all">
                    <span className="shiny-text text-3xl font-serif mb-2">Trusts</span>
                    <span className="text-white font-bold text-xs uppercase tracking-widest">Estate Structure</span>
                </div>
                <div className="aspect-square bg-navy-800 p-8 flex flex-col justify-end group border border-gold/10 hover:border-gold/30 transition-all">
                    <span className="text-gold text-3xl font-serif mb-2">CEO</span>
                    <span className="text-white font-bold text-xs uppercase tracking-widest">Athlete Business</span>
                </div>
            </div>
        </div>

        <div className="lg:w-1/2 order-1 lg:order-2">
          <h2 className="shiny-text font-bold uppercase tracking-widest text-sm mb-4">NIL & Wealth Architecture</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-8 leading-tight">Don't Just Make Money. <br />Build an Estate.</h3>
          
          <div className="space-y-8">
            {[
                { title: "NIL to IUL Pipeline", desc: "We don't just put money in a bank. We structure earnings into Indexed Universal Life insurance policies for tax-advantaged growth and protection." },
                { title: "Monetization Channels", desc: "Direct integration strategies for Millions.co, YouTube, TikTok, and X. We treat your brand like a startup CEO treats their equity." },
                { title: "Career Design", desc: "Planning beyond the jersey. Community outreach and business development designed for the next 40 years, not just the next 4." }
            ].map((item) => (
                <div key={item.title}>
                    <h4 className="text-gold font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
            ))}
          </div>
          
          <button className="mt-10 bg-white text-black px-8 py-3 font-bold uppercase tracking-widest hover:bg-gold transition-all shadow-lg">Get Wealth Strategy</button>
        </div>
      </div>
    </div>
  );
};

export default WealthDesign;

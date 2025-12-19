
import React from 'react';

const Pillars: React.FC = () => {
  const pillars = [
    {
      title: "Recruit",
      subtitle: "The Blueprint",
      desc: "Using the exact communication strategy Elliott used for Virginia Tech and ASU.",
      icon: "📣"
    },
    {
      title: "Monetize",
      subtitle: "Brand Equity",
      desc: "Build your presence on Millions.co, TikTok, and X to maximize NIL potential.",
      icon: "💰"
    },
    {
      title: "Protect",
      subtitle: "Legal Shield",
      desc: "Elitist Law Group & IDShield reputation defense for scholarship security.",
      icon: "🛡️"
    },
    {
      title: "Preserve",
      subtitle: "Family Wealth",
      desc: "Funneling NIL earnings into IUL policies and Trusts for generational wealth.",
      icon: "🏛️"
    }
  ];

  return (
    <div className="bg-black py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="group p-8 border border-gold/10 bg-navy-800/50 hover:bg-gold/5 hover:border-gold/30 transition-all rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.02)]">
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all group-hover:scale-110 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">{p.icon}</div>
              <h3 className="text-xs font-bold text-gold uppercase tracking-[0.3em] mb-2">{p.subtitle}</h3>
              <h4 className="text-2xl font-serif font-bold text-white mb-4 group-hover:shiny-text transition-all">{p.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative text background */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.03]">
        <span className="text-[20vw] font-serif font-bold text-gold whitespace-nowrap">POWER ELITE</span>
      </div>
    </div>
  );
};

export default Pillars;

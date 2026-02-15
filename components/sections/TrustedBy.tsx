import React from 'react';

// Inline styles for the animation to avoid external css dependencies in this setup
const marqueeStyle = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    animation: scroll 40s linear infinite;
  }
  .pause-on-hover:hover .animate-scroll {
    animation-play-state: paused;
  }
`;

const TrustedBy: React.FC = () => {
  // Define logos as simple render functions to easily duplicate them for the infinite loop
  const logos = [
    // Logo 1: Grupo Köner
    <div key="koner" className="flex items-center gap-3 mx-8 min-w-max group cursor-default">
      <svg className="h-10 w-10 text-slate-400 group-hover:text-slate-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M7 12h10M12 7v10" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="text-2xl font-bold text-slate-400 group-hover:text-slate-600 transition-colors font-sans tracking-tight">KÖNER</span>
    </div>,

    // Logo 2: Union Ganadera
    <div key="union" className="flex items-center gap-3 mx-8 min-w-max group cursor-default">
      <svg className="h-12 w-12 text-slate-400 group-hover:text-slate-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 16h8" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-xs font-semibold text-slate-400 tracking-[0.2em] uppercase group-hover:text-slate-500 transition-colors">Unión</span>
        <span className="text-xl font-serif font-bold text-slate-400 group-hover:text-slate-600 transition-colors">Ganadera</span>
      </div>
    </div>,

    // Logo 3: Educ.ar style
    <div key="educ" className="flex items-center gap-1 mx-8 min-w-max group cursor-default">
      <span className="text-3xl font-semibold text-slate-400 group-hover:text-slate-600 transition-colors tracking-tight">edu</span>
      <span className="text-3xl font-bold text-slate-300 group-hover:text-slate-500 transition-colors">tech</span>
      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 mb-5 ml-0.5 group-hover:bg-slate-500 transition-colors"></div>
    </div>,

    // Logo 4: Global Investor
    <div key="inversor" className="flex items-center gap-3 mx-8 min-w-max group cursor-default">
      <svg className="h-12 w-12 text-slate-400 group-hover:text-slate-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6v6l4 2" />
      </svg>
      <div className="flex flex-col justify-center h-full">
        <span className="text-base font-bold text-slate-400 group-hover:text-slate-600 transition-colors leading-tight uppercase">Inversor</span>
        <span className="text-base font-light text-slate-400 group-hover:text-slate-600 transition-colors leading-tight uppercase">Global</span>
      </div>
    </div>,

    // Logo 5: FARHM
    <div key="farhm" className="flex items-center gap-2 mx-8 min-w-max group cursor-default">
      <svg className="h-11 w-11 text-slate-400 group-hover:text-slate-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
      <span className="text-2xl font-black text-slate-400 group-hover:text-slate-600 transition-colors tracking-tighter uppercase">FARHM</span>
    </div>
  ];

  return (
    <>
      <style>{marqueeStyle}</style>
      <section className="bg-white py-16 lg:py-20 border-b border-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-400">
            Confían en nuestra experiencia
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full pause-on-hover">
          {/* Gradient Masks (Left & Right) for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Wrapper */}
          <div className="flex w-max animate-scroll">
            {/* First Set of Logos */}
            <div className="flex items-center">
              {logos.map((logo, index) => (
                <React.Fragment key={`logo-1-${index}`}>
                  {logo}
                </React.Fragment>
              ))}
            </div>
            {/* Duplicate Set of Logos (for seamless loop) */}
            <div className="flex items-center">
              {logos.map((logo, index) => (
                <React.Fragment key={`logo-2-${index}`}>
                  {logo}
                </React.Fragment>
              ))}
            </div>
             {/* Triplicate Set (to ensure coverage on wide screens) */}
             <div className="flex items-center">
              {logos.map((logo, index) => (
                <React.Fragment key={`logo-3-${index}`}>
                  {logo}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedBy;
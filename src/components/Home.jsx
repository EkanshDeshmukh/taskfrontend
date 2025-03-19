import React, { useState, useEffect } from 'react';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cursor-pointer relative z-10" onClick={toggleMenu}>
      <div className="flex flex-col gap-3 w-10 h-10 justify-center items-center">
        <div className={`h-0.5 w-10 bg-white transform transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`h-0.5 w-10 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`h-0.5 w-10 bg-white transform transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </div>
    </div>
  );
};

const HeroScroll = () => (
  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
    <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
      <div className="w-1 h-2 bg-emerald-400 rounded-full animate-bounce mt-2"></div>
    </div>
  </div>
);

function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col justify-between" style={{ background: 'linear-gradient(180deg, #070E0E, #081818)' }}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-emerald-400 z-50" style={{ width: `${scrollProgress * 100}%` }}></div>
      
      {/* Header Section */}
      <header className="w-full h-24 flex justify-between items-center p-4 md:p-8 sticky top-0 z-10 backdrop-blur-sm bg-black/20">
        <div className="flex items-center gap-4 group">
          <h1 className="text-4xl md:text-5xl font-bold italic text-gray-300 group-hover:text-emerald-400 transition-colors duration-300">nu</h1>
          <div className="text-xs md:text-sm tracking-wide text-gray-400">
            <p className="transform transition-all duration-500 group-hover:translate-x-2">Transforming Ideas</p>
            <p className="transform transition-all duration-500 delay-100 group-hover:translate-x-2">into Impactful Designs.</p>
          </div>
        </div>

        <div className="flex h-10 items-center justify-center gap-4 md:gap-10">
          <button className="bg-emerald-400 text-black text-sm md:text-base font-medium rounded-full border-2 border-emerald-400 transition-all duration-300 hover:bg-black hover:text-emerald-400 px-4 py-2 md:px-8 md:py-3 hover:shadow-lg hover:shadow-emerald-500/30">
            FREE BRAND AUDIT
          </button>

          <MenuBar />
        </div>
      </header>

      {/* Showreel Section */}
      <div className="flex flex-col h-[90vh] items-center justify-center p-4 relative">
        <div className="w-full flex md:p-10">
          <div className="flex w-fit items-center gap-4 md:gap-6 group cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-400 flex items-center justify-center rounded-full group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300">
              <div className="w-0 h-0 border-t-[8px] md:border-t-[12px] border-b-[8px] md:border-b-[12px] border-l-[12px] md:border-l-[16px] border-transparent border-l-black"></div>
            </div>
            <p className="text-sm md:text-lg text-gray-300 group-hover:text-emerald-400 transition-colors duration-300">PLAY OUR SHOWREEL</p>
          </div>
        </div>

        {/* Main Title Section */}
        <div className="flex items-center justify-center w-full md:w-[85%] mx-auto">
          <h2 className="text-[12vw] font-[font1]  md:text-8xl font-bold text-white uppercase leading-[0.9] text-center" style={{ textShadow: '0 0 15px rgba(61, 254, 194, 0.2)' }}>
            Bringing <span className="text-emerald-400">creativity</span> to life through branding, marketing, and content creation.
          </h2>
        </div>
        
        <HeroScroll />
      </div>
      
       
    </div>
  );
}

export default Home;
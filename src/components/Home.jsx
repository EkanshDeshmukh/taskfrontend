import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const MenuBar = ({ setIsOpen, isOpen }) => {
  return (
    <div>
      <div 
        className="cursor-pointer relative z-20" 
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="flex flex-col gap-2 w-10 h-10 justify-center items-center">
          <span className={`h-0.5 w-10 bg-white transform transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`h-0.5 w-10 bg-white transform transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </div>
      </div>
    </div>
  );
};

 
 
 

const MenuPage = () => {
  const menuRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Animate menu background
    gsap.fromTo(menuRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.inOut" }
    );

    // Animate menu items
    gsap.fromTo(itemsRef.current,
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5,
        stagger: 0.11,
        ease: "power2.out"
      }
    );
  }, []);

  // Function to create menu section
  const renderMenuSection = (title, items, isFirstSection = false) => (
    <div className={`mb-12 ${isFirstSection ? 'mt-16 md:mt-8' : ''}`}>
      <p 
        ref={el => itemsRef.current.push(el)} 
        style={{ fontFamily: 'font2' }}
        className="text-xl md:text-2xl mb-6"
      >
        {title}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            ref={el => itemsRef.current.push(el)}
            style={{ fontFamily: 'font1' }}
            className="text-4xl md:text-5xl uppercase hover:opacity-70 cursor-pointer transition-opacity duration-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div 
      ref={menuRef} 
      className="fixed inset-0 bg-purple-200 z-10 flex flex-col p-8 md:p-12 text-black overflow-auto"
    >
      <div className="md:hidden w-full">
        {/* Mobile layout - vertical stack */}
        {renderMenuSection("Our superpower toolkit", [
          'BRAND',
          'DIGITAL',
          'MARKETING',
          'SOCIAL',
          'DESIGN',
          'BIDS & TENDERS'
        ], true)}
        
        {renderMenuSection("Projects", [
          'CASE STUDIES',
          'HOW WE WORK'
        ])}
        
        {renderMenuSection("Thoughts and musings", [
          'NEWS & INSIGHTS',
          'PODCASTS'
        ])}
        
        {renderMenuSection("Culture", [
          'ABOUT US',
          'B CORP'
        ])}
        
        {renderMenuSection("Get in touch", [
          'CONTACT US'
        ])}
      </div>
      
      <div className="hidden md:flex md:justify-center items-start w-full mt-12">
        {/* Desktop layout - 3 columns with equal spacing */}
        <div className="grid grid-cols-3 gap-16 w-full max-w-7xl">
          <div>
            {renderMenuSection("Our superpower toolkit", [
              'BRAND',
              'DIGITAL',
              'MARKETING',
              'SOCIAL',
              'DESIGN',
              'BIDS & TENDERS'
            ], true)}
          </div>
          
          <div>
            <div className="mb-16">
              {renderMenuSection("Projects", [
                'CASE STUDIES',
                'HOW WE WORK'
              ])}
            </div>
            
            {renderMenuSection("Thoughts and musings", [
              'NEWS & INSIGHTS',
              'PODCASTS'
            ])}
          </div>
          
          <div>
            <div className="mb-16">
              {renderMenuSection("Culture", [
                'ABOUT US',
                'B CORP'
              ])}
            </div>
            
            {renderMenuSection("Get in touch", [
              'CONTACT US'
            ])}
          </div>
        </div>
      </div>
      
      
    </div>
  );
};







const HeroScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    gsap.to(scrollRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
      <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
        <div ref={scrollRef} className="w-1 h-2 bg-emerald-400 rounded-full mt-2"></div>
      </div>
    </div>
  );
};

function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const headingRef = useRef(null);
  const playButtonRef = useRef(null);

  useEffect(() => {
    // Initial animations
    gsap.fromTo(headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(playButtonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 0.5, ease: "back.out(1.7)" }
    );

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
      <div className="fixed top-0 left-0 h-1 bg-emerald-400 z-50" style={{ width: `${scrollProgress * 100}%` }}></div>
      
      <header className="w-full h-24 flex justify-between items-center p-4 md:p-8 sticky top-0 z-20">
        <div className="flex items-center gap-4 group">
          <h1 className="text-4xl md:text-5xl font-bold italic text-gray-300 group-hover:text-emerald-400 transition-colors duration-300">nu</h1>
          <div className="text-xs md:text-sm tracking-wide text-gray-400">
            <p>Transforming Ideas into Impactful Designs.</p>
          </div>
        </div>
        <div className="flex h-10 items-center justify-center gap-4 md:gap-10">
          <button className="bg-emerald-400 text-black text-sm md:text-base font-medium rounded-full border-2 border-emerald-400 transition-all duration-300 hover:bg-black hover:text-emerald-400 px-4 py-2 md:px-8 md:py-3 hover:shadow-lg hover:shadow-emerald-500/30">FREE BRAND AUDIT</button>
          <MenuBar setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </header>

      {isOpen && <MenuPage />}

      <div className="flex flex-col h-[90vh] items-center justify-center p-4 relative">
        <div className="w-full flex md:p-10">
          <div ref={playButtonRef} className="flex w-fit items-center gap-4 md:gap-6 group cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-400 flex items-center justify-center rounded-full group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300">
              <div className="w-0 h-0 border-t-[8px] md:border-t-[12px] border-b-[8px] md:border-b-[12px] border-l-[12px] md:border-l-[16px] border-transparent border-l-black"></div>
            </div>
            <p className="text-sm md:text-lg text-gray-300 transform translate-x-[-10px] opacity-0 group-hover:translate-y-1 group-hover:opacity-100 transition-all duration-300">PLAY OUR SHOWREEL</p>
          </div>
        </div>
        <h2 ref={headingRef} className="text-[12vw] font-[font1] md:text-8xl font-bold text-white uppercase leading-[0.9] text-center" style={{ textShadow: '0 0 15px rgba(61, 254, 194, 0.2)' }}>
          Bringing <span className="text-emerald-400">creativity</span> to life through branding, marketing, and content creation.
        </h2>
        <HeroScroll />
      </div>
    </div>
  );
}

export default Home;``
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const MenuOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const menuButtonRef = useRef(null);
  const contentRef = useRef(null);
  
  // Create refs for each section
  const headingsRef = useRef([]);
  const listItemsRef = useRef({
    toolkit: [],
    projects: [],
    culture: [],
    thoughts: [],
    contact: []
  });

  useEffect(() => {
    // Initialize GSAP timeline
    const tl = gsap.timeline({ paused: true });
    
    // Overlay animation
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.inOut",
      pointerEvents: "auto"
    });
    
    // Button rotation
    tl.to(menuButtonRef.current, {
      rotation: 90,
      duration: 0.3,
      ease: "power1.inOut"
    }, 0);
    
    // Animate each heading with stagger
    tl.from(headingsRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    }, 0.2);
    
    // Animate each list section with staggered timing
    Object.keys(listItemsRef.current).forEach((section, index) => {
      tl.from(listItemsRef.current[section], {
        x: -30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: "power2.out"
      }, 0.3 + (index * 0.08));
    });
    
    // Scale in the whole content container
    tl.from(contentRef.current, {
      scale: 0.95,
      duration: 0.6,
      ease: "power2.out"
    }, 0);
    
    // Toggle the timeline based on isOpen state
    if (isOpen) {
      tl.play();
    } else {
      // Create reverse timeline for closing
      const reverseTl = gsap.timeline();
      
      reverseTl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(overlayRef.current, { pointerEvents: "none" });
        }
      });
      
      reverseTl.to(menuButtonRef.current, {
        rotation: 0,
        duration: 0.3,
        ease: "power1.inOut"
      }, 0);
    }
    
    return () => {
      tl.kill();
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fix the typo in the list items
  const menuItems = {
    toolkit: ["BRAND", "DIGITAL", "MARKETING", "BIDS & TENDERS", "SOCIAL", "DESIGN"],
    projects: ["CASE STUDIES", "HOW WE WORK"],
    culture: ["ABOUT US", "B CORP"],
    thoughts: ["NEWS & INSIGHTS", "PODCASTS"],
    contact: ["CONTACT US"]
  };

  return (
    <div className="relative w-full h-screen">
      {/* Menu Button */}
      <button 
        ref={menuButtonRef}
        className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-white text-black rounded-full shadow-lg text-xl"
        onClick={toggleMenu}
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-purple-300 text-black z-10 flex items-start justify-center overflow-y-auto`}
        style={{ 
          opacity: 0, 
          pointerEvents: "none"
        }}
      >
        <div ref={contentRef} className="p-8 pt-16 md:p-16 max-w-5xl w-full">
          <h1 
            ref={el => headingsRef.current[0] = el} 
            className="text-3xl md:text-4xl font-bold"
          >
            Our superpower toolkit
          </h1>
          <ul className="mt-4 space-y-2 font-bold text-2xl md:text-3xl">
            {menuItems.toolkit.map((item, index) => (
              <li 
                key={`toolkit-${index}`}
                ref={el => listItemsRef.current.toolkit[index] = el}
                className="cursor-pointer hover:text-purple-800 transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
          
          <h2 
            ref={el => headingsRef.current[1] = el}
            className="mt-8 text-3xl md:text-4xl font-bold"
          >
            Projects
          </h2>
          <ul className="mt-4 space-y-2 font-bold text-2xl md:text-3xl">
            {menuItems.projects.map((item, index) => (
              <li 
                key={`projects-${index}`}
                ref={el => listItemsRef.current.projects[index] = el}
                className="cursor-pointer hover:text-purple-800 transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
          
          <h2 
            ref={el => headingsRef.current[2] = el}
            className="mt-8 text-3xl md:text-4xl font-bold"
          >
            Culture
          </h2>
          <ul className="mt-4 space-y-2 font-bold text-2xl md:text-3xl">
            {menuItems.culture.map((item, index) => (
              <li 
                key={`culture-${index}`}
                ref={el => listItemsRef.current.culture[index] = el}
                className="cursor-pointer hover:text-purple-800 transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
          
          <h2 
            ref={el => headingsRef.current[3] = el}
            className="mt-8 text-3xl md:text-4xl font-bold"
          >
            Thoughts and musings
          </h2>
          <ul className="mt-4 space-y-2 font-bold text-2xl md:text-3xl">
            {menuItems.thoughts.map((item, index) => (
              <li 
                key={`thoughts-${index}`}
                ref={el => listItemsRef.current.thoughts[index] = el}
                className="cursor-pointer hover:text-purple-800 transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
          
          <h2 
            ref={el => headingsRef.current[4] = el}
            className="mt-8 text-3xl md:text-4xl font-bold"
          >
            Get in touch
          </h2>
          <ul className="mt-4 space-y-2 font-bold text-2xl md:text-3xl">
            {menuItems.contact.map((item, index) => (
              <li 
                key={`contact-${index}`}
                ref={el => listItemsRef.current.contact[index] = el}
                className="cursor-pointer hover:text-purple-800 transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
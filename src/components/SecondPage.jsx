import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function BrandingSection() {
  // Create refs for elements we want to animate
  const headlineRef = useRef(null);
  const textRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Create a timeline for sequenced animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Set initial states
    gsap.set([headlineRef.current, textRef.current, taglineRef.current, buttonRef.current], { 
      opacity: 0,
      y: 50
    });
    
    // Create the animation sequence
    tl.to(headlineRef.current, { 
      opacity: 1, 
      y: 0, 
      duration: 1.2,
      delay: 1.2 
    })
    .to(textRef.current, { 
      opacity: 1, 
      y: 0, 
      duration: 1 
    }, "-=0.6")
    .to(taglineRef.current, { 
      opacity: 1, 
      y: 0, 
      duration: 0.8 
    }, "-=0.6")
    .to(buttonRef.current, { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      scale: 1
    }, "-=0.4");
    
    // Optional: Add scroll-triggered animations for when the section comes into view
    gsap.to(sectionRef.current, {
      backgroundPosition: '100% 100%',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
    
    return () => {
      // Clean up animations when component unmounts
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16 relative"
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Main headline with compressed font */}
        <h1 
          ref={headlineRef}
          className="font-[font1] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-16 leading-[0.9] tracking-tight"
        >
          We challenge, provoke and inspire, to <br />
          create the brands the world needs.
        </h1>
        
        {/* Body text paragraph */}
        <p 
          ref={textRef}
          className="font-font2 text-sm sm:text-base md:text-lg text-center leading-relaxed mx-auto max-w-3xl mb-6"
        >
          As a purpose-led branding and design agency based in London, we believe ambitious ideas
          and an unwavering commitment to being a force for good, helps build a better and
          stronger brand. Whether crafting a <span className="font-bold">compelling brand story</span>, creating a unique <span className="font-bold">visual 
          identity</span> or designing and building a <span className="font-bold">new website</span> - we bring the strategy, planning and
          creative execution to help you be authentic, purposeful and distinct.
        </p>
        
        {/* Bottom tagline */}
        <p 
          ref={taglineRef}
          className="font-font2 text-sm sm:text-base md:text-lg text-center mb-16"
        >
          Your brand deserves to make an impact. Let's bring your vision into focus.
        </p>
        
        {/* Green button */}
        <div className="flex justify-center">
          <button 
            ref={buttonRef}
            className="font-font2 px-8 py-3 rounded-full bg-green-400 hover:bg-green-300 text-black font-medium text-sm uppercase tracking-wide transition-colors duration-300"
          >
            ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
}
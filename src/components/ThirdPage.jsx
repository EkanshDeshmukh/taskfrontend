import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ThirdPage = () => {
  // Refs for animation targets
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphRefs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Main animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
    
    // Initial states
    gsap.set(headlineRef.current, { y: 50, opacity: 0 });
    gsap.set(subheadingRef.current, { y: 30, opacity: 0 });
    gsap.set(paragraphRefs.current, { y: 40, opacity: 0 });
    gsap.set(buttonRef.current, { y: 20, opacity: 0 });

    // Animation sequence
    tl.to(headlineRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    })
    .to(subheadingRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .to(paragraphRefs.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.5")
    .to(buttonRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3");

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row p-8 md:p-20 space-y-8 md:space-y-0 md:space-x-12"
    >
      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2">
        <h1 
          ref={headlineRef}
          className="font1 text-4xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          Goodbye tangled brand.<br />Hello precision.
        </h1>
      </div>

      {/* Right Section - Description */}
      <div className="w-full md:w-1/2 md:mt-20 flex flex-col justify-start">
        <h2 
          ref={subheadingRef}
          className="font1 text-3xl md:text-4xl font-semibold mb-6"
        >
          Elevate your brand with a leading creative agency
        </h2>
        
        <p 
          ref={el => paragraphRefs.current[0] = el}
          className="font2 text-lg text-gray-300 mb-8"
        >
          Brand clarity is essential for growth, because it ensures you don't fall into the trap of speaking to everyone and anyone. Having a clearly defined proposition that targets the right audience is the only way to position your brand clearly and create messaging and content that resonates.
        </p>
        
        <p 
          ref={el => paragraphRefs.current[1] = el}
          className="font2 text-lg text-gray-300 mb-8"
        >
          As a strategic branding & design agency, we use insights and creative execution to untangle your brand, to make you more engaging, focused and relatable to your customers - helping you stand out from the competition.
        </p>
        
        <p 
          ref={el => paragraphRefs.current[2] = el}
          className="font2 text-lg text-gray-300 mb-8"
        >
          Creating a brand they don't just want to belong to...but a brand that goes beyond the ordinary, to become <span className="font-bold text-white">extraordinary</span>.
        </p>

        {/* Call to Action Button */}
        <button 
          ref={buttonRef}
          className="font2 border border-green-400 rounded-full py-3 px-6 text-sm md:text-base flex items-center justify-center hover:bg-green-400 hover:text-black transition-all"
        >
          OUR BRAND-LED APPROACH
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;
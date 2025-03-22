import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HowWeWorkSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const svgRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Main timeline for section animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "center center",
        toggleActions: "play none none reverse"
      }
    });

    // Card animation
    tl.fromTo(
      cardRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // SVG paths animation - staggered reveal
    const paths = svgRef.current.querySelectorAll('path');
    tl.fromTo(
      paths,
      { scale: 0, transformOrigin: "center" },
      { 
        scale: 1, 
        duration: 0.6, 
        stagger: 0.15,
        ease: "back.out(1.7)" 
      },
      "-=0.4"
    );

    // Animate the circle with a pulse effect
    gsap.to(circleRef.current, {
      scale: 1.5,
      opacity: 0.7,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Content animations
    tl.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.8"
    );

    // Reveal paragraph with a slight delay
    tl.fromTo(
      paragraphRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    // Button animation with bounce effect
    tl.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" },
      "-=0.3"
    );

    // Button hover animation
    const button = buttonRef.current;
    const buttonArrow = button.querySelector('svg');
    
    button.addEventListener('mouseenter', () => {
      gsap.to(buttonArrow, {
        x: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(buttonArrow, {
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (button) {
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center p-8 md:p-20"
    >
      {/* Left Section - Card with SVG */}
      <div 
        ref={cardRef} 
        className="w-64 h-64 bg-gradient-to-br from-pink-300 to-purple-500 rounded-2xl shadow-xl flex justify-center items-center mb-8 md:mb-0 relative overflow-hidden"
      >
        <svg ref={svgRef} viewBox="0 0 100 100" width="80%" height="80%">
          <path d="M20,20 A30,30 0 0,1 50,50 L50,20 Z" fill="white" />
          <path d="M50,20 A30,30 0 0,1 80,50 L50,50 Z" fill="black" />
          <path d="M20,50 A30,30 0 0,0 50,80 L50,50 Z" fill="black" />
          <path d="M50,50 A30,30 0 0,0 80,80 L50,80 Z" fill="white" />
          <circle ref={circleRef} cx="85" cy="35" r="2" fill="#4ade80" />
        </svg>
      </div>

      {/* Right Section - Content */}
      <div ref={contentRef} className="max-w-2xl md:ml-12 text-center md:text-left">
        <h1 ref={titleRef} className="font1 text-4xl md:text-6xl font-extrabold mb-6 leading-tight">HOW WE WORK</h1>
        <p ref={paragraphRef} className="font2 text-lg text-gray-300 mb-8">
          Whether you're a UK or international business, we offer several ways to 
          engage with our London-based branding and design agency, to help your 
          brand stay ahead of the competition, attract customers, and reduce costs.
        </p>

        {/* Call to Action Button */}
        <button 
          ref={buttonRef} 
          className="font2 border border-white rounded-full py-3 px-8 text-sm md:text-base flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
        >
          DISCOVER OUR WAYS OF WORKING
          <svg className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HowWeWorkSection;
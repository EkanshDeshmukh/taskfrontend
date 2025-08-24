import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShakeUpSenses = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current.children, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      });

      // Section animations
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const image = section.querySelector('.section-image');
          const text = section.querySelector('.section-text');
          
          gsap.fromTo([image, text], {
            y: 80,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 20%",
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 py-20">
      {/* Title Section */}
      <div ref={titleRef} className="text-center mb-32 px-8">
        <div className="overflow-hidden">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 tracking-wide">
            SHAKE UP
          </h1>
        </div>
        <div className="overflow-hidden">
          <h2 className="text-5xl md:text-7xl font-light italic text-gray-600 tracking-wide mt-2">
            the
          </h2>
        </div>
        <div className="overflow-hidden">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 tracking-wide mt-2">
            SENSES
          </h1>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column */}
          <div className="space-y-16">
            {/* Living Breathing Architecture */}
            <div ref={addToRefs} className="section">
              <div className="section-image mb-6">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://365ayearof.cartier.com/images/chapter-2/article-2/compressedImages/Article-Header-opt-1920.WEBP"
                    alt="Living Breathing Architecture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="section-text overflow-hidden">
                <p className="text-sm tracking-widest text-gray-700 uppercase font-medium">
                  LIVING BREATHING<br />ARCHITECTURE
                </p>
              </div>
            </div>

            {/* Moving The Eye */}
            <div ref={addToRefs} className="section mt-20">
              <div className="section-image mb-6">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://365ayearof.cartier.com/images/chapter-2/article-3/compressedImages/Article-Header-opt-3400.WEBP"
                    alt="Moving The Eye"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="section-text overflow-hidden">
                <p className="text-sm tracking-widest text-gray-700 uppercase font-medium">
                  MOVING THE EYE
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:mt-32">
            <div ref={addToRefs} className="section">
              <div className="section-image mb-6">
                <div className="aspect-[4/5] bg-black rounded-lg overflow-hidden shadow-lg relative">
                  <img 
                    src="https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-3400.WEBP"
                    alt="Time Is An Illusion"
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-red-500 transform rotate-45 translate-x-4 -translate-y-4"></div>
                </div>
              </div>
              <div className="section-text overflow-hidden">
                <p className="text-sm tracking-widest text-gray-700 uppercase font-medium">
                  TIME IS AN ILLUSION
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional scroll space */}
      <div className="h-screen"></div>
    </div>
  );
};

export default ShakeUpSenses;
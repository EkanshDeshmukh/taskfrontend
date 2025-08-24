import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Shake Up Senses Component with exposed animation methods
const ShakeUpSenses = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const titleRef = useRef(null);

  useImperativeHandle(ref, () => ({
    startAnimations: () => {
      const ctx = gsap.context(() => {
        // Title animation - starts immediately when called
        if (titleRef.current) {
          gsap.fromTo(titleRef.current, {
            y: "100%",
            opacity: 0
          }, {
            y: "0%",
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          });
        }

        // Section animations with different scroll distances
        sectionsRef.current.forEach((section, index) => {
          if (section) {
            const image = section.querySelector('.section-image');
            
            // Only downward movement animation - starts with delay based on index
            gsap.fromTo(image, {
              y: 0, // Start from original position
            }, {
              y: 30, // Move slightly down (30px)
              duration: 1,
              delay: index * 0.2, // Stagger the animations
              ease: "power3.out",
            });

            // Scroll-based movement animation
            let scrollDistance;
            if (index === 1) { // Moving The Eye (middle image)
              scrollDistance = 200; // Center image moves much more down
            } else {
              scrollDistance = 50; // Side images move less
            }

            gsap.to(image, {
              y: scrollDistance,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1, // Smooth scrolling effect
              }
            });
          }
        });
      }, containerRef);

      return ctx;
    }
  }));

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // Split text into individual characters
  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className="w-full h-full flex flex-col justify-center items-center p-4">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 
          ref={titleRef}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-black tracking-wider"
        >
          SHAKE UP <span className="text-yellow-300">THE SENSE</span>
        </h1>
      </div>

      {/* Content Grid - Three Images Side by Side */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="flex justify-center items-center w-full max-w-5xl">
         {/* Time Is An Illusion */}
          <div 
            ref={addToRefs} 
            className="section flex-1 flex justify-center items-center"
          >
            <div className="section-image">
              <div className="w-[400px] h-[500px] bg-black rounded-lg overflow-hidden shadow-xl relative transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-3400.WEBP"
                  alt="Time Is An Illusion"
                  className="w-full h-full object-cover"
                />
                {/* Decorative corner */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-pink-400 to-red-500 transform rotate-45 shadow-lg"></div>
              </div>
            </div>
          </div>  
          {/* Living Breathing Architecture */}
 
<div 
            ref={addToRefs} 
            className="section flex-1 flex justify-center items-center"
          >
            <div className="section-image">
              <div className="w-[240px] h-[330px] bg-gray-200 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://365ayearof.cartier.com/images/chapter-2/article-2/compressedImages/Article-Header-opt-1920.WEBP"
                  alt="Living Breathing Architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Moving The Eye */}
          <div 
            ref={addToRefs} 
            className="section flex-1 flex justify-center items-center"
          >
            <div className="section-image">
              <div className="w-[240px] h-[330px] bg-gray-200 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://365ayearof.cartier.com/images/chapter-2/article-3/compressedImages/Article-Header-opt-3400.WEBP"
                  alt="Moving The Eye"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

         

        </div>
      </div>
    </div>
  );
});

const PageOne = () => {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const shakeUpSensesRef = useRef(null);

  useEffect(() => {
    let animationContext;
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        scroller: "body",
        start: "10% top",
        end: "95% top",
        
        scrub: 2,
        onUpdate: (self) => {
          // Start image animations when div starts expanding (at 25% progress)
          if (self.progress > 0.25 && !animationContext) {
            if (shakeUpSensesRef.current) {
              animationContext = shakeUpSensesRef.current.startAnimations();
            }
          }
        }
      }
    });

    tl
    .to(childRef.current, {
      width: "100%",
      height: "100vh",
      duration: 1,
      ease: "power2.out",
    },"a")
     .to(childRef.current, {
      width: "80%",
      height: "70vh",
      duration: 1,
      ease: "power2.out",
     });

    return () => {
      tl.kill();
      if (animationContext) {
        animationContext.revert();
      }
    };
  }, []);

  return (
    <div ref={parentRef} className="w-full h-[200vh] flex items-end justify-center">
      <div
        ref={childRef}
        className="bg-white overflow-hidden"
        style={{ width: "80%", height: "70vh" }}
      >
        <ShakeUpSenses ref={shakeUpSensesRef} />
      </div>
    </div>
  );
};

export default PageOne;
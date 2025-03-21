import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialSwiper from './TestimonialSwiper';

const DarkTestimonialSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Testimonial data
  const testimonials = [
    {
      quote: "A strategic brand agency with great people, delivering great results...what more can you ask for?",
      position: "Communications Manager",
      company: "ABHI",
      rating: "10/10"
    },
    {
      quote: "The team's creativity and strategic thinking helped elevate our brand to new heights in a competitive market.",
      position: "Marketing Director",
      company: "NEXUS",
      rating: "9/10"
    },
    {
      quote: "Exceptional service from start to finish. They truly understand our business needs and delivered beyond expectations.",
      position: "CEO",
      company: "ALPINE VENTURES",
      rating: "10/10"
    },
    {
      quote: "Their approach to branding is both innovative and practical. We've seen measurable results since launching our rebrand.",
      position: "Brand Manager",
      company: "OCTAVE",
      rating: "9.5/10"
    },
    {
      quote: "Working with this agency transformed how we communicate our value. Worth every penny and then some.",
      position: "Head of Communications",
      company: "ZENITH GLOBAL",
      rating: "10/10"
    }
  ];

  // Auto-advance the swiper
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Function to manually change slides
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* Angled backdrop */}
      <div className="mt-16">
        {/* Marquee banner */}
        <div className="w-full overflow-hidden bg-white text-black">
          <div 
            className="font1 text-5xl md:text-6xl font-bold whitespace-nowrap py-4"
            style={{ transform: `translateX(${position}px)` }}
          >
            {repeatedText}
          </div>
        </div>
        
        {/* Testimonial Swiper - replaced the static testimonial */}
        <TestimonialSwiper />
      </div>
      
      {/* Content container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-32">
        {/* Testimonial slide */}
        <div className="flex items-start">
          <div className="text-8xl font-serif text-white opacity-80 mt-4">"</div>
          
          <div className="flex-1 min-h-32">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`transition-opacity duration-500 absolute ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <p className="text-xl md:text-2xl mb-8 pl-4 max-w-3xl">
                  {testimonial.quote}
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mt-12 pl-4">
                  <div>
                    <div className="text-lg text-white/80">{testimonial.position}</div>
                    <div className="text-lg font-semibold">{testimonial.company}</div>
                  </div>
                  
                  <div className="flex items-center mt-4 md:mt-0">
                    <div className="bg-emerald-500 text-black rounded-full px-4 py-1.5 text-sm flex items-center">
                      <ChevronLeft size={16} className="mr-1" />
                      <span className="font-bold">{testimonial.rating}</span>
                      <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-emerald-400 w-3 h-3' : 'bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default DarkTestimonialSwiper;
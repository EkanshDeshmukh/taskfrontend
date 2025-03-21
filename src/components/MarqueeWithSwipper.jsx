import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BrandAgencyUI = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      quote: "A strategic brand agency with great people, delivering great results...what more can you ask for?",
      role: "Communications Manager",
      name: "ABHI",
      rating: "10/10"
    },
    {
      quote: "Transformed our brand identity with exceptional creativity and strategy.",
      role: "Marketing Director",
      name: "SARAH",
      rating: "9/10"
    },
    {
      quote: "Their team consistently delivers innovative solutions that exceed expectations.",
      role: "CEO",
      name: "MICHAEL",
      rating: "10/10"
    },
    {
      quote: "Their team consistently delivers innovative solutions that exceed expectations.",
      role: "CEO",
      name: "MICHAEL",
      rating: "100/10"
    },
    {
      quote: "Their team consistently delivers innovative solutions that exceed expectations.",
      role: "CEO",
      name: "MICHAEL",
      rating: "0/10"
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Custom font styles */}
      <style>
        {`
          @font-face {
            font-family: 'font1';
            src: url('font/National2Compressed-Extrabold.woff2') format('woff2');
          }
          @font-face {
            font-family: 'font2';
            src: url('font/InterVariable.woff2');
          }
          .font1 {
            font-family: 'font1', sans-serif;
          }
          .font2 {
            font-family: 'font2', sans-serif;
          }
          .marquee-container {
            overflow: hidden;
            white-space: nowrap;
            transform: rotate(-2deg);
            width: 150%;
            margin-left: -25%;
          }
          .marquee-content {
            display: inline-block;
            animation: marquee 20s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          /* Responsive text sizes */
          @media (max-width: 768px) {
            .marquee-content {
              font-size: 3rem !important;
            }
          }
          @media (max-width: 480px) {
            .marquee-content {
              font-size: 2rem !important;
            }
          }
        `}
      </style>

      {/* Diagonal marquee banner */}
      <div className="relative w-full h-auto md:h-64 bg-black flex items-center justify-center py-8 md:py-0">
        <div className="absolute inset-0 flex items-center">
          <div className="marquee-container py-4 md:py-8 bg-white">
            <div className="marquee-content font1 text-4xl md:text-6xl lg:text-8xl text-black">
              The rumours are all true...&nbsp;&nbsp;The rumours are all true...&nbsp;&nbsp;
              The rumours are all true...&nbsp;&nbsp;The rumours are all true...&nbsp;&nbsp;
            </div>
            <div className="marquee-content font1 text-4xl md:text-6xl lg:text-8xl text-black">
              The rumours are all true...&nbsp;&nbsp;The rumours are all true...&nbsp;&nbsp;
              The rumours are all true...&nbsp;&nbsp;The rumours are all true...&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>

      {/* Quote section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8 md:py-16 mt-8 md:mt-16">
        <div className="w-full max-w-3xl mx-auto relative">
          {/* Quotation mark - hidden on mobile, visible on larger screens */}
          <div className="font1 text-5xl md:text-8xl absolute hidden md:block -left-16 top-0">"</div>
          
          {/* Testimonial swiper */}
          <div className="relative overflow-hidden w-full">
            <div 
              className="transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    {/* Add inline quotation mark for mobile only */}
                    <div className="md:hidden font1 text-5xl mb-2">"</div>
                    <p className="font2 text-base md:text-xl mb-4 md:mb-8 text-gray-300">
                      {testimonial.quote}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                      <div>
                        <p className="font2 text-sm md:text-base text-gray-400">{testimonial.role}</p>
                        <p className="font2 text-sm md:text-base font-bold">{testimonial.name}</p>
                      </div>
                      <div className="flex items-center self-end sm:self-auto">
                        <div className="h-2 md:h-3 w-2 md:w-3 rounded-full bg-green-400 mr-2"></div>
                        <span className="font2 text-sm md:text-base mr-2">{testimonial.rating}</span>
                        <div className="flex">
                          <button 
                            onClick={handlePrev}
                            className="p-1 md:p-2 rounded-full bg-green-800 bg-opacity-20 mr-2"
                            aria-label="Previous testimonial"
                          >
                            <ChevronLeft size={16} className="text-green-400" />
                          </button>
                          <button 
                            onClick={handleNext}
                            className="p-1 md:p-2 rounded-full bg-green-800 bg-opacity-20"
                            aria-label="Next testimonial"
                          >
                            <ChevronRight size={16} className="text-green-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center pb-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 mx-1 rounded-full transition-all ${
              currentSlide === index ? 'w-6 bg-green-400' : 'w-2 bg-gray-600'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BrandAgencyUI;
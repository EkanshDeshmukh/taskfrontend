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
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
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
        `}
      </style>

      {/* Diagonal marquee banner */}
      <div className="relative w-full h-64 bg-black flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="marquee-container py-8 bg-white">
            <div className="marquee-content font1 text-8xl text-black">
              The rumours are all true...&nbsp;&nbsp;The rumours are all true...&nbsp;&nbsp;
              The rumours are all true...&nbsp;&nbsp;The rumours are all true...&nbsp;&nbsp;
            </div>
            <div className="marquee-content font1 text-8xl text-black">
              The rumours are all true...&nbsp;&nbsp;The rumours are all true...&nbsp;&nbsp;
              The rumours are all true...&nbsp;&nbsp;The rumours are all true...&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>

      {/* Quote section */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 mt-16">
        <div className="max-w-3xl mx-auto relative">
          <div className="font1 text-8xl absolute -left-16 top-0">"</div>
          
          {/* Testimonial swiper */}
          <div className="relative overflow-hidden w-full">
            <div 
              className="transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <p className="font2 text-xl mb-8 text-gray-300">
                      {testimonial.quote}
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font2 text-gray-400">{testimonial.role}</p>
                        <p className="font2 font-bold">{testimonial.name}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-green-400 mr-2"></div>
                        <span className="font2 mr-2">{testimonial.rating}</span>
                        <div className="flex">
                          <button 
                            onClick={handlePrev}
                            className="p-2 rounded-full bg-green-800 bg-opacity-20 mr-2"
                          >
                            <ChevronLeft size={16} className="text-green-400" />
                          </button>
                          <button 
                            onClick={handleNext}
                            className="p-2 rounded-full bg-green-800 bg-opacity-20"
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
    </div>
  );
};

export default BrandAgencyUI;
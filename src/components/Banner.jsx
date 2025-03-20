import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const testimonials = [
    {
      quote: "A strategic brand agency with great people, delivering great results...what more can you ask for?A strategic brand agency with great people, delivering great results...what more can you ask for?, A strategic brand agency with great people, delivering great results...what more can you ask for?",
      
      role: "Communications Manager",
      name: "ABHI",
      rating: "10/10"
    },
    {
      quote: "A strategic brand agency with great people, delivering great results...what more can you ask for?A strategic brand agency with great people, delivering great results...what more can you ask for?, A strategic brand agency with great people, delivering great results...what more can you ask for?",
      
      role: "Marketing Director",
      name: "SARAH",
      rating: "9/10"
    },
    {
      quote: "A strategic brand agency with great people, delivering great results...what more can you ask for?A strategic brand agency with great people, delivering great results...what more can you ask for?, A strategic brand agency with great people, delivering great results...what more can you ask for?",
      
      role: "CEO",
      name: "MICHAEL",
      rating: "10/10"
    }
  ];
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="relative w-full  min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Diagonal banner */}
      <div className="absolute top-0 w-full transform -rotate-6 -translate-y-4 bg-white text-black py-6 overflow-hidden">
        <div className="whitespace-nowrap font-[font1]">
          <div className="inline-block animate-marquee">
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
         
          </div>
          <div className="inline-block animate-marquee2">
          <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
         
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
            <span className="text-6xl md:text-7xl font-black px-4">The rumours are all true...</span>
          </div>
        </div>
      </div>
      
       
      
      {/* Testimonial section */}
      <div className="container   px-6  tems-center justify-center">
        <div className=" mx-auto pt-32 md:pt-36">
          {/* Quote mark */}
          <div className="text-8xl md:text-9xl font-serif text-gray-700 opacity-80 mb-6">
            "
          </div>
          
          {/* Testimonial content */}
          <div className="relative w-1/2 ">
  {testimonials.map((testimonial, index) => (
    <div
      key={index}
      className={`absolute w-full max-w-2xl mx-auto px-4 md:px-8 transition-all duration-700 ease-in-out ${
        index === currentSlide 
          ? "opacity-100 translate-x-0" 
          : index < currentSlide 
            ? "opacity-0 -translate-x-full" 
            : "opacity-0 translate-x-full"
      }`}
    >
      <p className="text-xl md:text-xl lg:text-md font-light leading-relaxed mb-10">
        {testimonial.quote}
      </p>
      <div className=" mt-16 bg-blue-50">
        <p className="text-lg font-medium text-gray-400">{testimonial.role}</p>
        <p className="text-lg font-bold">{testimonial.name}</p>
      </div>
    </div>
  ))}
</div>

          
          {/* Navigation controls */}
          <div className=" flex justify-end w-1/2 items-center h-64 bg-red-900   j  mt-20">
            <div className="flex items-center space-x-3">
              <button 
                onClick={prevSlide} 
                disabled={isAnimating}
                className="bg-green-400 rounded-full p-2 text-black hover:bg-green-300 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide} 
                disabled={isAnimating}
                className="bg-green-400 rounded-full p-2 text-black hover:bg-green-300 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="text-green-400 font-bold text-xl">
              {testimonials[currentSlide].rating}
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for banner animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee {
          animation: marquee 150s linear infinite;
        }
        
        .animate-marquee2 {
          animation: marquee2 150s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialBanner;
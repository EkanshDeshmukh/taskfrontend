import React from 'react';

const HowWeWorkSection = () => {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center p-8 md:p-20">
      {/* Left Section - Card with SVG */}
      <div className="w-64 h-64 bg-pink-200 rounded-xl flex justify-center items-center">
        <svg viewBox="0 0 100 100" width="80%" height="80%">
          <path d="M20,20 A30,30 0 0,1 50,50 L50,20 Z" fill="white" />
          <path d="M50,20 A30,30 0 0,1 80,50 L50,50 Z" fill="black" />
          <path d="M20,50 A30,30 0 0,0 50,80 L50,50 Z" fill="black" />
          <path d="M50,50 A30,30 0 0,0 80,80 L50,80 Z" fill="white" />
          <circle cx="85" cy="35" r="2" fill="#4ade80" />
        </svg>
      </div>

      {/* Right Section - Content */}
      <div className="max-w-2xl md:ml-12 text-center md:text-left">
        <h1 className="font1 text-5xl md:text-7xl font-extrabold mb-6">HOW WE WORK</h1>
        <p className="font2 text-lg mb-8">
          Whether you're a UK or international business, we offer several ways to 
          engage with our London-based branding and design agency, to help your 
          brand stay ahead of the competition, attract customers and reduce costs.
        </p>

        {/* Call to Action Button */}
        <button className="font2 border border-white rounded-full py-3 px-6 flex items-center justify-center text-sm hover:bg-white hover:text-black transition-all">
          DISCOVER OUR WAYS OF WORKING
          <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HowWeWorkSection;

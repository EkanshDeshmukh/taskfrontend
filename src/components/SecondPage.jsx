import React from 'react';

export default function BrandingSection() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16 relative">
      {/* Small green dot at the top */}
      <div className="absolute top-6 w-2 h-2 rounded-full bg-green-400"></div>
      
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Main headline with compressed font */}
        <h1 className="font-[font1] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-16 leading-[0.9] tracking-tight">
          We challenge, provoke and inspire, to <br />
          create the brands the world needs.
        </h1>
        
        {/* Body text paragraph */}
        <p className="font-font2 text-sm sm:text-base md:text-lg text-center leading-relaxed mx-auto max-w-3xl mb-6">
          As a purpose-led branding and design agency based in London, we believe ambitious ideas
          and an unwavering commitment to being a force for good, helps build a better and
          stronger brand. Whether crafting a <span className="font-bold">compelling brand story</span>, creating a unique <span className="font-bold">visual 
          identity</span> or designing and building a <span className="font-bold">new website</span> - we bring the strategy, planning and
          creative execution to help you be authentic, purposeful and distinct.
        </p>
        
        {/* Bottom tagline */}
        <p className="font-font2 text-sm sm:text-base md:text-lg text-center mb-16">
          Your brand deserves to make an impact. Let's bring your vision into focus.
        </p>
        
        {/* Green button */}
        <div className="flex justify-center">
          <button className="font-font2 px-8 py-3 rounded-full bg-green-400 hover:bg-green-300 text-black font-medium text-sm uppercase tracking-wide">
            ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
}
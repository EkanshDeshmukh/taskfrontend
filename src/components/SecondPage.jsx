import React from 'react';

export default function BrandingSection() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-[font1] md:text-6xl font-bold text-center leading-tight">
        We challenge, provoke and inspire, to<br />
        create the brands the world needs.
      </h1>
      <p className="mt-8 max-w-3xl text-center text-sm md:text-base text-gray-300 leading-relaxed">
        As a purpose-led branding and design agency based in London, we believe ambitious ideas 
        and an unwavering commitment to being a force for good, helps build a better and stronger brand. 
        Whether crafting a <span className="font-bold text-white">compelling brand story</span>, creating a unique 
        <span className="font-bold text-white"> visual identity</span> or designing and building a 
        <span className="font-bold text-white"> new website</span> - we bring the strategy, planning and 
        creative execution to help you be authentic, purposeful and distinct.
      </p>
      <p className="mt-4 text-center text-sm md:text-base text-gray-300">
        Your brand deserves to make an impact. Let’s bring your vision into focus.
      </p>
      <button className="mt-6 bg-green-400 hover:bg-green-300 text-black px-6 py-2 rounded-full font-semibold">
        ABOUT US
      </button>
    </div>
  );
}

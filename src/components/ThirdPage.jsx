import React from 'react';

const PageThree = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation dot */}
      <div className="absolute top-4 left-4">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
      </div>
      
      {/* Main content container with exact padding matching design */}
      <div className="w-full px-8 md:px-12 lg:px-16 py-16 flex flex-col lg:flex-row lg:items-start">
        {/* Left section - Bold headings with exact typography */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 pr-4">
          <h1 className="text-6xl font-[font1] md:text-7xl font-extrabold leading-none mb-2">
            Goodbye tangled brand.
          </h1>
          <h1 className="text-6xl font-[font1] md:text-7xl font-extrabold leading-none">
            Hello precision.
          </h1>
        </div>
        
        {/* Right section - Content with exact spacing */}
        <div className="lg:w-1/3  gap-7 flex flex-col space-y-6">
          <h2 className="text-2xl mt-12 md:text-4xl font-light leading-tight">
            Elevate your brand with a leading <br /> creative agency
          </h2>
          
          <p className="text-base md:text-lg">
            Brand clarity is essential for growth, because it ensures you don't fall into the trap of speaking to everyone and anyone. Having a clearly defined proposition which targets the right audience, is the only way to position your brand clearly, and create messaging and content that resonates.
          </p>
          
          <p className="text-base md:text-lg">
            As a strategic branding & design agency, we use insights and creative execution to untangle your brand, to make you more engaging, focused and relatable to your customers - helping you stand out from the competition.
          </p>
          
          <p className="text-base md:text-lg">
            Creating a brand they don't just want to belong to...but a brand that goes beyond the ordinary, to become <span className="font-bold">extraordinary</span>.
          </p>
          
          <div className="pt-8">
            <button className="bg-green-400 text-sm font-extralight w-64 h-8 text-black font-medium rounded-full px-8 py-3 hover:bg-green-300 transition-colors">
              OUR BRAND-LED APPROACH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
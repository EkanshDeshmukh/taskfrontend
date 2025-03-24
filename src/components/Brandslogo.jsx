import React from 'react';

const CompanyShowcase = () => {
  return (
    <div className=" bg-black min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-[font1] font-bold mb-2">
          <span className="text-white">Top </span>
          <span className="text-emerald-400">Brands</span>
          <span className="text-white"> our company</span>
        </h1>
        <h1 className="text-4xl font-[font1] md:text-6xl font-bold text-white">
          working with
        </h1>
      </div>

      {/* Top row of logos */}
      <div className="flex flex-wrap justify-center gap-16 md:gap-24 mb-16 w-full max-w-5xl">
        <div className="w-32 h-12 flex items-center justify-center">
          <img src="/api/placeholder/96/48" alt="Netlink Logo" className="max-h-full" />
        </div>
        <div className="w-32 h-12 flex items-center justify-center">
          <img src="/api/placeholder/96/48" alt="Mindtree Logo" className="max-h-full" />
        </div>
        <div className="w-32 h-12 flex items-center justify-center">
          <img src="/api/placeholder/96/48" alt="Walmart Logo" className="max-h-full" />
        </div>
      </div>

      {/* Bottom row of logos */}
      <div className="flex flex-wrap justify-center gap-16 md:gap-24 mb-24 w-full max-w-5xl">
        <div className="w-32 h-12 flex items-center justify-center">
          <img src="/api/placeholder/96/48" alt="RapidOps Logo" className="max-h-full" />
        </div>
        <div className="w-32 h-12 flex items-center justify-center">
          <img src="/api/placeholder/96/48" alt="TCS Logo" className="max-h-full" />
        </div>
        <div className="w-32 h-12 flex items-center justify-center">
          <img src="/api/placeholder/96/48" alt="Amazon Logo" className="max-h-full" />
        </div>
        <div className="w-32 h-12 flex items-center justify-center">
          <img src="/api/placeholder/96/48" alt="Wipro Logo" className="max-h-full" />
        </div>
        <div className="w-32 h-12 flex items-center justify-center">
          <img src="/api/placeholder/96/48" alt="Other Brand Logo" className="max-h-full" />
        </div>
      </div>

      {/* Call to Action Button */}
      <button className="bg-emerald-400 font-[font2] hover:bg-emerald-500 text-gray-900 font-bold py-3 px-8 rounded-md text-lg transition-colors duration-300">
       About us
      </button>
    </div>
  );
};

export default CompanyShowcase;
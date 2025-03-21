import React from 'react';

const ThirdPage = () => {
  return (
    <div className="w-full h-[110vh] bg-black text-white flex flex-col md:flex-row p-8 md:p-20">
      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="font1 text-5xl md:text-7xl font-extrabold mb-6">Goodbye tangled brand.<br />Hello precision.</h1>
      </div>

      {/* Right Section - Description */}
      <div className="w-full md:w-1/2 flex flex-col justify-start">
        <h2 className="font1 text-4xl md:text-5xl font-semibold mb-6">Elevate your brand with a leading creative agency</h2>
        <p className="font2 text-lg mb-8">
          Brand clarity is essential for growth, because it ensures you don’t fall into the trap of speaking to everyone and anyone. Having a clearly defined proposition that targets the right audience is the only way to position your brand clearly and create messaging and content that resonates.
        </p>
        <p className="font2 text-lg mb-8">
          As a strategic branding & design agency, we use insights and creative execution to untangle your brand, to make you more engaging, focused and relatable to your customers - helping you stand out from the competition.
        </p>
        <p className="font2 text-lg mb-8">
          Creating a brand they don’t just want to belong to...but a brand that goes beyond the ordinary, to become <span className="font-bold">extraordinary</span>.
        </p>

        {/* Call to Action Button */}
        <button className="font2 border border-green-400 rounded-full py-3 px-6 flex items-center justify-center text-sm hover:bg-green-400 hover:text-black transition-all">
          OUR BRAND-LED APPROACH
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;

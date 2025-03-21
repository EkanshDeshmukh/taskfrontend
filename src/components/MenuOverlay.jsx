import React, { useState } from 'react';

const MenuOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-screen">
      {/* Menu Button */}
      <button className="absolute top-4 right-4 z-20" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-purple-300 text-black transition-opacity duration-500 ${isOpen ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}
      >
        <div className="p-8">
          <h1 className="text-3xl font-bold">Our superpower toolkit</h1>
          <ul className="mt-4 space-y-2 font-bold text-2xl">
            <li>BRAND</li>
            <li>DIGITAL</li>
            <li>MARKETIN
            <li>BIDS & TENDERS</li>G</li>
            <li>SOCIAL</li>
            <li>DESIGN</li>
          </ul>
          <h2 className="mt-8 text-3xl font-bold">Projects</h2>
          <ul className="mt-4 space-y-2 font-bold text-2xl">
            <li>CASE STUDIES</li>
            <li>HOW WE WORK</li>
          </ul>
          <h2 className="mt-8 text-3xl font-bold">Culture</h2>
          <ul className="mt-4 space-y-2 font-bold text-2xl">
            <li>ABOUT US</li>
            <li>B CORP</li>
          </ul>
          <h2 className="mt-8 text-3xl font-bold">Thoughts and musings</h2>
          <ul className="mt-4 space-y-2 font-bold text-2xl">
            <li>NEWS & INSIGHTS</li>
            <li>PODCASTS</li>
          </ul>
          <h2 className="mt-8 text-3xl font-bold">Get in touch</h2>
          <ul className="mt-4 space-y-2 font-bold text-2xl">
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;

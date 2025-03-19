import React from 'react';

const HelpSection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 md:py-24">
      <div className="w-full h-px bg-gray-700 mb-12"></div>
      
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-5xl font-[font1] md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Can we help?<br />
            We're ready<br />
            when you are.
          </h2>
        </div>
        
        <div className="md:w-1/2 space-y-6">
          <p className="text-white text-lg md:text-xl">
            If you want to partner with a strategic branding and design agency who will get to know every facet of your brand, then we're a great fit.
          </p>
          
          <div>
            <a href="#contact" className="inline-flex items-center bg-emerald-400 text-black font-medium rounded-full px-6 py-3 transition-all hover:bg-emerald-500">
              LET'S TALK
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="w-full h-px bg-gray-700 mt-12"></div>
    </section>
  );
};

const NewsletterSection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-12">
      <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
          KEEP UP TO DATE WITH ALL OUR LATEST NEWS
        </h2>
        
        <p className="text-black text-lg mb-8">
          We share regular tips and insights designed to help you rise above your competition.
        </p>
        
        <button className="bg-emerald-400 text-black font-medium rounded-full px-6 py-3 transition-all hover:bg-emerald-500">
          SIGN UP TO OUR NEWSLETTER
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          <h3 className="text-white text-2xl font-bold mb-6">Get in touch</h3>
          <div className="space-y-2 text-white">
            <p><a href="mailto:enquiries@nucreative.co.uk" className="hover:text-emerald-400">enquiries@nucreative.co.uk</a></p>
            <p><a href="tel:03332405800" className="hover:text-emerald-400">0333 240 5800</a></p>
            <div className="mt-6">
              <p>166A Tower Bridge Rd</p>
              <p>London</p>
              <p>SE1 3LZ</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-white text-2xl font-bold mb-6">Follow</h3>
          <div className="space-y-2 text-white">
            <p><a href="#facebook" className="hover:text-emerald-400">FACEBOOK</a></p>
            <p><a href="#instagram" className="hover:text-emerald-400">INSTAGRAM</a></p>
            <p><a href="#linkedin" className="hover:text-emerald-400">LINKEDIN</a></p>
            <p><a href="#spotify" className="hover:text-emerald-400">SPOTIFY</a></p>
            <p><a href="#tiktok" className="hover:text-emerald-400">TIKTOK</a></p>
            <p><a href="#youtube" className="hover:text-emerald-400">YOUTUBE</a></p>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-gray-800 inline-flex items-center rounded-full px-4 py-2 mb-6">
            <span className="text-white mr-1">0.57g of CO</span>
            <span className="text-white text-xs align-text-bottom">2</span>
            <span className="text-white">/view</span>
            <span className="bg-emerald-400 text-black ml-4 px-3 py-1 rounded-full text-sm">Website Carbon</span>
          </div>
          
          <div className="flex items-center text-white">
            <p>Follow our carbon neutral journey</p>
            <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <img src="/api/placeholder/100/60" alt="Agency Collective" className="h-12" />
            <img src="/api/placeholder/100/60" alt="Living Wage Foundation" className="h-12" />
            <img src="/api/placeholder/100/60" alt="Clutch" className="h-12" />
            <img src="/api/placeholder/100/60" alt="B Corporation" className="h-12" />
            <img src="/api/placeholder/100/60" alt="Climate Emergency" className="h-12" />
            <div className="bg-emerald-400 rounded-full flex items-center justify-center p-4">
              <p className="text-black font-bold text-center">WORK WITH US?</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="px-4 md:px-8 lg:px-16 pt-8 pb-4">
        <img src="/api/placeholder/120/60" alt="nu logo" className="h-12 md:h-16" />
      </div>
      
      <HelpSection />
      
      <div className="md:flex">
        <div className="md:w-2/3">
          {/* This would be where your main content would go */}
        </div>
        <div className="md:w-1/3">
          <NewsletterSection />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;
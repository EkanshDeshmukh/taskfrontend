import React from 'react';

const Footer = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Help Section with Yellow and Blue Backgrounds */}
      <div className='w-full flex flex-col md:flex-row'>
        {/* First Section (Yellow Background) */}
        <section className="w-full md:w-2/3 px-4   md:px-8 lg:px-16 py-12 md:py-24">
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
                <a
                  href="#contact"
                  className="inline-flex items-center bg-emerald-400 text-black font-medium rounded-full px-6 py-3 transition-all hover:bg-emerald-500"
                >
                  LET'S TALK
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full h-px bg-gray-700 mt-12"></div>
        </section>

        {/* Second Section (White Card on Dark Background) */}
        <section className="w-full md:w-1/3 px-4 bg-black md:px-8 lg:px-16 py-12 md:py-24 flex items-center">
          <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10 w-full">
            <h2 className="text-3xl font-[font1] md:text-4xl lg:text-5xl font-bold text-black mb-6">
              KEEP UP TO DATE WITH ALL OUR LATEST NEWS
            </h2>
            
            <p className="text-black text-lg mb-8 font-[font2]">
              We share regular tips and insights designed to help you rise above your competition.
            </p>
            
            <button className="bg-emerald-400 text-black font-medium rounded-full px-6 py-3 transition-all hover:bg-emerald-500">
              SIGN UP TO OUR NEWSLETTER
            </button>
          </div>
        </section>
      </div>

      {/* Footer Content */}
      <footer className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-white text-2xl font-[font1] font-bold mb-6">Get in touch</h3>
            <div className="space-y-2 text-white font-[font2]">
              <p>
                <a href="mailto:enquiries@nucreative.co.uk" className="hover:text-emerald-400">
                  enquiries@nucreative.co.uk
                </a>
              </p>
              <p>
                <a href="tel:03332405800" className="hover:text-emerald-400">
                  0333 240 5800
                </a>
              </p>
              <div className="mt-6">
                <p>166A Tower Bridge Rd</p>
                <p>London</p>
                <p>SE1 3LZ</p>
              </div>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h3 className="text-white text-2xl font-[font1] font-bold mb-6">Follow</h3>
            <div className="space-y-2 text-white font-[font2]">
              <p><a href="#facebook" className="hover:text-emerald-400">FACEBOOK</a></p>
              <p><a href="#instagram" className="hover:text-emerald-400">INSTAGRAM</a></p>
              <p><a href="#linkedin" className="hover:text-emerald-400">LINKEDIN</a></p>
              <p><a href="#spotify" className="hover:text-emerald-400">SPOTIFY</a></p>
              <p><a href="#tiktok" className="hover:text-emerald-400">TIKTOK</a></p>
              <p><a href="#youtube" className="hover:text-emerald-400">YOUTUBE</a></p>
            </div>
          </div>
          
          {/* Carbon Neutral Section */}
          <div className="lg:col-span-1">
            <div className="inline-flex items-center bg-transparent border border-emerald-400 rounded-full px-4 py-2 mb-6">
              <span className="text-white mr-1 font-[font2]">0.57g of CO</span>
              <span className="text-white text-xs align-text-bottom font-[font2]">2</span>
              <span className="text-white font-[font2]">/view</span>
              <span className="bg-emerald-400 text-black ml-4 px-3 py-1 rounded-full text-sm font-[font2]">
                Website Carbon
              </span>
            </div>
            
            <div className="flex items-center text-white mb-8">
              <p className="font-[font2]">Follow our carbon neutral journey</p>
              <svg
                className="ml-2 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </div>
            
            {/* Logos Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <img src="/api/placeholder/100/60" alt="Agency Collective" className="h-12" />
              <img src="/api/placeholder/100/60" alt="Living Wage Foundation" className="h-12" />
              <img src="/api/placeholder/100/60" alt="Clutch" className="h-12" />
              <img src="/api/placeholder/100/60" alt="B Corporation" className="h-12" />
              <img src="/api/placeholder/100/60" alt="Climate Emergency" className="h-12" />
              <div className="bg-emerald-400 rounded-full flex items-center justify-center p-4">
                <p className="text-black font-bold text-center font-[font2]">WORK WITH US?</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
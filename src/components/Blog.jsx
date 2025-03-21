import React from 'react';

const BlogLayout = () => {
  const imageUrl = "https://i.pinimg.com/736x/8c/89/5d/8c895d68027d0c947c837caf3753ed60.jpg";
  
  return (
    <div className="w-full bg-black text-white min-h-screen">
      {/* Header Section */}
      <header className="p-8">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'font1' }}>
          Thoughts and musings of a London branding agency
        </h1>
        <p className="text-xl mb-8" style={{ fontFamily: 'font2' }}>
          Check out the latest insights from our creative agency, about Brand, Digital, Social and Content.
        </p>
        <div className="h-2 w-2 bg-green-400 rounded-full mx-auto mb-8"></div>
      </header>

      {/* Blog Grid Section - Fixed Two Column Layout */}
      <div className="flex flex-wrap p-8">
        {/* Left Column */}
        <div className="w-full md:w-1/2 pr-0 md:pr-4">
          {/* First Article - Left Top */}
          <div className="mb-8">
            <div className="rounded-lg overflow-hidden mb-4">
              <img 
                src={imageUrl} 
                alt="Article thumbnail" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex gap-2 mb-3">
              <span className="px-4 py-1 bg-white text-black rounded-full text-sm" style={{ fontFamily: 'font2' }}>
                CONTENT
              </span>
              <span className="px-4 py-1 bg-white text-black rounded-full text-sm" style={{ fontFamily: 'font2' }}>
                MARKETING
              </span>
              <span className="px-4 py-1 bg-white text-black rounded-full text-sm" style={{ fontFamily: 'font2' }}>
                DIGITAL
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'font1' }}>
              The ultimate guide to SEO and content marketing using SE Ranking
            </h2>
            <div className="flex items-center mt-4">
              <div className="w-6 h-1 bg-white mr-2"></div>
            </div>
          </div>

          {/* Third Article - Left Bottom */}
          <div className="mb-8">
            <div className="rounded-lg overflow-hidden mb-4">
              <img 
                src={imageUrl} 
                alt="Article thumbnail" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex gap-2 mb-3">
              <span className="px-4 py-1 bg-white text-black rounded-full text-sm" style={{ fontFamily: 'font2' }}>
                BRAND
              </span>
              <span className="px-4 py-1 bg-white text-black rounded-full text-sm" style={{ fontFamily: 'font2' }}>
                BIDS & TENDERS
              </span>
              <span className="px-4 py-1 bg-white text-black rounded-full text-sm" style={{ fontFamily: 'font2' }}>
                DESIGN
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'font1' }}>
              Eight reasons why branding and design matters in bids & tenders
            </h2>
            <p className="text-gray-300 mb-2" style={{ fontFamily: 'font2' }}>
              Winning a bid isn't simply about having the best offer. In fact, it's frequently not the...
            </p>
            <div className="flex items-center">
              <div className="w-6 h-1 bg-white mr-2"></div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 pl-0 md:pl-4">
          {/* Second Article - Right Top */}
          <div className="mb-8">
            <div className="rounded-lg overflow-hidden mb-4">
              <img 
                src={imageUrl} 
                alt="Article thumbnail" 
                className="w-full h-64 object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'font1' }}>
              Proof in the purpose: how B Corp certification drives business success
            </h2>
          </div>

          {/* Fourth Article - Right Bottom */}
          <div className="mb-8">
            <div className="rounded-lg overflow-hidden mb-4">
              <img 
                src={imageUrl} 
                alt="Article thumbnail" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex gap-2 mb-3">
              <span className="px-4 py-1 bg-white text-black rounded-full text-sm" style={{ fontFamily: 'font2' }}>
                CONTENT
              </span>
              <span className="px-4 py-1 bg-white text-black rounded-full text-sm" style={{ fontFamily: 'font2' }}>
                MARKETING
              </span>
              <span className="px-4 py-1 bg-white text-black rounded-full text-sm" style={{ fontFamily: 'font2' }}>
                DIGITAL
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'font1' }}>
              How generative AI is revolutionising digital marketing and SEO
            </h2>
            <p className="text-gray-300 mb-2" style={{ fontFamily: 'font2' }}>
              Generative AI isn't just a tech buzzword; it's transforming digital marketing and shaking...
            </p>
            <div className="flex items-center">
              <div className="w-6 h-1 bg-white mr-2"></div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="white" strokeWidth="2" />
                <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* B-Corp Notice */}
      <div className="p-8 text-right">
        <p className="text-gray-300" style={{ fontFamily: 'font2' }}>
          March 2025 is B-Corp month, and as a recently certified business, we're here to highlight...
        </p>
      </div>

      {/* View All Button */}
      <div className="flex justify-end p-8">
        <button className="border border-white rounded-full px-6 py-3 flex items-center" style={{ fontFamily: 'font2' }}>
          VIEW ALL INSIGHTS
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="ml-2">
            <path d="M5 12H19" stroke="white" strokeWidth="2" />
            <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogLayout;
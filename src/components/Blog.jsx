import React from 'react';

const BlogLayout = () => {
  const articles = [
    {
      image: "https://d2hq2vp6n3e7lp.cloudfront.net/news-articles/thumbnails/The-ultimate-guide-to-SEO-and-content-marketing-using-SE-Ranking_Thumbnail.png",
      title: "The ultimate guide to SEO and content marketing using SE Ranking",
      excerpt: "SEO and content marketing are two sides of the same coin. And without one, the other…",
      categories: ["CONTENT", "MARKETING", "DIGITAL"]
    },
    {
      image: "https://d2hq2vp6n3e7lp.cloudfront.net/news-articles/thumbnails/Proof-in-the-purpose_Thumbnail.png",
      title: "Proof in the purpose: how B Corp certification drives business success",
      excerpt: "The B Corp certification is a badge of honour for businesses that are committed to…",
      categories: ["PURPOSE", "CERTIFICATION"]
    },
    {
      image: "https://d2hq2vp6n3e7lp.cloudfront.net/news-articles/thumbnails/Why-strong-branding-wins-bids-and-tenders-for-B2B-businesses_Thumbnail.png",
      title: "Eight reasons why branding and design matters in bids & tenders",
      excerpt: "Branding and design are often overlooked in the bids and tenders process. But they…",
      categories: ["BRAND", "BIDS & TENDERS", "DESIGN"]
    },
    {
      image: "https://d2hq2vp6n3e7lp.cloudfront.net/news-articles/thumbnails/How-generative-AI-is-revolutionising-digital-marketing-and-SEO_Thumbnail.png",
      title: "How generative AI is revolutionising digital marketing and SEO",
      excerpt: "Generative AI is revolutionising digital marketing and SEO. But what is it, and how…",
      categories: ["CONTENT", "MARKETING", "DIGITAL"]
    }
  ];

  return (
    <div className="bg-black font-[font2] text-white min-h-screen p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl font-[font1] md:text-4xl lg:text-5xl font-bold mb-4">Thoughts and musings of a London branding agency</h1>
          <h4 className="text-lg md:text-xl text-gray-300 max-w-3xl">Check out the latest insights from our creative agency, about Brand, Digital, Social and Content</h4>
        </div>
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {articles.map((article, index) => (
            <div 
              key={index}
              className={`flex flex-col rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${index % 2 === 1 ? 'md:mt-16' : ''}`}
            >
              <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              
              <div className="p-4 lg:p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.categories.map((category, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white text-black rounded-full text-xs font-medium tracking-wider hover:bg-gray-200 transition-colors"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-xl font-[font1] md:text-2xl lg:text-3xl font-bold mb-3 line-clamp-2">{article.title}</h2>
                <p className="text-gray-300 mb-4">{article.excerpt}</p>
                
                <button className="inline-flex items-center text-sm font-medium border-b-2 border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
                  Read Article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
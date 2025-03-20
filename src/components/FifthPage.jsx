import React from 'react';

export default function InsightsSection() {
  const articles = [
    {
      id: 1,
      image: "/api/placeholder/400/320",
      tags: ['CONTENT', 'MARKETING', 'DIGITAL'],
      title: 'The ultimate guide to SEO and content marketing using SE Ranking',
      description: '',
    },
    {
      id: 2,
      image: "/api/placeholder/400/320",
      tags: ['BRAND', 'BIDS & TENDERS', 'DESIGN'],
      title: 'Eight reasons why branding and design matters in bids & tenders',
      description: 'Winning a bid isnt simply about having the best offer. In fact, its frequently not the...',
    
    },
    {
      id: 3,
      image: "/api/placeholder/400/320",
      tags: ['CONTENT', 'MARKETING', 'DIGITAL'],
      title: 'How generative AI is revolutionising digital marketing and SEO',
      description: 'Generative AI isnt just a tech buzzword; it transforming digital marketing and shaking...',
    },
    {
      id: 4,
      image: "/api/placeholder/400/320",
      tags: [],
      title: 'Proof in the purpose: how B Corp certification drives business growth',
      description: 'March 2025 is B-Corp month, and as a recently certified business, were here to highlight...',
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-16 flex-wrap gap-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Thoughts and musings of a London branding agency</h1>
            <p className="text-gray-300 text-lg">Check out the latest insights from our creative agency, about Brand, Digital, Social and Content.</p>
          </div>
          <button className="border border-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
            VIEW ALL INSIGHTS 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {articles.map((article, index) => (
            <div key={article.id} className={index === 3 ? "md:col-span-1" : ""}>
              <div className="bg-gray-800 rounded-xl overflow-hidden mb-4">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-64 object-cover" 
                />
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {article.tags.map((tag) => (
                  <span key={tag} className="bg-transparent border border-white text-xs px-4 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Title and Description */}
              <div>
                <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                {article.description && (
                  <p className="text-gray-400 mb-2">{article.description}</p>
                )}
                {/* Arrow indicator */}
                <div className="mt-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
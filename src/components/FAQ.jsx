import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BrandingProblems = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const problems = [
    {
      title: 'Unclear brand positioning',
      content: 'Are you struggling to define your identity, values, and positioning in the market? Our certified brand strategists can help articulate who you are, what you stand for, and how to differentiate yourself in the market.'
    },
    {
      title: 'Inconsistent visual identity',
      content: 'Lack of consistency across your brand visuals can confuse your audience. We help you develop a clear visual language to ensure brand consistency.'
    },
    {
      title: 'Dated or irrelevant branding',
      content: 'Brands evolve, and so should your branding. Let us help you modernize your brand while maintaining its essence.'
    },
    {
      title: 'Lack of brand awareness',
      content: 'Struggling to reach your audience? Our strategies will increase your brand visibility and establish your presence in the market.'
    },
    {
      title: 'No clear target audience',
      content: 'Identifying the right audience is essential. Our team helps you define and engage with your ideal customers.'
    },
    {
      title: 'Lack of competitive differentiation',
      content: 'Standing out in a competitive market is crucial. We develop strategies to set your brand apart from competitors.'
    }
  ];

  const toggleProblem = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={{background: 'linear-gradient(180deg, #070E0E, #081818)' }} className="min-h-screen text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-24">
        <h1 className="font-[font1] text-4xl sm:text-5xl md:text-7xl mb-12 sm:mb-16 md:mb-24">
          Brand challenges we solve.
        </h1>

        <div className="relative">
          {/* Pink Banner */}
          <motion.div 
            className="absolute -top-8 sm:-top-10 md:-top-16 -left-2 sm:-left-4 md:-left-8 transform -rotate-6 z-10" 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <div className="px-3 py-2 sm:px-6 sm:py-3 md:px-10 md:py-5">
              <h2 className="text-xl sm:text-3xl md:text-5xl bg-pink-200 font-[font1] font-black text-black whitespace-nowrap py-1 px-2 sm:px-4">
                MOST COMMON PROBLEMS
              </h2>
            </div>
          </motion.div>

          {/* Problems Container */}
          <div className="mt-12 sm:mt-16 md:mt-24 border rounded-xl sm:rounded-2xl md:rounded-3xl border-gray-600 p-4 sm:p-6 md:p-12 relative">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="border-b border-gray-700 last:border-b-0 py-4 sm:py-6 md:py-8"
              >
                <button 
                  className="flex items-center w-full justify-start text-left cursor-pointer hover:opacity-80 transition-opacity duration-200" 
                  onClick={() => toggleProblem(index)}
                  aria-expanded={index === activeIndex}
                  aria-controls={`problem-content-${index}`}
                >
                  <div className="mr-3 sm:mr-4 md:mr-6 text-xl sm:text-2xl md:text-3xl flex-shrink-0">
                    {index === activeIndex ? (
                      <span className="text-2xl sm:text-3xl md:text-4xl">×</span>
                    ) : (
                      <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
                    )}
                  </div>
                  <h3 className="font-[font1] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
                    {problem.title}
                  </h3>
                </button>
                
                <AnimatePresence>
                  {index === activeIndex && (
                    <motion.div
                      id={`problem-content-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="pl-10 sm:pl-12 md:pl-16 pr-2 sm:pr-4 pt-4 sm:pt-6 pb-2 sm:pb-4">
                        <p className="text-base sm:text-lg text-gray-300 font-[font2] max-w-3xl">
                          {problem.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        
        {/* Work with us button */}
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-20">
          <div className="bg-green-300 text-black rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex flex-col items-center justify-center font-[font1] font-bold text-sm sm:text-lg md:text-2xl leading-tight cursor-pointer hover:bg-green-400 transition-colors duration-300">
            <div className="text-center">
              WORK<br />WITH US?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingProblems;
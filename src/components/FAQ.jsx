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
    <div style={{background: 'linear-gradient(180deg, #070E0E, #081818)' }} className="min-h-screen text-white flex items-center justify-center">
      <main className="px-4 sm:px-8 py-16 relative w-full max-w-6xl mx-auto">
        {/* Pink Banner */}
        <motion.div 
          className="absolute left-0 sm:left-12 top-0 transform -rotate-6 z-10" 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <div className="px-6 sm:px-10 py-3 sm:py-4">
            <h2 className="text-3xl bg-pink-200 font-[font1] sm:text-5xl font-black text-black">MOST COMMON PROBLEMS</h2>
          </div>
        </motion.div>

        {/* Problems Container */}
        <div className="mt-40 flex items-center justify-center flex-col w-full border-2 border-white-600 rounded-3xl p-6 sm:p-12 relative">
          {problems.map((problem, index) => (
            <div key={index} className="border-white flex items-center flex-col justify-end border-gray-700 last:border-b-0 py-4 my-2 w-full">
              <div 
                className="flex h-32 items-center py-4 sm:py-6 cursor-pointer transition-all duration-300 hover:opacity-80 w-full" 
                onClick={() => toggleProblem(index)}
              >
                <motion.div 
                  className="mr-4 sm:mr-6 text-2xl sm:text-3xl" 
                  animate={{ rotate: index === activeIndex ? 45 : 0 }} 
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.div>
                <h3 className="text-3xl font-[font1] sm:text-7xl font-bold">{problem.title}</h3>
              </div>
             
              <div className="w-full flex items-center justify-center">
                <AnimatePresence>
                  {index === activeIndex && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full flex justify-center"
                    >
                      <p className="text-left w-full sm:w-1/2 sm:pl-16 pr-4 sm:pr-8 text-lg sm:text-xl text-gray-300">
                        {problem.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className='w-[70vw] h-[1px] bg-white'></div>
             
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BrandingProblems;
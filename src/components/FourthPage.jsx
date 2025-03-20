import React, { useEffect, useState } from 'react';

const HowWeWorkWithMarquee = () => {
  const [position, setPosition] = useState(0);
  const text = "The rumours are all true...\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";

  const repeatedText = `${text} ${text} ${text} ${text} ${text} ${text} ${text} ${text} ${text}`;

  useEffect(() => {
    const animate = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 1;
        if (newPosition <= -220) {
          return 0;
        }
        return newPosition;
      });
    };

    const intervalId = setInterval(animate, 25);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-5 w-full h-[80vh] bg-black text-white my-5 flex flex-col justify-between">
      {/* First part: HowWeWork UI */}
      <div className='h-fit flex flex-wrap justify-center md:justify-between p-5 rounded-lg mb-6'>
        <div className='w-full md:w-1/5 flex justify-center md:justify-start mb-4 md:mb-0'>
          <img className='w-36 h-60' src="src/img/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiB3b3JrLWljb24gZmFkZSBmYWRlTGVmdCIgd2lkdGg9IjIzOSIgaGVpZ2h0PSIyMzkiIHZpZXdCb3g9IjAgMCAyMzkgMjM5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmci.svg" alt="" />
        </div>
        <div className="text-center flex gap-7 items-center flex-col w-full md:w-1/2 p-5 rounded-lg mb-6">
          <h1 className="text-4xl md:text-7xl font-[font1] font-bold mb-5">HOW WE WORK</h1>
          <p className="text-base md:text-lg text-center leading-relaxed mb-5">
            Whether you're a UK or international business, we offer several ways to engage with our London-based branding and design agency, to help your brand stay ahead of the competition, attract customers and reduce costs.
          </p>
          <button className="bg-transparent border border-white text-white py-2 px-6 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-black text-base md:text-sm sm:text-xs">
            DISCOVER OUR WAYS OF WORKING
          </button>
        </div>
      </div>

      {/* Second part: Marquee */}
      <div className="bg-white font-[font1] text-black p-12 rounded-lg overflow-hidden">
        <div className="w-full overflow-hidden border-t border-b border-gray-600 py-4">
          <div
            className="text-4xl md:text-6xl font-semibold whitespace-nowrap"
            style={{ marginLeft: '50px', transform: `translateX(${position}px)` }}
          >
            {repeatedText} {repeatedText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkWithMarquee;

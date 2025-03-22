import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(true);
  const [isTabActive, setIsTabActive] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkScreenSize = () => {
      setShowCursor(window.innerWidth > 768); // Hides cursor on screens smaller than 768px
    };

    const handleVisibilityChange = () => {
      setIsTabActive(!document.hidden); // Track if the tab is active or not
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkScreenSize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    checkScreenSize(); // Initial check

    if (showCursor && isTabActive) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'default';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkScreenSize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.body.style.cursor = 'default';
    };
  }, [showCursor, isTabActive]);

  return (
    <div>
      {showCursor && isTabActive && (
        <div
          className="fixed top-0 left-0 w-3 h-3 bg-green-400 rounded-full pointer-events-none z-50 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ></div>
      )}
    </div>
  );
};

export default CustomCursor;

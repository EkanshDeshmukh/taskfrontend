
import React, { useEffect, useRef, useState } from 'react';

const Hero = ({ bgImg, showOverlayImg }) => {
  const [prevBg, setPrevBg] = useState(bgImg);
  const [fade, setFade] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    if (bgImg !== prevBg) {
      setFade(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setPrevBg(bgImg);
        setFade(false);
      }, 800); // match transition duration
    }
    // Cleanup
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [bgImg, prevBg]);

  return (
    <section
      className="hero h-[100vh] w-full fixed top-0 left-0 z-[-1] bg-cover bg-center"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {/* Previous bg image (fading out) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#111',
          backgroundImage: `url(${prevBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1)',
          opacity: fade ? 0 : 1,
          zIndex: 1,
        }}
      />
      {/* New bg image (fading in) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#111',
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1)',
          opacity: fade ? 1 : 0,
          zIndex: 2,
        }}
      />
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        {/* Overlay with fade and backdrop */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            opacity: showOverlayImg ? 1 : 0,
            transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)',
            zIndex: 3,
          }}
        >
          {/* ...overlay content if any... */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

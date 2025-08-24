
import React, { useEffect, useRef, useState } from 'react';
import SocialPage from './components/SocialPage';

import Hero from './components/Hero';
import PageOne from './components/Pageone';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';


// Cartier background images
const HERO_BG_1 = "https://365ayearof.cartier.com/images/compressedImages/landing-fullscreen_01-opt-1920.WEBP";
const HERO_BG_2 = "https://365ayearof.cartier.com/images/compressedImages/landing-fullscreen_02-opt-1920.WEBP";
const HERO_BG_3 = "https://365ayearof.cartier.com/images/compressedImages/landing-fullscreen_03-opt-1920.WEBP";

function App() {
  const [bgImg, setBgImg] = useState(HERO_BG_1);
  const [showOverlayImg, setShowOverlayImg] = useState(false);
  const pageOneRef = useRef(null);
  const pageTwoRef = useRef(null);
  const pageThreeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const pageOne = pageOneRef.current;
      const pageTwo = pageTwoRef.current;
      const pageThree = pageThreeRef.current;
      const scrollY = window.scrollY;
      if (pageOne && pageTwo && pageThree) {
        const pageOneTop = pageOne.offsetTop;
        const pageOneBottom = pageOneTop + pageOne.offsetHeight;
        const pageTwoTop = pageTwo.offsetTop;
        const pageTwoBottom = pageTwoTop + pageTwo.offsetHeight;
        const pageThreeTop = pageThree.offsetTop;
        const pageThreeBottom = pageThreeTop + pageThree.offsetHeight;

        // If in PageTwo section
        if (scrollY + window.innerHeight/2 >= pageTwoTop && scrollY + window.innerHeight/2 < pageTwoBottom) {
          setBgImg(HERO_BG_2);
          setShowOverlayImg(true);
        } else if (scrollY + window.innerHeight/2 >= pageThreeTop && scrollY + window.innerHeight/2 < pageThreeBottom) {
          setBgImg(HERO_BG_3);
          setShowOverlayImg(true);
        } else {
          setBgImg(HERO_BG_1);
          setShowOverlayImg(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set correct bg
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Hero bgImg={bgImg} showOverlayImg={showOverlayImg} />
      <div ref={pageOneRef}>
        <PageOne />
      </div>
      <div ref={pageTwoRef}>
        <PageTwo />
      </div>
      <div ref={pageThreeRef}>
        <PageThree />
      </div>
      {/* <SocialPage /> */}
    </div>
  );
}

export default App;
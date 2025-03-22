import React from 'react';
import Home from '../src/components/Home';
import Footer from './components/Footer';
import FAQSection from './components/FAQ';
import FourthPage from './components/HowWeWork';
import SecondPage from './components/SecondPage';
import MarqueeWithSwipper from './components/MarqueeWithSwipper';
import ThirdPage from './components/ThirdPage';
import Blog from './components/Blog';
import CustomCursor from './components/CustomCursor';
import SocialPage from './components/SocialPage';

function App() {
  return (
    <div>
      <CustomCursor/>
      <Home />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <SocialPage/>
      <MarqueeWithSwipper />
      <FAQSection />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

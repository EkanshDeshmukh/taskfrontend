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

function App() {
  return (
    <div>
      <CustomCursor/>
      <Home />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <MarqueeWithSwipper />
      <FAQSection />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Home from '../src/components/Home'
import Footer from './components/Footer';
import FAQSection from './components/FAQ';

import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import FifthPage from './components/FifthPage';
import Banner from './components/Banner';
import SecondPage  from './components/SecondPage';



function App() {
  return (
     <div>
       <Home/>
       <SecondPage/>
       {/* <ThirdPage/> */}
        <FourthPage/>
        {/* <FifthPage/>
        <Banner/> */}

        
        <FAQSection/>
       
        <Footer/>  

     </div>
  );
}

export default App;

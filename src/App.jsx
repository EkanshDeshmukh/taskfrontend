import React, { useState } from 'react';
import './App.css';
import Home from '../src/components/Home'
import Footer from './components/Footer';
import FAQSection from './components/FAQ';



function App() {
  return (
     <div>
       <Home/>
       
        
        <FAQSection/>
       
        <Footer/>  

     </div>
  );
}

export default App;

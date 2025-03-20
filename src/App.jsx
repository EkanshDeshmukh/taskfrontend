import React,{ useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import Home from '../src/components/Home'
import Footer from './components/Footer';
import FAQSection from './components/FAQ';
import BoxAni from './components/BoxAni';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import FifthPage from './components/FifthPage';
import Banner from './components/Banner';
import SecondPage  from './components/SecondPage';



function App() {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
 
  
 
  useEffect(() => {
    let tl  = gsap.timeline(
      {
        scrollTrigger: {
          trigger:sectionRef.current,
              scroller:"body",
              start:"top top",
              end:"100% -200%",
              scrub:true,
              pin:true,
              markers:true,
        }
      }
    )

   tl
   .to(boxRef.current,{
    top:"0%",
     duration:1.5
   })
   .to(boxRef1.current,{
    top:"0%",
     duration:1.5
   })
   .to(boxRef2.current,{
    top:"0%",
     duration:1.5
   })
  
  }, []);
  return (
     <div>
      
       <Home/>
       <SecondPage/>
       <div id="page3" ref={sectionRef} className='relative w-full h-[100vh] overflow-hidden'>
    <section className="bg-[#e9c4f0] absolute z-[9] top-0 w-full h-[100vh] text-black py-20 px-6 md:px-24 rounded-bl-[60px]">
  <div className="flex flex-col  justify-between w-full items-start gap-16">

    <div className=" flex relative justify-between items-center   w-full">
      <h1 className="text-[140px] leading-none font-black tracking-tight">BRAND<span className="inline-block w-5 h-5 bg-black rounded-full ml-2 mb-5"></span></h1>

     
      <button className="mt-12 border-2 border-black rounded-full px-10 py-5 flex items-center gap-4 hover:bg-black hover:text-white transition-all">
        TELL ME MORE
        <span className="text-2xl">↗</span>
      </button>
    </div>

    <div className=" flex relative w-full justify-between px-[8vw] items-baseline">
      <div className='flex flex-col'>
      <h2 className="mt-16 text-3xl font-extrabold">YOUR MOST VALUABLE ASSET.</h2>
      <p className="mt-6 text-xl leading-relaxed max-w-[600px]">
        Branding lays all the groundwork for who you are. As a leading brand agency, we'll craft your visual and verbal story, 
        with a balance of inspiration and aspiration – connecting with more of the right audience. From strategy to activation 
        and beyond, consider every stone unturned, to ensure your brand is brimming with a distinct personality.
      </p>
      </div>

      <ul className="space-y-1 text-lg leading-relaxed">
        <li>BRAND ACTIVATION</li>
        <li>BRAND ARCHITECTURE</li>
        <li>BRAND IDENTITY</li>
        <li>BRAND NAMING</li>
        <li>BRAND STRATEGY</li>
        <li>BRAND SYSTEMS MANAGEMENT</li>
        <li>BRAND VOICE</li>
      </ul>

     
    </div>
  </div>
    </section>
    <section ref={boxRef} className="bg-[#A9F0D1] absolute z-[99] top-[0%] w-full h-[100vh] text-black py-20 px-6 md:px-24 rounded-bl-[60px]">
  <div className="flex flex-col  justify-between w-full items-start gap-16">

    <div className=" flex relative justify-between items-center   w-full">
      <h1 className="text-[140px] leading-none font-black tracking-tight">BRAND<span className="inline-block w-5 h-5 bg-black rounded-full ml-2 mb-5"></span></h1>

     
      <button className="mt-12 border-2 border-black rounded-full px-10 py-5 flex items-center gap-4 hover:bg-black hover:text-white transition-all">
        TELL ME MORE
        <span className="text-2xl">↗</span>
      </button>
    </div>

    <div className=" flex relative w-full justify-between px-[8vw] items-baseline">
      <div className='flex flex-col'>
      <h2 className="mt-16 text-3xl font-extrabold">YOUR MOST VALUABLE ASSET.</h2>
      <p className="mt-6 text-xl leading-relaxed max-w-[600px]">
        Branding lays all the groundwork for who you are. As a leading brand agency, we'll craft your visual and verbal story, 
        with a balance of inspiration and aspiration – connecting with more of the right audience. From strategy to activation 
        and beyond, consider every stone unturned, to ensure your brand is brimming with a distinct personality.
      </p>
      </div>

      <ul className="space-y-1 text-lg leading-relaxed">
        <li>BRAND ACTIVATION</li>
        <li>BRAND ARCHITECTURE</li>
        <li>BRAND IDENTITY</li>
        <li>BRAND NAMING</li>
        <li>BRAND STRATEGY</li>
        <li>BRAND SYSTEMS MANAGEMENT</li>
        <li>BRAND VOICE</li>
      </ul>

     
    </div>
  </div>
    </section>
    <section ref={boxRef1} className="bg-[#ADE8FF] absolute z-[999] top-[100%] w-full h-[100vh] text-black py-20 px-6 md:px-24 rounded-bl-[60px]">
  <div className="flex flex-col  justify-between w-full items-start gap-16">

    <div className=" flex relative justify-between items-center   w-full">
      <h1 className="text-[140px] leading-none font-black tracking-tight">BRAND<span className="inline-block w-5 h-5 bg-black rounded-full ml-2 mb-5"></span></h1>

     
      <button className="mt-12 border-2 border-black rounded-full px-10 py-5 flex items-center gap-4 hover:bg-black hover:text-white transition-all">
        TELL ME MORE
        <span className="text-2xl">↗</span>
      </button>
    </div>

    <div className=" flex relative w-full justify-between px-[8vw] items-baseline">
      <div className='flex flex-col'>
      <h2 className="mt-16 text-3xl font-extrabold">YOUR MOST VALUABLE ASSET.</h2>
      <p className="mt-6 text-xl leading-relaxed max-w-[600px]">
        Branding lays all the groundwork for who you are. As a leading brand agency, we'll craft your visual and verbal story, 
        with a balance of inspiration and aspiration – connecting with more of the right audience. From strategy to activation 
        and beyond, consider every stone unturned, to ensure your brand is brimming with a distinct personality.
      </p>
      </div>

      <ul className="space-y-1 text-lg leading-relaxed">
        <li>BRAND ACTIVATION</li>
        <li>BRAND ARCHITECTURE</li>
        <li>BRAND IDENTITY</li>
        <li>BRAND NAMING</li>
        <li>BRAND STRATEGY</li>
        <li>BRAND SYSTEMS MANAGEMENT</li>
        <li>BRAND VOICE</li>
      </ul>

     
    </div>
  </div>
    </section>
    <section ref={boxRef2} className="bg-[#E5BEED] absolute z-[9999] top-[100%] w-full h-[100vh] text-black py-20 px-6 md:px-24 rounded-bl-[60px]">
  <div className="flex flex-col  justify-between w-full items-start gap-16">

    <div className=" flex relative justify-between items-center   w-full">
      <h1 className="text-[140px] leading-none font-black tracking-tight">BRAND<span className="inline-block w-5 h-5 bg-black rounded-full ml-2 mb-5"></span></h1>

     
      <button className="mt-12 border-2 border-black rounded-full px-10 py-5 flex items-center gap-4 hover:bg-black hover:text-white transition-all">
        TELL ME MORE
        <span className="text-2xl">↗</span>
      </button>
    </div>

    <div className=" flex relative w-full justify-between px-[8vw] items-baseline">
      <div className='flex flex-col'>
      <h2 className="mt-16 text-3xl font-extrabold">YOUR MOST VALUABLE ASSET.</h2>
      <p className="mt-6 text-xl leading-relaxed max-w-[600px]">
        Branding lays all the groundwork for who you are. As a leading brand agency, we'll craft your visual and verbal story, 
        with a balance of inspiration and aspiration – connecting with more of the right audience. From strategy to activation 
        and beyond, consider every stone unturned, to ensure your brand is brimming with a distinct personality.
      </p>
      </div>

      <ul className="space-y-1 text-lg leading-relaxed">
        <li>BRAND ACTIVATION</li>
        <li>BRAND ARCHITECTURE</li>
        <li>BRAND IDENTITY</li>
        <li>BRAND NAMING</li>
        <li>BRAND STRATEGY</li>
        <li>BRAND SYSTEMS MANAGEMENT</li>
        <li>BRAND VOICE</li>
      </ul>

     
    </div>
  </div>
    </section>
       </div>
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

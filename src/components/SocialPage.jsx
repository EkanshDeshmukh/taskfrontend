import React,{ useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const SocialPage = () => {
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
    <>
    
    <div id="page" ref={sectionRef} className='relative  font-[font2] w-full h-[110vh] bg-black overflow-hidden'>
    <section class="bg-[#e9c4f0] absolute z-[9] top-0 w-full h-[100vh] text-black py-10 px-4 md:px-24 ">
        <div class="flex flex-col justify-between w-full items-start gap-10 md:gap-16">
        <div class="flex relative justify-between items-center w-full">
            <h1 class="text-[60px] font-[font1] md:text-[140px] leading-none font-black tracking-tight">
            BRAND
            <span class="inline-block w-5 h-5 bg-black rounded-full ml-2 mb-5"></span>
            </h1>
            <button class="hidden md:flex mt-12 border-2 border-black rounded-full px-10 py-5 items-center gap-4 hover:bg-black hover:text-white transition-all">
            TELL ME MORE
            <span class="text-2xl">↗</span>
            </button>
        </div>

        <div class="flex flex-col md:flex-row relative w-full justify-between px-0 md:px-[8vw] items-start md:items-baseline gap-10 md:gap-0">
            <div class='flex flex-col'>
            <h2 class="mt-4 text-2xl md:text-3xl font-extrabold">YOUR MOST VALUABLE ASSET.</h2>
            <p class="mt-4 text-base md:text-xl leading-relaxed max-w-full md:max-w-[600px]">
                Branding lays all the groundwork for who you are. As a leading brand agency, we'll craft your visual and verbal story,
                with a balance of inspiration and aspiration – connecting with more of the right audience. From strategy to activation
                and beyond, consider every stone unturned, to ensure your brand is brimming with a distinct personality.
            </p>
            </div>

            <ul class="space-y-1 text-base md:text-lg leading-relaxed">
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

  <section ref={boxRef} class="bg-[#A9F0D1] absolute z-[99] top-[100%] w-full h-[100vh] text-black py-10 px-4 md:px-24 rounded-bl-[60px]">
  <div class="flex flex-col justify-between w-full items-start gap-10 md:gap-16">
        <div class="flex relative justify-between items-center w-full">
            <h1 class="text-[60px]  font-[font1] md:text-[140px] leading-none font-black tracking-tight">
            BRAND
            <span class="inline-block w-5 h-5 bg-black rounded-full ml-2 mb-5"></span>
            </h1>
            <button class="hidden md:flex mt-12 border-2 border-black rounded-full px-10 py-5 items-center gap-4 hover:bg-black hover:text-white transition-all">
            TELL ME MORE
            <span class="text-2xl">↗</span>
            </button>
        </div>

        <div class="flex flex-col md:flex-row relative w-full justify-between px-0 md:px-[8vw] items-start md:items-baseline gap-10 md:gap-0">
            <div class='flex flex-col'>
            <h2 class="mt-4 text-2xl md:text-3xl font-extrabold">YOUR MOST VALUABLE ASSET.</h2>
            <p class="mt-4 text-base md:text-xl leading-relaxed max-w-full md:max-w-[600px]">
                Branding lays all the groundwork for who you are. As a leading brand agency, we'll craft your visual and verbal story,
                with a balance of inspiration and aspiration – connecting with more of the right audience. From strategy to activation
                and beyond, consider every stone unturned, to ensure your brand is brimming with a distinct personality.
            </p>
            </div>

            <ul class="space-y-1 text-base md:text-lg leading-relaxed">
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

  <section ref={boxRef1} class="bg-[#ADE8FF] absolute z-[999] top-[100%] w-full h-[100vh] text-black py-10 px-4 md:px-24 rounded-bl-[60px]">
  <div class="flex flex-col justify-between w-full items-start gap-10 md:gap-16">
        <div class="flex relative justify-between items-center w-full">
            <h1 class="text-[60px]  font-[font1] md:text-[140px] leading-none font-black tracking-tight">
            BRAND
            <span class="inline-block w-5 h-5 bg-black rounded-full ml-2 mb-5"></span>
            </h1>
            <button class="hidden md:flex mt-12 border-2 border-black rounded-full px-10 py-5 items-center gap-4 hover:bg-black hover:text-white transition-all">
            TELL ME MORE
            <span class="text-2xl">↗</span>
            </button>
        </div>

        <div class="flex flex-col md:flex-row relative w-full justify-between px-0 md:px-[8vw] items-start md:items-baseline gap-10 md:gap-0">
            <div class='flex flex-col'>
            <h2 class="mt-4 text-2xl md:text-3xl font-extrabold">YOUR MOST VALUABLE ASSET.</h2>
            <p class="mt-4 text-base md:text-xl leading-relaxed max-w-full md:max-w-[600px]">
                Branding lays all the groundwork for who you are. As a leading brand agency, we'll craft your visual and verbal story,
                with a balance of inspiration and aspiration – connecting with more of the right audience. From strategy to activation
                and beyond, consider every stone unturned, to ensure your brand is brimming with a distinct personality.
            </p>
            </div>

            <ul class="space-y-1 text-base md:text-lg leading-relaxed">
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

  <section ref={boxRef2} class="bg-[#E5BEED] absolute z-[9999] top-[100%] w-full h-[100vh] text-black py-10 px-4 md:px-24 rounded-bl-[60px]">
  <div class="flex flex-col justify-between w-full items-start gap-10 md:gap-16">
        <div class="flex relative justify-between items-center w-full">
            <h1 class="text-[60px]  font-[font1] md:text-[140px] leading-none font-black tracking-tight">
            BRAND
            <span class="inline-block w-5 h-5 bg-black rounded-full ml-2 mb-5"></span>
            </h1>
            <button class="hidden md:flex mt-12 border-2 border-black rounded-full px-10 py-5 items-center gap-4 hover:bg-black hover:text-white transition-all">
            TELL ME MORE
            <span class="text-2xl">↗</span>
            </button>
        </div>

        <div class="flex flex-col md:flex-row relative w-full justify-between px-0 md:px-[8vw] items-start md:items-baseline gap-10 md:gap-0">
            <div class='flex flex-col'>
            <h2 class="mt-4 text-2xl md:text-3xl font-extrabold">YOUR MOST VALUABLE ASSET.</h2>
            <p class="mt-4 text-base md:text-xl leading-relaxed max-w-full md:max-w-[600px]">
                Branding lays all the groundwork for who you are. As a leading brand agency, we'll craft your visual and verbal story,
                with a balance of inspiration and aspiration – connecting with more of the right audience. From strategy to activation
                and beyond, consider every stone unturned, to ensure your brand is brimming with a distinct personality.
            </p>
            </div>

            <ul class="space-y-1 text-base md:text-lg leading-relaxed">
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


    </>
  )
}

export default SocialPage

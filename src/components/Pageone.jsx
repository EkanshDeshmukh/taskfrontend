import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PageOne = () => {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentRef.current,
        scroller: "body",
        start: "10% top",
        end: "95% -50%",
       
        scrub: true,
      }
    });

    tl
      .to(childRef.current, {
        width: "100%",
        height: "110vh",
        duration: 1,
      }, "a")
      .to(childRef.current, {
        width: "80%",
        height: "100vh",
        duration: 1,
      });

    // GSAP for top text and heading after 50% scroll
    gsap.fromTo(
      ".chapter-title",
      { y: 90, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: parentRef.current,
          scroller: "body",
          start: "50% center",
          toggleActions: "play none none none",
         
        },
      }
    );
    
    gsap.fromTo(
      ".chapter-heading",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: parentRef.current,
          scroller: "body",
          start: "50% center",
          toggleActions: "play none none none",
          
        },
      }
    );

    // GSAP for images - initially at top (-150px), then move downward when triggered
    gsap.utils.toArray(".image-container").forEach((el) => {
      // Set initial position at top
      gsap.set(el, { y: -150 });
      
      gsap.fromTo(
        el,
        { y: -150 },
        {
          y: el.id === "fast" ? 150 : 80, // Fast images move more downward
          scrollTrigger: {
            trigger: parentRef.current,
            scroller: "body",
            start: "30% center",
            end: "bottom 30%",
            scrub: true,
          },
          ease: "power1.out",
        }
      );
    });

    return () => {
      tl.kill();
      gsap.killTweensOf(".chapter-title");
      gsap.killTweensOf(".chapter-heading");
      gsap.utils.toArray(".image-container").forEach((el) => gsap.killTweensOf(el));
    };
  }, []);

  return (
    <div ref={parentRef} className="w-full h-[150vh] flex items-end justify-center">
      <div
        ref={childRef}
        className="bg-white"
        style={{ width: "80%", height: "90vh" }}
      >
        <div className="relative text-center text-black h-54 overflow-hidden flex items-center flex-col ">
          <div className="absolute top-0 left-0 right-0 z-10 chapter-title">
            <h5 className="text-lg font-semibold tracking-widest">CHAPTER ONE</h5>
          </div>
          <div className="absolute top-12 left-0 right-0 z-10 chapter-heading">
            <h1 className="text-5xl mt-20 tracking-tight">3 is the MAGIC NUMBER</h1>
          </div>
        </div>
        
        <div className="flex items-top justify-center gap-3 ml-16 mr-16">
          <div className="image-container">
            <img src="https://365ayearof.cartier.com/images/chapter-1/article-1/compressedImages/Article-Header-opt-1920.WEBP" alt="" />
            <h3 className="">Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="image-container" id="fast">
            <img src="https://365ayearof.cartier.com/images/chapter-1/article-2/compressedImages/Article-Header-opt-1920.WEBP" alt="" />
            <h3 className="">Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="image-container">
            <img src="https://365ayearof.cartier.com/images/chapter-1/article-3/compressedImages/Article-Header-opt-3400.WEBP" alt="" />
            <h3 className="">Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="image-container">
            <img src="https://365ayearof.cartier.com/images/chapter-1/article-4/compressedImages/Article-Header-opt-1920.WEBP" alt="" />
            <h3 className="">Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="image-container" id="fast">
            <img src="https://365ayearof.cartier.com/images/chapter-1/article-5/compressedImages/Article-Header-opt-1920.WEBP" alt="" />
            <h3 className="">Lorem ipsum dolor sit amet.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
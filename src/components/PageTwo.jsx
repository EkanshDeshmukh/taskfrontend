import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PageTwo = () => {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    // Initially hide text elements
    gsap.set(".chapter-title", { y: 120, opacity: 0 });
    gsap.set(".chapter-heading", { y: 140, opacity: 0, scale: 0.9 });

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

    // GSAP for top text and heading with smoother effect
    gsap.fromTo(
      ".chapter-title",
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.3,
        duration: 1.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: parentRef.current,
          scroller: "body",
          start: "40% center",
          toggleActions: "play none none reverse",
        },
      }
    );
    
    gsap.fromTo(
      ".chapter-heading",
      { y: 140, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        delay: 0.1,
        duration: 1.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: parentRef.current,
          scroller: "body",
          start: "40% center",
          toggleActions: "play none none reverse",
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
          y: el.id === "fast" ? 200 : 80, // Fast images move much more downward
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
            <h5 className="text-lg font-semibold tracking-widest">CHAPTER TWO</h5>
          </div>
          <div className="absolute top-12 left-0 right-0 z-10 chapter-heading">
            <h1 className="text-5xl mt-20 tracking-tight">DISCOVER THE STORY</h1>
          </div>
        </div>
        
        <div className="flex items-top justify-center ml-52 mr-16 h-[70vh]">
          <div className="image-container">
            <img style={{ objectFit: "cover", height: "60%", width: "90%" }} src="https://365ayearof.cartier.com/images/chapter-2/article-1/compressedImages/Article-Header-opt-1920.WEBP" alt="" />
            <h3 className="">Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="image-container" id="fast">
            <img style={{ objectFit: "cover", height: "60%", width: "90%" }} src="https://365ayearof.cartier.com/images/chapter-2/article-2/compressedImages/Article-Header-opt-1920.WEBP" alt="" />
            <h3 className="">Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="image-container">
            <img style={{ objectFit: "cover", height: "90%", width: "80%" }} src="https://365ayearof.cartier.com/images/chapter-2/article-3/compressedImages/Article-Header-opt-3400.WEBP" alt="" />
            <h3 className="">Lorem ipsum dolor sit amet.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
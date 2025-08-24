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
        markers: true,
        scrub: true,
      }
    });

    tl
    .to(childRef.current, {
      width: "100%",
      height: "100vh",
      duration: 1,
      // ease: "power2.out",
  
    },"a")
    
     .to(childRef.current, {
      width: "80%",
      height: "70vh",
      duration: 1,
      // ease: "power2.out",
     });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={parentRef} className="w-full h-[150vh] flex items-end justify-center">
        {/* <div></div> */}
      <div
        ref={childRef}
        className="bg-blue-300"
        style={{ width: "80%", height: "70vh" }}
      ></div>
    </div>
  );
};

export default PageOne;
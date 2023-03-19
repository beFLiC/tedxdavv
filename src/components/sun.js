import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


function Sun() {
  const sunRef = useRef(null);

  
  useEffect(() => {
    gsap.fromTo(sunRef.current, {
      x:"-10%"  ,
      y: "-170%",
      scale:0.5,
      opacity:0
    }, {
      delay:0.7,
      duration: 1,
      y: "-40%",
      ease: "power1.inOut",
      opacity:1
    });
  }, []);

  return (
    <div className="sun">
      <img ref={sunRef} src={process.env.PUBLIC_URL + '/sun.png'} className="sun"/>
    </div>
  );
}

export default Sun;

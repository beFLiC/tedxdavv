import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


function Moon() {
  const moonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(moonRef.current, {
      x:"-35%"  ,
      y: "-300%",
      scale:0.7,
      opacity:0
    }, {
      delay:0.5,
      duration: 1,
      y: "-137%",
      ease: "power1.inOut",
      opacity:1
    });
  }, []);

  return (
    <div className="moon">
      <img ref={moonRef} src={process.env.PUBLIC_URL + '/moon.png'} className="moon"/>
    </div>
  );
}

export default Moon;

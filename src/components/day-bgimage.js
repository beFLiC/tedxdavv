import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Background = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { xPercent: -100, opacity: 0 },
      { xPercent: -20, opacity: 1, duration: 1, ease: 'power1.inOut' }
    );
    gsap.fromTo(
      rightRef.current,
      { xPercent: 100, opacity: 0 },
      { xPercent: -26, opacity: 1, duration: 1, ease: 'power1.inOut' }
    );
  }, []);

  return (
    <div className="background">
      <img
        ref={leftRef}
        src={process.env.PUBLIC_URL + '/night.png'}
        alt="Left Background"
        className="background-image left"
      />
      <img
        ref={rightRef}
        src={process.env.PUBLIC_URL + '/day.png'}
        alt="Right Background"
        className="background-image right"
      />
    </div>
  );
};

export default Background;

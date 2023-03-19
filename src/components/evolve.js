import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Evolve() {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(imgRef.current, {
      x:"-27%"  ,
      y: "0%",
      scale:0.55,
      opacity:0
    }, {
        delay:3,
      duration: 1,
      y: "-382%",
      ease: "power4.out",
      opacity:1
    });
  }, []);

  return (
    <div className="evolve">
        <img src={process.env.PUBLIC_URL + '/evolve.png'} ref={imgRef} />
    </div>
  );
}

export default Evolve;

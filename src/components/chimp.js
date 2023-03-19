import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Chimp() {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(imgRef.current, {
      x:"-48%"  ,
      y: "0%",
      scale:0.63,
      opacity:0
    }, {
        delay:1.5,
        duration: 1,
        y: "-195%",
        ease: "power4.out",
        opacity:1
    });
  }, []);

  return (
    <div className="chimp">
        <img src={process.env.PUBLIC_URL + '/rainbow_chimp.png'} ref={imgRef} />
    </div>
  );
}

export default Chimp;

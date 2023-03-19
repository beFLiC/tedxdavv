import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Laserman() {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(imgRef.current, {
      x:"-34%"  ,
      y: "0%",
      scale:0.6,
      opacity:0
    }, {
      delay:2,
      duration: 1,
      y: "-305%",
      ease: "power4.out",
      opacity:1
    });
  }, []);

  return (
    <div className="laserman">
        <img src={process.env.PUBLIC_URL + '/laserman.png'} ref={imgRef} />
    </div>
  );
}

export default Laserman;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Ted() {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(imgRef.current, {
      x:"10%"  ,
      y: "-530%",
      scale:0.6,
      opacity:0
    }, {
      delay:3,
      duration: 1,
      x:"-5%",
      ease: "power4.out",
      opacity:1
    });
  }, []);

  return (
    <div className="laserman">
        <img src={process.env.PUBLIC_URL + '/ted.png'} ref={imgRef} />
    </div>
  );
}

export default Ted;


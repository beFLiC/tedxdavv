import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap,Back } from "gsap";

function Home() {
  const side = Math.max(window.innerHeight, window.innerWidth)/6; //side of each square
  const [numW, setWindowWidth] = useState(parseInt(window.innerWidth/side) +1)
  const [numH, setWindowHeight] = useState(parseInt(window.innerHeight/side) +1)

  const home = useRef();
  const tl = useRef();

  // Animation
  useLayoutEffect(() => {
    tl.current && tl.current.progress(0).kill();
    const ctx = gsap.context(() => {
    tl.current = gsap.timeline()
      .from(".square", { opacity: "0", duration: 2,   yoyo:true})
      .to(".square", { rotation: "540", duration: 2,  ease: Back.easeInOut.config(2), yoyo:true})
    .from(".circle", { opacity: 0, duration: 1, stagger:0.2, ease: "easeInOut", yoyo:true}, "-=0.5")
      .from(".flic-text", { opacity:0, duration: 3, stagger:1, ease: "easeInOut", yoyo:true}, "-=5")
      .to(".flic-text", { opacity:0, duration: 1, stagger:0.1, ease: "easeInOut", yoyo:true}, "-=0.5")
      .to(".square", { scale: "15", duration: 2,  ease: Back.easeInOut.config(1), yoyo:true}, "-=1")
      .to(".square", { color:"#000", duration: 2})
    }, home);
    // cleanup
    return () => ctx.revert();
  }, []);

  //  handle window resize
  const setWindowDimensions = () => {
    const side = Math.max(window.innerHeight, window.innerWidth)/6; //side of each square
    setWindowWidth(parseInt(window.innerWidth/side) +1)
    setWindowHeight(parseInt(window.innerHeight/side) +1)
  }
  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions)
    }
  }, [])

  return (


    <div ref={home}>
      {/* <div className="z-100 tedxdavv fixed  bg-transparent Home w-screen h-screen flex justify-center items-center text-[15vw] hover:cursor-default">
        <span className="bg-transparent"> 
          <span className="bg-transparent font-inter-bold text-red-950">TEDx </span> 
          <span className="bg-transparent font-inter-lighter text-white">DAVV</span>
        </span>
      </div> */}

      <div className="background overflow-auto z-0">
        <table style={{width: numW*side, height:numH*side}}>
          <tbody>
          {
            [...Array(numH).keys()].map((e, i) => {
              return(
                <tr key={i + i*100} >
                  {
                    [...Array(numW).keys()].map((ej, j) => {
                      const isSquare = (i===parseInt(numH/2) && j===parseInt(numW/2));
                      return(
                        <td  className="p-5 " key={i + j + 200}>
                          <div className={"z-10 h-full w-full " + (isSquare ? "square rounded-lg bg-red-950 ":"border-white border-4 rounded-full circle")}></div>
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
          </tbody>
        </table>
      </div>

        <div className="bg-transparent fixed p-4 bottom-[10px] right-[10px] text-right text-white text-3xl font-inter-bold">
          {/* <p className="flic-text bg-transparent">BE <span className='bg-transparent text-red-950'>THE RED</span></p>
          <p className="flic-text bg-transparent">BE <span className='bg-transparent text-red-950'>UNIQUE</span></p>
          <p className="flic-text bg-transparent">BE <span className='bg-transparent text-red-950'>BOLD</span></p>
          <p className="flic-text bg-transparent">BE <span className='bg-transparent text-red-950'>INDEPENDENT</span></p> */}
          <p className="flic-text bg-transparent">BE <span className='bg-transparent text-red-950'>FLiC</span></p>
        </div>

    </div>
  );
  }
  
  export default Home;
  
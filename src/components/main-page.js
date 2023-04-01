import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const M = () => {


  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.set('.scrollDist', {width:'100%', height:'200%'})

    gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:true}})
    .fromTo(".E",{opacity:0},{opacity:1})
    .fromTo(".V",{opacity:0},{opacity:1})
    .fromTo(".O",{opacity:0},{opacity:1})
    .fromTo(".L",{opacity:0},{opacity:1})
    .fromTo(".V2",{opacity:0},{opacity:1})
    .fromTo(".E2",{opacity:0},{opacity:1})

    // gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:truey}})
    //     .to('.ted',{
    //         x:'-90%',
    //         y:'-70%',
    //         scale:0.5,
    //         ease:'none'
    //     })
    //     .to('.davv',{
    //         x:"-75%",
    //         y:"-62%",
    //         scale:0.5,
    //         ease:"none",
    //     })

    gsap.to('.ted', {
      x:'-93%',  
      y: '0%',
      ease: 'none',
      scale:0.5,
      scrollTrigger: {
        scrub: true,
        trigger: ".scrollDist",
        start: 'top top',
        end: 'bottom bottom',
        markers:true
      },
    });

    gsap.to('.davv', {
        x:'-78%',  
        y: '0%',
        ease: 'none',
        scale:0.5,
        scrollTrigger: {
          scrub: true,
          trigger: ".scrollDist",
          start: 'top top',
          end: 'bottom bottom',
          markers:true
        },
      });

      gsap.to('.plane', {
        x:'450%',
        ease: 'none',
        // scale:0.5,
        scrollTrigger: {
          scrub: true,
          trigger: ".scrollDist",
          start: 'top top',
          end: 'bottom bottom',
          markers:true
        },
      });

      gsap.to('.alumni', {
        x:'-400%',
        ease: 'none',
        // scale:0.5,
        scrollTrigger: {
          scrub: true,
          trigger: ".scrollDist",
          start: 'top top',
          end: 'bottom bottom',
          markers:true
        },
      });

      gsap.to('.a-block', {
        x:'-100%',
        ease: 'none',
        // scale:0.5,
        scrollTrigger: {
          scrub: true,
          trigger: ".scrollDist",
          start: 'top top',
          end: 'bottom bottom',
          markers:true
        },
      });

      gsap.to('.admin-building', {
        x:'-140%',
        ease: 'none',
        // scale:0.5,
        scrollTrigger: {
          scrub: true,
          trigger: ".scrollDist",
          start: 'top top',
          end: 'bottom bottom',
          markers:true
        },
      });

      gsap.to('.com-building', {
        y:'-300%',
        ease: 'none',
        // scale:0.5,
        scrollTrigger: {
          scrub: true,
          trigger: ".scrollDist",
          start: 'top top',
          end: 'bottom bottom',
          markers:true
        },
      });

      gsap.to('.rnth', {
        x:'100%',
        ease: 'none',
        // scale:0.5,
        scrollTrigger: {
          scrub: true,
          trigger: ".scrollDist",
          start: 'top top',
          end: 'bottom bottom',
          markers:true
        },
      });
      gsap.to('.rocket', {
        y:'-175%',
        ease: 'none',
        // scale:0.5,
        scrollTrigger: {
          scrub: true,
          trigger: ".scrollDist",
          start: 'top top',
          end: 'bottom bottom',
          markers:true
        },
      });
      gsap.to('.ballon', {
        y:'-250%',
        ease: 'none',
        // scale:0.5,
        scrollTrigger: {
          scrub: true,
          trigger: ".scrollDist",
          start: 'top top',
          end: 'bottom bottom',
          markers:true
        },
      });

  }, []);

  return (
    <>
      <div style={{ height: '1000px' }}>
        {/* Dummy content to trigger scrollbar */}
      </div>

      <img
        src="https://i.imgur.com/15kLXCo.jpg"
        alt="bgimage"
        className='bgimage'

        />
      <img
        src="https://lh5.googleusercontent.com/tS0G5hVqn3ST5mKGBdfMEfScwsKv4wldf1NuRAceIfsP-aScMsbYOGuQ2MElIxakbew=w2400"
        alt="ted"
        className="ted"
      />
      <img
        src="https://lh6.googleusercontent.com/KX7M4_SJ4GHzmK1qZjBWl4rn1Awh1FdORihPW6oavibWPfn598nkhoVHRzlYsnXKpLc=w2400"
        alt="davv"
        className="davv"
      />
      <img
        src="https://i.imgur.com/ZAg3b4l.png"
        alt="plane"
        className="plane"
      />

      <img 
        src="https://assets.codepen.io/721952/cloud1.png"
        alt="cloud1"
        className='cloud1'
      />

      <img 
        src="https://i.imgur.com/B2I3OXn.png" 
        alt="alumni" 
        className="alumni"
      />

      <img 
        src="https://i.imgur.com/EFmjd5I.png" 
        alt="a-block" 
        className="a-block"  
      />

      <img 
        src="https://i.imgur.com/2k6zadm.png" 
        alt="admin-building" 
        className="admin-building"
      />

      <img 
        src="https://i.imgur.com/kkSsQ9a.png" 
        alt="com-building" 
        className= "com-building"
      />
      <img 
        src="https://i.imgur.com/1Y26fBs.png" 
        alt="Rnth" 
        className="rnth"
      />
      <img
        src="https://assets.codepen.io/721952/cloud2.png"
        alt="cloud2"
        className='cloud2'
      />
      <img
        src="https://assets.codepen.io/721952/cloud3.png"
        alt="cloud3"
        className='cloud3'
      />
      <img
        src="https://i.imgur.com/57IN6rJ.png" 
        alt="rocket" 
        className="rocket"
      />
      <img
        src="https://i.imgur.com/kKKVr8M.png" 
        alt="Balloon" 
        className="ballon"
      />

        <h1 class="E" >E</h1>
        <text class="V" >V</text>
        <text class="O" >O</text>    
        <text class="L" >L</text> 
        <text class="V2">V</text>
        <text class="E2">E</text> 

    </>



  );
};

export default M;

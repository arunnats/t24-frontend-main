"use client";
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import StarfieldEffect from './Stars';
// import JumpToHyperspace from '../HyperSpace/Hyperspace';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false); // State to manage visibility

  useEffect(() => {
    const tl = gsap.timeline({
      ease: 'power2.inOut',
      onStart: () => setIsLoaded(true), // Set visibility to true when animation starts
    });

    tl.fromTo('.hero-left', { scale: 0.02, y: '50%', opacity: 0 }, { scale: 1, y: '-5%', opacity: 1, duration: 1 }, 0)
      .fromTo('.hero-right', { scale: 0.02, y: '50%', opacity: 0 }, { scale: 1, y: '-5%', opacity: 1, duration: 1 }, 0)
      .fromTo('.hero-center', { scale: 0.02, y: '50%', opacity: 0 }, { scale: 1, y: '0%', opacity: 1, duration: 1 }, 0)

      .fromTo('.hero-left', { y: '50%' }, { y: '-2%', duration: 1 }, 0)
      .fromTo('.hero-right', { y: '50%' }, { y: '-3%', duration: 1 }, 0)
      .fromTo('.hero-center', { y: '50%' }, { y: '0', duration: 1 }, 0)

      .fromTo('.hero-left', { x: 0 }, { x: '-90%', duration: 1, delay: 0.4 }, 0)
      .fromTo('.hero-right', { x: 0 }, { x: '90%', duration: 1, delay: 0.4 }, 0)
      .fromTo('.hero-center', { x: 0 }, { x: '0%', duration: 1, delay: 0.4 }, 0)

      .fromTo('.hero-right', { y: '-3%' }, { y: '2%', duration: 2.05, delay: 2.4, ease: 'power1.inOut', repeat: -1, yoyo: true }, 0)
      .fromTo('.hero-center', { y: '0%' }, { y: '2%', duration: 2.05, delay: 2.4, ease: 'power1.inOut', repeat: 2, yoyo: true }, 0)
      .fromTo('.hero-left', { y: '-2%' }, { y: '3%', duration: 2, delay: 2.4, ease: 'power1.inOut', repeat: -1, yoyo: true }, 0);
  }, []);

  return (
    <div className={`w-screen min-h-[130vh] overflow-x-clip flex items-center justify-center relative bg-black ${isLoaded ? '' : 'opacity-0'}`}>
      {/* <JumpToHyperspace /> */}
      <div className='absolute top-0'>
      <StarfieldEffect />


      </div>
      <div className="absolute lg:top-[5%] top-[20%] w-full origin-center h-max z-10 flex items-center justify-center">
        <img src="/Hero/Line.svg" alt="" className='w-full lg:w-[80%] md:w-[90%] sm:w-[95%]' />
      </div>
      <div className="absolute lg:top-[4%] top-[19%] w-full origin-center h-max z-10 flex items-center justify-center">
        <img src="/Hero/tathva_2026.webp" alt="" className='w-full lg:w-[80%] md:w-[90%] sm:w-[95%]' />
      </div>

      <img
        src="/Hero/left_console.webp"
        alt="Left image"
        className={`hero-left absolute origin-center lg:top-[30%] top-[40%] lg:w-[25vw] w-[40vw] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />

      <div className={`hero-right absolute origin-center lg:top-[30%] top-[40%] lg:w-[25vw] w-[40vw] h-[86vw] lg:h-[54vw] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-full h-full z-20 ">
          <img src="/Hero/right_console.webp" alt="Center image" className='h-full absolute origin-center' />

          <div className="absolute top-[45%] left-[5%] w-full flex items-center justify-center">
            <div className="relative w-[32%]">
              <video width="600" autoPlay loop muted className='mix-blend-multiply w-full'>
                <source src="/Hero/right.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className={`hero-center absolute origin-center lg:top-[20%] top-[35%] lg:w-[30vw] w-[50vw] lg:h-[64vw] h-[107vw] border-red-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-full h-full z-20">
          <img src="/Hero/center.webp" alt="Center image" className='h-full absolute origin-center' />

          <div className="absolute top-[6.5%] w-full flex items-center justify-center">
            <div className="relative w-[63%]">
              <video width="600" autoPlay loop muted className='mix-blend-multiply w-full'>
                <source src="/Hero/Flappy.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

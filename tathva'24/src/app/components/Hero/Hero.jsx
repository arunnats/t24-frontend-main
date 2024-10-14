import React, { useEffect } from 'react'
import gsap from 'gsap'

const Hero = () => {

    useEffect(() => {
        const tl = gsap.timeline({ ease: 'power2.inOut' });

          tl.fromTo('.hero-left',   { scale:0.2 ,y: '50%'}, { scale:1, y: '-5%', duration: 1 }, 0)
            .fromTo('.hero-right',  { scale:0.2 ,y: '50%'}, { scale:1, y: '-5%', duration: 1 }, 0)
            .fromTo('.hero-center', { scale:0.2 ,y: '50%'}, { scale:1, y: '0%',  duration: 1 }, 0)

            .fromTo('.hero-left',   { y: '50%'}, { y: '-2%', duration: 1  }, 0)
            .fromTo('.hero-right',  { y: '50%'}, { y: '-3%', duration: 1  }, 0)
            .fromTo('.hero-center', { y: '50%'}, { y: '0',  duration: 1  }, 0)

            .fromTo('.hero-left',   { x: 0    }, { x: '-90%',duration: 1, delay: 0.4 }, 0)
            .fromTo('.hero-right',  { x: 0    }, { x: '90%', duration: 1, delay: 0.4 }, 0)
            .fromTo('.hero-center', { x: 0    }, { x: '0%',  duration: 1, delay: 0.4 }, 0)

            .fromTo('.hero-right', { y: '-3%'}, { y: '2%',  duration: 2.05, delay:2.4 ,ease: 'power1.inOut', repeat: -1, yoyo: true },0)
            .fromTo('.hero-center', { y: '0%'}, { y: '2%',  duration: 2.05, delay:2.4 ,ease: 'power1.inOut', repeat: 2, yoyo: true },0)
            .fromTo('.hero-left', { y: '-2%'}, { y: '3%',  duration: 2, delay:2.4 ,ease: 'power1.inOut', repeat: -1, yoyo: true },0)
    }, []);

    return (
        <div className='w-screen min-h-screen overflow-x-hidden flex items-center justify-center relative'>
        <img 
            src="/Hero/left.webp" 
            alt="Left image" 
            className='hero-left absolute origin-center top-[30%] xl:w-[25vw] lg:w-[30vw] md:w-[40vw] sm:w-[50vw] w-[60vw]' 
        />
        <img 
            src="/Hero/right.webp" 
            alt="Right image" 
            className='hero-right absolute origin-center transform scaleX(-1) top-[30%] xl:w-[25vw] lg:w-[30vw] md:w-[40vw] sm:w-[50vw] w-[60vw]' 
        />
        <img 
            src="/Hero/center.webp" 
            alt="Center image" 
            className='hero-center absolute origin-center top-[20%] xl:w-[30vw] lg:w-[35vw] md:w-[45vw] sm:w-[55vw] w-[65vw]' 
        />
        </div>

    );
};

export default Hero;

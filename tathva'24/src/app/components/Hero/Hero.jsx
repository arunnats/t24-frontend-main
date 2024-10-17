"use client";
import React, { useEffect } from 'react'
import gsap from 'gsap'
import JumpToHyperspace from '../HyperSpace/Hyperspace';

const Hero = () => {

    useEffect(() => {
        const tl = gsap.timeline({ ease: 'power2.inOut' });

        tl.fromTo('.hero-left', { scale: 0.02, y: '50%' }, { scale: 1, y: '-5%', duration: 1 }, 0)
            .fromTo('.hero-right', { scale: 0.02, y: '50%' }, { scale: 1, y: '-5%', duration: 1 }, 0)
            .fromTo('.hero-center', { scale: 0.02, y: '50%' }, { scale: 1, y: '0%', duration: 1 }, 0)

            .fromTo('.hero-left', { y: '50%' }, { y: '-2%', duration: 1 }, 0)
            .fromTo('.hero-right', { y: '50%' }, { y: '-3%', duration: 1 }, 0)
            .fromTo('.hero-center', { y: '50%' }, { y: '0', duration: 1 }, 0)

            .fromTo('.hero-left', { x: 0 }, { x: '-90%', duration: 1, delay: 0.4 }, 0)
            .fromTo('.hero-right', { x: 0 }, { x: '90%', duration: 1, delay: 0.4 }, 0)
            .fromTo('.hero-center', { x: 0 }, { x: '0%', duration: 1, delay: 0.4 }, 0)

            .fromTo('.hero-right', { y: '-3%' }, { y: '2%', duration: 2.05, delay: 2.4, ease: 'power1.inOut', repeat: -1, yoyo: true }, 0)
            .fromTo('.hero-center', { y: '0%' }, { y: '2%', duration: 2.05, delay: 2.4, ease: 'power1.inOut', repeat: 2, yoyo: true }, 0)
            .fromTo('.hero-left', { y: '-2%' }, { y: '3%', duration: 2, delay: 2.4, ease: 'power1.inOut', repeat: -1, yoyo: true }, 0)
    }, []);

    return (
        <div className='w-screen min-h-screen overflow-x-hidden flex items-center justify-center relative bg-black overflow-clip'>
            <JumpToHyperspace />
            
             

            {/* <img
                src="/Hero/center.webp"
                alt="Center image"
                className='hero-center absolute origin-centerlg: top-[20%] top-[40%] xl: w-[30vw] w-[30vw] lg:w-[35vw] md:w-[35vw] sm:w-[35vw] w-[65vw]'
            /> */}
        </div>


    );
};

export default Hero;

import React, { useEffect } from 'react'
import gsap from 'gsap'
import JumpToHyperspace from '../HyperSpace/Hyperspace';
import Flappy from './Flappy';

const Hero = () => {

    useEffect(() => {
        const tl = gsap.timeline({ ease: 'power2.inOut' });

        tl.fromTo('.hero-left', { scale: 0.2, y: '50%' }, { scale: 1, y: '-5%', duration: 1 }, 0)
            .fromTo('.hero-right', { scale: 0.2, y: '50%' }, { scale: 1, y: '-5%', duration: 1 }, 0)
            .fromTo('.hero-center', { scale: 0.2, y: '50%' }, { scale: 1, y: '0%', duration: 1 }, 0)

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
        <div className='w-screen min-h-screen overflow-x-hidden flex items-center justify-center relative'>
            <JumpToHyperspace />
            <div className="absolute top-[5%] w-full origin-center h-max z-10 flex items-center justify-center">
                <img src="/Hero/Line.svg" alt="" className='w-full lg:w-[80%] md:w-[90%] sm:w-[95%]' />
            </div>
            <div className="absolute top-[4%] w-full origin-center h-max z-10 flex items-center justify-center">
                <img src="/Hero/tathva_2026.webp" alt="" className='w-full lg:w-[80%] md:w-[90%] sm:w-[95%]' />
            </div>

            {/* <div className=" scale-50 hero-center absolute origin-center top-[30%] xl:w-[20vw] lg:w-[35vw] md:w-[35vw] sm:w-[35vw] w-[65vw] z-20 bg-sky-400 ">
                <img src="/Hero/moreblack.gif" alt="" className='w-full h-full mix-blend-multiply	'/>
            </div>  */}

            <img
                src="/Hero/left.webp"
                alt="Left image"
                className='hero-left absolute origin-center top-[30%] xl:w-[25vw] lg:w-[28vw] md:w-[30vw] sm:w-[25vw] w-[60vw]'
            />
            <img
                src="/Hero/right.webp"
                alt="Right image"
                className='hero-right absolute origin-center top-[30%] xl:w-[25vw] lg:w-[28vw] md:w-[30vw] sm:w-[25vw] w-[60vw]'
            />
            <div className='hero-center absolute origin-center top-[20%] h-auto xl:w-[30vw] lg:w-[35vw] md:w-[35vw] sm:w-[35vw] w-[65vw]'>
                <div className="relative w-full h-min z-20 ">
                    <img src="/Hero/center.webp"
                            alt="Center image"
                            className='hero-center absolute origin-center '
                        />

                    <div className="absolute top-[20%] w-full  flex items-center justify-center ">
                        <div className="relative  w-[64%] ">
                            <img src="/Hero/moreblack.gif" alt="" className=' mix-blend-multiply w-full '/>
                        </div>
                    </div>
                </div>
            </div>
             

            {/* <img
                src="/Hero/center.webp"
                alt="Center image"
                className='hero-center absolute origin-center top-[20%] xl:w-[30vw] lg:w-[35vw] md:w-[35vw] sm:w-[35vw] w-[65vw]'
            /> */}
        </div>


    );
};

export default Hero;

import React, { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import JumpToHyperspace from '../HyperSpace/Hyperspace';

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
            <JumpToHyperspace />
            <div className="absolute top-[5%] w-full origin-center h-max z-10 flex items-center justify-center">
                <Image 
                    src="/Hero/Line.svg" 
                    alt="Line Graphic" 
                    layout="responsive" 
                    width={1920} 
                    height={1080}
                    priority
                    className='w-full lg:w-[80%] md:w-[90%] sm:w-[95%]' 
                />
            </div>
            <div className="absolute top-[4%] w-full origin-center h-max z-10 flex items-center justify-center">
                <Image 
                    src="/Hero/tathva_2026.webp" 
                    alt="Tathva 2026" 
                    layout="responsive" 
                    width={1920} 
                    height={1080}
                    priority
                    className='w-full lg:w-[80%] md:w-[90%] sm:w-[95%]' 
                />
            </div>
            
            <Image 
                src="/Hero/left.webp" 
                alt="Left image" 
                layout="responsive" 
                width={500} 
                height={600}
                className='hero-left absolute origin-center top-[30%] xl:w-[25vw] lg:w-[28vw] md:w-[30vw] sm:w-[25vw] w-[60vw]' 
                priority
            />
            <Image 
                src="/Hero/right.webp" 
                alt="Right image" 
                layout="responsive" 
                width={500} 
                height={600}
                className='hero-right absolute origin-center top-[30%] xl:w-[25vw] lg:w-[28vw] md:w-[30vw] sm:w-[25vw] w-[60vw]' 
                priority
            />
            <Image 
                src="/Hero/center.webp" 
                alt="Center image" 
                layout="responsive" 
                width={600} 
                height={700}
                className='hero-center absolute origin-center top-[20%] xl:w-[30vw] lg:w-[35vw] md:w-[35vw] sm:w-[35vw] w-[65vw]' 
                priority
            />
        </div>
    );
};

export default Hero;

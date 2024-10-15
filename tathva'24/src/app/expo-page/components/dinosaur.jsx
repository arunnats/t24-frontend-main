"use client"

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Dinosaur = () => {
    const [animation, setAnimation] = useState(null);

    useEffect(() => {
        const tl = gsap.timeline({ paused: true, delay: 0.1 })
            .to(".dinosaur", { duration: 0.5, y: "-150%", ease: "expo.out" })
            .to(".dinosaur", { duration: 0.8, y: "0", ease: "elastic" })
            .to(".dinosaur", { duration: 5, x: "1000px" }, 1);
        
        setAnimation(tl);
    }, []);

    const handleClick = () => {
        if (animation) {
            animation.restart();
        }
    };

    return (
        <section onClick={handleClick} className="flex w-max  text-white font-semibold border-b border-white gap-[10px] cursor-pointer">
            <div className="w-fit flex items-end">Learn More</div>
            <img src="/dinosaur.svg" alt="image" height="25" width="25" className="dinosaur block" />
        </section>
    );
}

export default Dinosaur;

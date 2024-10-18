"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Draggable } from "gsap/Draggable";
import styles from "./marquee.module.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CSSRulePlugin, Draggable);

export default function Marqueework({ element1, element2, color }) {
  const marqueeRef = useRef(null);

  // How to use :

  // const element1 = "automative ";
  // const element2 = "summit ";
  // const color1 = "#b70202";
  // const color2 = "#0a0a00";

  // const Page = () => {
  // return (
  //   <div>
  //     <Marquee
  //       element1={element1}
  //       element2={element2}
  //       color1={color1}
  //       color2={color2}
  //     />
  //   </div>
  // );
  // };

  useEffect(() => {
    const marquee = marqueeRef.current;
    marquee.innerHTML +=
      marquee.innerHTML +
      marquee.innerHTML +
      marquee.innerHTML +
      marquee.innerHTML +
      marquee.innerHTML +
      marquee.innerHTML +
      marquee.innerHTML +
      marquee.innerHTML +
      marquee.innerHTML;
    const totalWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: -totalWidth,
      duration: 300, // Adjust the duration to control the speed (lower value makes it faster)
      ease: "linear", // Linear animation for smooth continuous scrolling
      repeat: -1, // Infinite loop
      delay: 0,
    });

    // Animate the scale and opacity on load
    gsap.fromTo(
      marquee,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out",
      }
    );
  }, [marqueeRef]);

  return (
    <div
      className={`relative overflow-hidden w-full flex h-min items-center justify-center m-0  md:pt-2 ${styles.marqueecont}`}
      style={{ backgroundColor: `${color}` }}
    >
      <div
        ref={marqueeRef}
        className={`${styles.marquee} whitespace-nowrap flex text-[1.5rem] md:text-[2rem] items-center justify-center`}
      >
        <span
          className={`text-white px-1 flex justify-center items-center ${styles.element1}`}
        >
          <div className={`bg-black pl-3 pr-14 ${styles.elem2div}`}>
            {element1}
          </div>
        </span>

        <span
          className={` m-1 text-black px-1 flex justify-center items-center ${styles.element2}`}
        >
          {element2}
        </span>
      </div>
    </div>
  );
}

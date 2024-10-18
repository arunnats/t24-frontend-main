"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Draggable } from "gsap/Draggable";
import styles from "./marquee.module.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CSSRulePlugin, Draggable);

export default function Marquee({ element1, element2, color1, color2 }) {
  const marqueeRef = useRef(null);
  const element2Ref = useRef(null); // Ref for element2

  useEffect(() => {
    const marquee = marqueeRef.current;
    marquee.innerHTML += marquee.innerHTML;
    marquee.innerHTML += marquee.innerHTML;
    marquee.innerHTML += marquee.innerHTML;
    marquee.innerHTML += marquee.innerHTML;

    const totalWidth = marquee.scrollWidth / 2;
    const isMediumOrLarger = window.matchMedia("(min-width: 768px)").matches;

    // Animate the marquee scrolling
    gsap.to(marquee, {
      x: -totalWidth,
      duration: 2200,
      repeat: -1,
      delay: 0,
    });

    // Animate the scale and opacity on load
    gsap.fromTo(
      marquee,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: isMediumOrLarger ? 0.8 : 1.2,
        duration: 1,
        delay: 0.1,
        ease: "power2.out",
        y: isMediumOrLarger ? -65 : 0,
      }
    );

    // Apply the text shadow and stroke only to element2
    if (element2Ref.current) {
      element2Ref.current.style.textShadow = `-2px -2px 0 ${color1}, 2px -2px 0 ${color1}, -2px 2px 0 ${color1}, 2px 2px 0 ${color1}`;
      element2Ref.current.style.webkitTextStroke = `2px ${color1}`;
    }
  }, [marqueeRef, element2Ref, color1]);

  return (
    <div
      className={`relative overflow-hidden flex h-min items-center justify-center m-0 ${styles.marqueecont}`}
    >
      <div
        ref={marqueeRef}
        className={`${styles.marquee} whitespace-nowrap flex text-[4rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]   `}
      >
        <span style={{ color: color1 }} className={`mx-4 ${styles.element1}`}>
          {element1}
        </span>

        <span
          className={` mx-4  ${styles.element2}`}
          style={{
            color: "black",
            textShadow: `-2px -2px 0 ${color1}, 2px -2px 0 ${color1}, -2px 2px 0 ${color1}, 2px 2px 0 ${color1}`,
            WebkitTextStroke: `2px ${color1}`,
          }}

          className={`mx-4 ${styles.element2}`}
        >
          {element2}
        </span>
      </div>
    </div>
  );
}

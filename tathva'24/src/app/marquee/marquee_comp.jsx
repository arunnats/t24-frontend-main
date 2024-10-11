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

  useEffect(() => {
    const marquee = marqueeRef.current;
    marquee.innerHTML += marquee.innerHTML;
    const totalWidth = marquee.scrollWidth / 2;
    gsap.to(marquee, {
      x: -totalWidth,
      duration: 50,
      ease: "none",
      repeat: -1,
    });
  }, [marqueeRef]);

  return (
    <div className={`relative overflow-hidden ${styles.marqueecont}`}>
      <div
        ref={marqueeRef}
        className={`${styles.marquee} whitespace-nowrap flex`}
      >
        <span
          style={{ color: color1 }}
          className={`-mt-8 mr-8 ${styles.element1}`}
        >
          {element1}
        </span>
        <span
          style={{
            color: color2,
            textShadow: `-2px -2px 0 ${color1}, 2px -2px 0 ${color1}, -2px 2px 0 ${color1}, 2px 2px 0 ${color1}`,
          }}
          className={`-mt-8 mr-8 ${styles.element2}`}
        >
          {element2}
        </span>
      </div>
    </div>
  );
}

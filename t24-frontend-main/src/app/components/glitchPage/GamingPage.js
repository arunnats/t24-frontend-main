"use client";
import React, { useEffect, useState } from "react";
import styles from "./gaming.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GamingPage() {
  const [showBlueBg, setShowBlueBg] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Initial animation for the blue background 
    if (showBlueBg) {
      gsap.to(`.${styles.bluebg}`, {
        duration: 0.5,
        scale: 0,
        delay:0.5,
        rotateY: 180,
        ease: "power2.in",
        x: 200,
        y: 50,
        onComplete: () => setShowBlueBg(false),
        scrollTrigger: {
          trigger: `.${styles.main}`, // The trigger element
          start: "top 50%", // Start animation when the element is 80% into view
          toggleActions: "play none none none", // Only play once
        },
      });
    }
  
    // Other animations for elements triggered by scroll
    gsap.fromTo(
      `.${styles.buttonplay}`,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: `.${styles.buttonplay}`,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  
    gsap.fromTo(
      `.${styles.middleimgg}`,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${styles.middleimgg}`,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  
    // Animation for the background image when in view
    gsap.fromTo(
      `.${styles.gamingbg}`,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${styles.gamingbg}`,
          start: "top 80%",
          toggleActions: "play none none none",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      `.${styles.gekko}`,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${styles.gamingbg}`,
          start: "top 80%",
          toggleActions: "play none none none",
          // markers: true,
        },
      }
    );
  }, [showBlueBg]);
  

  return (
    <>
      <div className={`flex relative overflow-hidden ${styles.main}`}>
        {/* Blue background with animation */}
        {showBlueBg && (
          <div
            className={`flex flex-col w-full h-screen bg-black absolute ${styles.bluebg}`}
          >
            <div className="flex flex-col items-center gap-10">
              <div className={`text-white text-8xl ${styles.textbg} mb-2`}>
                Glitch
              </div>
            </div>
            <Image
              src="/image 7.svg"
              alt="Gaming image"
              width={1100}
              height={500}
              className={`flex absolute top-(-2)left-50 `}
            />
          </div>
        )}
        {/* <div className={`flex flex-col bg-white w-full h-screen absolute z-50 ${styles.whitebg}`}></div> */}
        <div className={`flex bg-black w-full h-screen ${styles.desktop}`}>
          {/* Left side */}
          <div
            className={`flex flex-col w-1/3 justify-evenly items-center h-screen ${styles.left}`}
          >
            <div className="flex flex-col items-center gap-5">
              <div className={`text-white text-8xl ${styles.text} mb-2`}>
                Glitch
              </div>
            </div>
            <div
              className={`text-white text-1xl text-start ${styles.text_description} px-20 mb-10`}
            >
              Gekko the Angeleno leads a tight-knit crew of calamitous
              creatures. His buddies bound forward, scattering enemies out of
              the way, with Gekko chasing them down to regroup and go again.
            </div>
            <div className="flex justify-center w-full">
              <div className="flex flex-col justify-center align-center h-12">
                <button
                  className={`flex bg-white text-white text-3xl text-center font-IBM Plex Sans px-5 py-3 ${styles.buttonplay}`}
                >
                  PLAY
                </button>
                <button
                  className={`flex bg-white text-1xl text-white text-center font-IBM Plex Sans px-5 h-2 ${styles.buttoncomp}`}
                >
                  COMPETITIVE
                </button>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-row w-2/3 h-screen relative">
            <div>
              <Image
                src="/GEKKO BG.svg"
                alt="Gaming image"
                width={550}
                height={0}
                className={`flex absolute left-0 ${styles.gekko}`}
              />
            </div>
            <div>
              <Image
                src="/gamingbg.svg"
                alt="Gaming image"
                width={385}
                height={0}
                className={`flex absolute right-0 ${styles.gamingbg}`}
              />
            </div>
            <div>
              <Image
                src="/HERO IMG.svg"
                alt="Gaming image"
                width={285}
                height={0}
                className={`flex absolute ${styles.middleimgg}`}
              />
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div
          className={`flex flex-col bg-black justify-evenly items-center w-full min-h-screen py-5 ${styles.mobile}`}
        >
          <div className="flex flex-col items-center gap-5">
            <div className={`text-white text-8xl ${styles.text} mb-2`}>
              Glitch
            </div>
          </div>
          <div>
            <Image
              src="/mobile.svg"
              alt="Gaming image"
              width={285}
              height={0}
              className={`flex py-10 ${styles.mobileimgg}`}
            />
          </div>
          <div
            className={`text-white text-1xl text-start w-1/2 ${styles.mobiletext} mb-10`}
          >
            Gekko the Angeleno leads a tight-knit crew of calamitous creatures.
            His buddies bound forward, scattering enemies out of the way, with
            Gekko chasing them down to regroup and go again.
          </div>
          <button
            className={`flex bg-[#ed404f] text-white text-2xl text-center font-IBM Plex Sans py-1 ${styles.mobilebutton}`}
          >
            PLAY
          </button>
        </div>
      </div>
    </>
  );
}

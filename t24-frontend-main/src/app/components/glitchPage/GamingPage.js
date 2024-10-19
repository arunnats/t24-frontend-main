"use client";
import React, { useEffect, useState } from "react";
import styles from "./gaming.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function GamingPage() {
  const [showBlueBg, setShowBlueBg] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial animation for the blue background
    if (showBlueBg) {
      gsap.to(`.${styles.bluebg}`, {
        duration: 0.5,
        scale: 0,
        delay: 0.5,
        rotateY: 180,
        ease: "power2.in",
        x: 200,
        y: 50,
        onComplete: () => setShowBlueBg(false),
        scrollTrigger: {
          trigger: `.${styles.main}`, // The trigger element
          start: "top 50%", // Start animation when the element is 50% into view
          toggleActions: "play none none none", // Only play once
        },
      });
    }

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
              <div
                className={`text-white text-3xl font-valorant ${styles.textbg} mb-2`}
              >
                GLITCH
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
            className={`flex flex-col justify-evenly items-center h-screen ${styles.left}`}
          >
            <div
              className={`text-white text-8xl pl-[55px]   mt-[40px] ${styles.text}`}
            >
              GLiTCH
            </div>

            <div
              className={`text-white text-1xl -mt-[130px] ${styles.text_description} pl-[55px] `}
            >
              Grab your controllers and get your headphones on! Add flair to
              your player and engage with the enemy on the digital field! Let
              the screen Glitch with your impeccable gaming skills, here at
              Tathva '24.
            </div>
            <div className="flex relative w-full">
              <Link
                href="./glitch-inner"
                className="flex flex-col justify-center align-center absolute bottom-12  right-36 "
              >
                <button
                  className={`flex bg-white text-white text-[15px] text-center font-IBM Plex Sans pt-1  ${styles.buttonplay}`}
                >
                  PLAY
                </button>
                <button
                  className={`flex bg-white text-[15px] text-white text-center font-IBM Plex pt-1  px-2 ${styles.buttoncomp}`}
                >
                  COMPETITIVE
                </button>
              </Link>
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
            Grab your controllers and get your headphones on! Add flair to your
            player and engage with the enemy on the digital field! Let the
            screen Glitch with your impeccable gaming skills, here at Tathva
            '24.
          </div>
          <Link
            href="./glitch-inner"
            className={`flex bg-[#ed404f] text-white text-2xl text-center font-IBM Plex Sans py-1 ${styles.mobilebutton}`}
          >
            PLAY
          </Link>
        </div>
      </div>
    </>
  );
}

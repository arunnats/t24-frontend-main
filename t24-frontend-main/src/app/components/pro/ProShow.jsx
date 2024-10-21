"use client";
import styles from "./Carousel.module.css";
import React, { useEffect, useState, useRef } from "react";
import CarouselGrid from "./gridmd";
import CarouselGridxsm from "./gridsmaller";
import CarouselGridsm from "./gridsm";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProShow = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMedScreen, setIsMedScreen] = useState(false);
  const proShowRef = useRef(null); // Ref to target the component for animation
  const proShowRef2 = useRef(null); // Ref to target the component for animation

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 880);
    setIsMedScreen(window.innerWidth < 1500);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const proShowElement = proShowRef.current;

    // GSAP ScrollTrigger for smooth appearance on scroll
    gsap.fromTo(
      proShowElement,
      { opacity: 0, scale: 0.8 }, // Initial state (hidden and smaller)
      {
        opacity: 1,
        scale: 1, // Final state (fully visible and normal size)
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: proShowElement,
          start: "top 40%", // When 70% of the component is visible
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      proShowElement,
      { opacity: 0, scale: 0.8 }, // Initial state (hidden and smaller)
      {
        opacity: 1,
        scale: 1, // Final state (fully visible and normal size)
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: proShowElement,
          start: "top 50%", // When 70% of the component is visible
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <Link
        ref={proShowRef}
        href={"./proshow"}
        className="absolute top-1/4 left-0 w-full text-center text-white text-8xl p-4 z-10 md:text-9xl flex flex-col "
      >
        <h1
          className={`font-[pricedown] ${styles.proshowtext} transform transition-transform duration-300 hover:translate-y-[-5px] `}
        >
          PRO-
        </h1>
        <h1
          className={`font-[pricedown] ${styles.proshowtext} transform transition-transform duration-300 hover:translate-y-[-5px] `}
        >
          Show
        </h1>
        <h2
          className={`${styles.artistname} text-8xl md:text-9xl transform transition-transform duration-300 hover:translate-y-[-5px] `}
        >
          Shilpa Rao
        </h2>
        <div className="flex justify-center items-center sm:gap-16">
          <img src="TVWhite.svg" className="mr-4" alt="TV Logo" />
          <img src="Wonderwall.svg" alt="Wonderwall Logo" />
        </div>
        <h1
          className={`font-[pricedown] ${styles.proshowtext} transform transition-transform duration-300 hover:translate-y-[-5px] `}
        >
          Oct 27
        </h1>
      </Link>

      <div ref={proShowRef2} className="relative z-0">
        {isMedScreen ? (
          isSmallScreen ? (
            <CarouselGridxsm />
          ) : (
            <CarouselGridsm />
          )
        ) : (
          <CarouselGrid />
        )}
      </div>
    </div>
  );
};

export default ProShow;

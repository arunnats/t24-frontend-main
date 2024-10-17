"use client";
import styles from "./Carousel.module.css";
import React, { useEffect, useState } from "react";
import CarouselGrid from "./gridmd";
import CarouselGridxsm from "./gridsmaller";
import CarouselGridsm from "./gridsm";

const Page = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMedScreen, setIsMedScreen] = useState(false);

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

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute top-1/4 left-0 w-full text-center text-white text-9xl p-4 z-10">
        <h1 className={`font-[pricedown] ${styles.proshowtext} `}>PRO-</h1>
        <h1 className={`font-[pricedown] ${styles.proshowtext}`}>Show</h1>
        <h2 className={`${styles.artistname} text-9xl`}>Shilpa Rao</h2>
      </div>

      <div className="relative z-0">
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

export default Page;

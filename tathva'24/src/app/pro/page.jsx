"use client";
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
      {/* Dark overlay background */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Overlay text on top of the div */}
      <h1 className="absolute top-1/2 left-0 w-full text-center text-white text-7xl z-10 p-4">
        Pro Show
      </h1>

      {/* Carousel below the overlay */}
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

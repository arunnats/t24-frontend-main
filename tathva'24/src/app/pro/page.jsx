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
    <div className="p h-screen overflow-hidden">
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
  );
};

export default Page;

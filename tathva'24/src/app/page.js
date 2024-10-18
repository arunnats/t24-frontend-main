"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Cartridge from "./components/workshopCartridge/cartridge_comp";
import Workshopmodal from "./components/Workshopmodal/Workshopmodal";
import Hero from "./components/Hero/Hero";

import Carousal from "./updatedcarousal/page";
import GamingPage from "./gaming/page";
import ExpoPage from "./components/expo-page/page";
import FooterDesktop from "./components/FooterDesktop/FooterDesktop";
import FooterMobile from "./components/FooterMobile/FooterMobile";
import ProShow from "./pro/ProShow";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll-triggered animation for Carousal
    gsap.fromTo(
      ".carousal-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".carousal-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Scroll-triggered animation for ProShow
    gsap.fromTo(
      ".proshow-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".proshow-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="h-[600vh] relative overflow-clip bg-black flex flex-col">
      <Hero />
      <div className="carousal-container">
        <Carousal />
      </div>
      <GamingPage />
      <div className="proshow-container">
        <ProShow />
      </div>
      <div className="w-screen h-min-screen">
        <ExpoPage />
      </div>
      <div className="footer flex h-max relative w-full">
        <FooterDesktop />
        <FooterMobile />
      </div>
    </div>
  );
}

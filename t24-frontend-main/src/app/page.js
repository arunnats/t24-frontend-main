"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Cartridge from "./components/workshopCartridge/cartridge_comp";
import Workshopmodal from "./components/Workshopmodal/Workshopmodal";
import Hero from "./components/Hero/Hero";
import Carousal from "./components/updatedcarousal/page";
import GamingPage from "./components/glitchPage/GamingPage";
import ExpoPage from "./components/expo-page/page";
import FooterDesktop from "./components/FooterDesktop/FooterDesktop";
import FooterMobile from "./components/FooterMobile/FooterMobile";
import ProShow from "./components/pro/ProShow";
import OthersLanding from "./components/Others/Other";
import MainMarquee from "./components/mainPageMarquee/marque";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".hero-container",
      { scale:1},
      {
        opacity: 0,
        y: 0,
        duration: 2.5,
        scale:5 ,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-container",
          start: "60% 50%",
          toggleActions: "play reverse play reverse",
          // markers: true
        },
      }
    );

    // Scroll-triggered animation for Carousal
    gsap.fromTo(
      ".carousal-container",
      { opacity: 0, y: 50 ,scale:0.1},
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scale:1,
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
    <div className="min-h-[760vh] relative overflow-clip bg-black flex flex-col z-50">
      <div className="hero-container h-[130vh]">
        <Hero />
      </div>
      <div className="carousal-container h-screen">
        <Carousal />
      </div>
      <GamingPage />
      <div className="proshow-container">
        <ProShow />
      </div>
      <div className="w-screen h-min-screen">
        <ExpoPage />
      </div>
      <OthersLanding />
      <div className="footer flex h-max w-full absolute bottom-0">
        <FooterDesktop />
        <FooterMobile />
      </div>
    </div>
  );
}

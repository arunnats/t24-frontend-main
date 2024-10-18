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
<<<<<<< HEAD
import ExpoPage from "./components/expo-page/page";
import FooterDesktop from "./components/FooterDesktop/FooterDesktop";
import FooterMobile from "./components/FooterMobile/FooterMobile";
import ProShow from "./components/pro/ProShow";
import OthersLanding from "./components/Others/Other";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll-triggered animation for Carousal
    gsap.fromTo(
      ".carousal-container",
      { opacity: 0, y: 50 ,scale:0.1},
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
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
=======
import MainMarquee from "./components/mainPageMarquee/marque";
import { Analytics } from "@vercel/analytics/react";

// import FooterPC from "./footerpc";
>>>>>>> 722824f6a43e52bcface82a416447a64f61f12aa

  return (
<<<<<<< HEAD
    <div className="min-h-[760vh] relative overflow-clip bg-black flex flex-col">
      <Hero />
      <div className="carousal-container h-[80vh]">
        <Carousal />
      </div>
=======
    <div className="h-[800vh] relative overflow-clip bg-black">
      <Hero />

      <Carousal />

      <ProshowMod />
>>>>>>> 722824f6a43e52bcface82a416447a64f61f12aa
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

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
      { scale: 1 },
      { scale: 1 },
      {
        opacity: 0,
        y: 0,
        duration: 2.5,
        scale: 5,
        scale: 5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-container",
          start: "60% 50%",
          end: "100% 50%",
          // markers: true,
          toggleActions: "play none play reverse",
          // markers: true
        },
      }
    );

    // Scroll-triggered animation for Carousal
    gsap.fromTo(
      ".text-container",
      { opacity: 0, y: 50, scale: 0.1 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scale: 1,
        ease: "power2.out",
        // marker: true,
        scrollTrigger: {
          trigger: ".text-container",
          start: "top 50%",
          toggleActions: "play none none none",
          // markers: true
        },
      }
    );
    gsap.fromTo(
      ".text-container2",
      { opacity: 0, y: 50, scale: 0.1 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power2.out",
        // marker: true,
        scrollTrigger: {
          trigger: ".text-container2", 
          start: "top 80%",
          toggleActions: "play none none none",
          // markers: true
        },
      }
    );

    gsap.fromTo(
      ".carousal-container",
      { opacity: 0, y: 50, scale: 0.1 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scale: 1,
        ease: "power2.out",
        position: "sticky",
        scrollTrigger: {
          trigger: ".carousal-container",
          start: "top 80%",
          // markers: true,

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
          start: "top 20%",
          toggleActions: "play none none none",
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".expo-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".expo-container",
          start: "top 0%",
          toggleActions: "play none reverse none",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="min-h-[760vh] relative overflow-x-clip bg-black flex flex-col z-50">
      <div className="hero-container h-[130vh]">
        <Hero />
      </div>
      <div className="text-container h-[50vh] opacity-0">
        <div className="w-full h-full">
          <div className="upppercase w-full h-full text-white flex flex-col items-center justify-center ">
            <p className="text-9xl text-pricedown">What have we </p>
            <p className="text-9xl text-pricedown">
              got f<span className="ooo">o</span>r you ?
            </p>
          </div>
        </div>
      </div>
      <div className="carousal-container h-screen">
        <Carousal />
      </div>

      <div className="text-container2 h-[50vh] opacity-0">
        <div className="w-full h-full">
          <div className="upppercase w-full h-full text-white flex flex-col items-center ">
            <p className="text-9xl text-pricedown">And much More... </p>
          </div>
        </div>
      </div>

      <GamingPage />

      <div className="proshow-container">
        <ProShow />
      </div>

      <div className="expo-container w-screen h-min-screen">
        <ExpoPage />
      </div>

      <OthersLanding />

      <div className="footer flex h-max w-full absolute bottom-0">
        <FooterDesktop />
        <FooterMobile />
      </div>
      <Analytics />
    </div>
  );
}

"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import PassPage from "./components/passes/page";
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
import AutomotiveSummit from "./components/AutomotiveSummit/automotiveSummit";
import MainMarquee from "./components/mainPageMarquee/marque";
import Navbar from "./components/Navbar/Navbar";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".hero-container",
      { scale: 1 },
      {
        opacity: 0,
        y: 0,
        duration: 2.5,
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
    // gsap.fromTo(
    //   ".proshow-container",
    //   { opacity: 0, y: 50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1.5,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: ".proshow-container",
    //       start: "top 20%",
    //       toggleActions: "play none none none",
    //       // markers: true,
    //     },
    //   }
    // );

    // gsap.fromTo(
    //   ".expo-container",
    //   { opacity: 0, y: 50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1.5,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: ".expo-container",
    //         start: "top 50%",
    //         toggleActions: "play none none none",
    //       // markers: true,
    //     },
    //   }
    // );
  }, []);

  return (
    <div className=" min-h-[200vh] relative overflow-x-clip bg-black flex flex-col z-50">
      <Navbar />

      <div className="hero-container h-[130vh]">
        <Hero />
      </div>
      <div className="text-container mt-[15vh] md:mb-0 h-[15vh] md:h-[50vh] opacity-0">
        <div className="w-full h-full">
          <div className="upppercase w-full h-full text-white flex flex-col items-center justify-center ">
            <p className="text-6xl md:text-9xl text-pricedown">What have we </p>
            <p className="text-6xl md:text-9xl text-pricedown">
              got f<span className="ooo">o</span>r you ?
            </p>
          </div>
        </div>
      </div>
      <div className="carousal-container h-screen">
        <Carousal />
      </div>

      <div className="text-container2 mb-[15vh] md:mb-0 h-[15vh] md:h-[50vh] opacity-0 flex items-center justify-center">
        <div className="w-full h-full">
          <div className="uppercase w-full h-full text-white flex flex-col items-center justify-center">
            <p className="text-6xl md:text-9xl text-pricedown my-5 text-center">
              And much More...
            </p>
          </div>
        </div>
      </div>

      <PassPage />
      <div className="mt-[3vh] -mb-[10vh]">
        <ProShow />
      </div>

      <div className="expo-container w-screen h-min-screen mt-0 mb-[5vh]">
        <ExpoPage />
      </div>

      <div className="">
        <AutomotiveSummit />
      </div>

      <div className="w-full mt-[8vh] mb-[18vh]">
        <Image
          src="/divider.svg"
          alt="Divider"
          layout="responsive"
          width={100}
          height={10}
          className="w-full"
        />
      </div>

      <div className="proshow-container my-[2vh] mb-[5vh]">
        <GamingPage />
      </div>

      <div className=" mt-[10vh] h-full">
        <OthersLanding />
      </div>

      <div className="footer flex h-screen w-full bottom-0">
        <FooterDesktop />
        <FooterMobile />
      </div>
      <Analytics />
    </div>
  );
}

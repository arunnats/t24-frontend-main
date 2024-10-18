"use client";
import Image from "next/image";
import Cartridge from "./components/workshopCartridge/cartridge_comp";
import Workshopmodal from "./components/Workshopmodal/Workshopmodal";
import Hero from "./components/Hero/Hero";
import Carousal from "./updatedcarousal/page";
import GamingPage from "./gaming/page";
import ExpoPage from "./components/expo-page/page";
import FooterDesktop from "./components/FooterDesktop/FooterDesktop";
import FooterMobile from "./components/FooterMobile/FooterMobile";
import { useEffect } from "react";





export default function Home() {

useEffect

  return (
    <div className="h-max relative overflow-clip bg-black flex flex-col">
      <Hero />
      <Carousal />
      <GamingPage />
      <ExpoPage />
      <div className="footer flex h-max w-full ">
        <FooterDesktop />
        <FooterMobile />
      </div>
    </div>
  );
}

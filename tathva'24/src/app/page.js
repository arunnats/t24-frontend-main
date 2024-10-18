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

export default function Home() {
  return (
    <div className="h-[800vh] relative overflow-clip bg-black">
      <Hero />
      <Carousal />
      <GamingPage />
      <ExpoPage />
      <div className="footer h-max w-full absolute bottom-0 left-0">
        <FooterDesktop />
        <FooterMobile />
      </div>
    </div>
  );
}

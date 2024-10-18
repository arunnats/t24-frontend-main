"use client";
import Image from "next/image";
import Cartridge from "./components/workshopCartridge/cartridge_comp";
import Workshopmodal from "./components/Workshopmodal/Workshopmodal";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Hero />
      {/* <Flappy /> */}
      
    </div>
  );
}

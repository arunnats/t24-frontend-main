"use client";
import Image from "next/image";
import Hero from "./components/Hero/Hero";
import CentreConsole from "./components/CentreConsole/CentreConsole";

export default function Home() {
  return (
    <div className="h-screen w-[20vw]">
      <Hero />
      {/* <Flappy /> */}
      {/* <CentreConsole /> */}


    </div>
  );
}

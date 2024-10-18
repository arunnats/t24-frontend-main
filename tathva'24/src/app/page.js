<<<<<<< HEAD
<<<<<<< HEAD
=======
import Image from "next/image";
import Cartridge from "./components/workshopCartridge/cartridge_comp";
import Workshopmodal from "./components/Workshopmodal/Workshopmodal";
=======
"use client";
import Image from "next/image";
import Hero from "./components/Hero/Hero";
>>>>>>> proshow

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="flex">
      <Workshopmodal/>
=======
    <div className="h-screen w-screen">
      <Hero />
      {/* <Flappy /> */}
      <div className=" hero-center relative origin-center w-[60vw] h-full z-20 border-[40px] ">
        <img
          src="/Hero/center.webp"
          alt="Center image"
          className="hero-center absolute origin-center top-[20%] "
        />

        <div className="absolute top-[37%] w-full h-full ">
          <div className="relative left-0 w-full flex items-center justify-center ">
            <img
              src="/Hero/moreblack.gif"
              alt=""
              className=" mix-blend-multiply w-[64%]	"
            />
          </div>
        </div>
      </div>
>>>>>>> proshow
    </div>
  );
}
>>>>>>> origin/workshopCartridge

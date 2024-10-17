import React from "react";
import Marquee from "./components/old_marquee/marquee_comp";
import Carousal from './Carousal/Carousal';
const element1 = "TATHVA 2024";
const element2 = "PASSES  ";
const color1 = "#000000"; // Black
const color2 = "#FFFFFF"; // White

const Page = () => {
  return (
    <div>
      {/* <Marquee
        element1={element1}
        element2={element2}
        color1={color1}
        color2={color2}
      /> */}
      <Carousal/>
    </div>
  );
};

export default Page;

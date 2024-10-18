import React from "react";
import Marquee from "./marquee_comp";

const element1 = "TATHVA 2024";
const element2 = "PASSES";
const color1 = "#000000"; // Black
const color2 = "#FFFFFF"; // White

const Page = () => {
  return (
    <div>
      <Marquee
        element1={element1}
        element2={element2}
        color1={color1}
        color2={color2}
      />
    </div>
  );
};

export default Page;

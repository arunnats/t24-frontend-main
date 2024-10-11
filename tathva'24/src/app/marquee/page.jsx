import React from "react";
import Marquee from "./marquee_comp";

const element1 = "automative ";
const element2 = "summit ";
const color1 = "#b70202";
const color2 = "#0a0a00";

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

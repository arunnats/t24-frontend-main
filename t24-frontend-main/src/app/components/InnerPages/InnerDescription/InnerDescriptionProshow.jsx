import React from "react";
import Arrow from "./arrow";
import styles from "./description.module.css";
import Link from "next/link";

const InnerDescription = ({ num, heading, lineup }) => {
  return (
    <div
      className={`bg-[#ECECEC] relative w-full h-full px-[5%] pb-[20px] rounded-[12px] md:rounded-[30px]`}
    >
      <div className="flex justify-between items-center">
        <div
          className={` text-black lg:text-[8vw] text-[10vw] leading-[2rem] md:leading-[6vw] lg:leading-[4vw] ${styles.heading}`}
        >
          {num}
        </div>
        <div
          className={`text-black lg:text-[5vw] md:text-[7vw] text-[8vw] ${styles.heading}`}
        >
          {heading}
        </div>
      </div>

      <hr className="border-black mt-2" />

      <div
        className={`text-black h-min-[65%] text-[4.8vw] md:text-[3.3vw] lg:text-[2vw] pt-[2%] ${styles.description}`}
      >
        {lineup.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <span className="text-left">{item.name}</span>
            <span className="text-right">{item.date}</span>
          </div>
        ))}
        <div className="hidden md:flex text-black font-bold absolute bottom-2 right-3 ">
          ◻◻◻
        </div>
      </div>
    </div>
  );
};

export default InnerDescription;

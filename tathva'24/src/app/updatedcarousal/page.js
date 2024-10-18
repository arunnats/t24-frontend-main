"use client";
import React from "react";
import styles from "./page.module.css"

const Page = () => {
  return (
   
      <div className="flex flex-row bg-black p-10 justify-evenly custom-sm:flex-col gap-6 text-2xl">
        {/* Card 1 - Workshops */}
        <div className={`${styles.divcont} relative flex flex-col  items-center rounded-2xl overflow-hidden`}>
          <div className={`${styles.heading} ${styles['workshop-heading']}`}>
            WORKSHOPS
          </div>
          <img
            src="/work.png"
            alt="Workshops"
            className="object-fit h-full w-full rounded-tl-md rounded-bl-md"
          />
        </div>

        {/* Card 2 - Lectures */}
        <div className={`${styles.divcont} relative flex flex-col items-center rounded-2xl overflow-hidden`}>
          <h2 className={`${styles.heading} ${styles['lecture-heading']}`}>
            LECTURES
          </h2>
          <img
            src="/lec.png"
            alt="Lectures"
            className="object-fit h-full w-full rounded-tl-md rounded-bl-md"
          />
        </div>

        {/* Card 3 - Competitions */}
        <div className={`${styles.divcont} relative flex flex-col items-center rounded-2xl overflow-hidden`}>
          <h2 className={`${styles.heading} ${styles['competition-heading']}`}>
            COMPETITIONS
          </h2>
          <img
            src="/comp.png"
            alt="Competitions"
            className="object-fit h-full w-full rounded-tl-md rounded-bl-md"
          />
        </div>
      </div>
 
  );
};

export default Page;

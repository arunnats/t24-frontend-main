// pages/page.js
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const Carousal = () => {
  return (
<<<<<<< HEAD
    <div className="flex flex-row bg-black p-10 justify-evenly custom-sm:flex-col h-full gap-6 items-center text-2xl">
=======

    <div className="flex flex-row bg-black p-10 justify-evenly custom-sm:flex-col gap-6 items-center text-2xl">
>>>>>>> 722824f6a43e52bcface82a416447a64f61f12aa
      {/* Card 1 - Workshops */}
      <Link href="/workshops" passHref legacyBehavior>
        <a
          className={`${styles.divcont} relative flex flex-col items-center rounded-2xl overflow-hidden`}
        >
          <div className={`${styles.heading} ${styles["workshop-heading"]}`}>
            WORKSHOPS
          </div>
          <img
            src="/work.png"
            alt="Workshops"
            className="object-fit h-full w-full rounded-tl-md object-cover rounded-bl-md"
          />
        </a>
      </Link>

      {/* Card 2 - Lectures */}
      <Link href="/lectures" passHref legacyBehavior>
        <a
          className={`${styles.divcont} relative flex flex-col items-center rounded-2xl overflow-hidden`}
        >
          <h2 className={`${styles.heading} ${styles["lecture-heading"]}`}>
            LECTURES
          </h2>
          <img
            src="/lec.png"
            alt="Lectures"
            className="object-fit h-full w-full rounded-tl-md object-cover rounded-bl-md"
          />
        </a>
      </Link>

      {/* Card 3 - Competitions */}
      <Link href="/events" passHref legacyBehavior>
        <a
          className={`${styles.divcont} relative flex flex-col items-center rounded-2xl overflow-hidden`}
        >
          <h2 className={`${styles.heading} ${styles["competition-heading"]}`}>
            COMPETITIONS
          </h2>
          <img
            src="/comp.png"
            alt="Competitions"
            className="object-fit h-full w-full rounded-tl-md object-cover rounded-bl-md"
          />
        </a>
      </Link>
    </div>
  );
};

export default Carousal;

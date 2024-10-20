"use client"; // Add this directive at the top to mark this as a client-side component

import React, { useState, useEffect } from "react";
import Passes from "../Event_card/passes";
import Pacman from "../pacman/Pacman";
import Marqueework from "../marquee_workshop/marquee_comp";
import Navbar from "../Navbar/Navbar";
import PassCard from "./passcard";
import styles from "./page.module.css";
const CMS_URL = "https://cms.tathva.org";
const CMS_API_TOKEN =
  "fecee17e1e701ae4b85dfe015508ab24270c911fed283fa78752a6a233c11a2c232c464cc88dd0d96a07a9a71c82f6f04391795e58f94561fdfafa45a8d22d88209ee67f06b0ecfbe8ff6be3473f533fab42d6fd3b0c5cbc9a860b6733e744104818e113022e0e46f3b459acb648f8e04bc66198cd47ed303ea62a1f7186c980";

const PassPage = () => {
  return (
    <div className="min-h-fit bg-black overflow-hidden relative ">
      <div>
        <div>
          <div>
            <div className={`py-[2%] pl-[4%] `}>
              <span
                className={`bg-white px-[1.5vw] text-[4vw] font-bold rounded-sm md:rounded-md ${styles.supplybold}`}
              >
                TATHVA
              </span>
              <p
                className={`text-white text-[8vw] m-0 leading-none ${styles.supplyregular}`}
              >
                PASSES
              </p>
            </div>
            <hr className="border-t-2 mb-10 border-white" />
            <PassCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassPage;

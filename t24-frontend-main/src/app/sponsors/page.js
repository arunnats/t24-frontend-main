"use client";

import React from "react";
import Marqueework from "../components/marquee_workshop/marquee_comp";
import Navbar from "../components/Navbar/Navbar";
import styles from './eventpage.module.css';

const Page = () => {
  const sponsors = [
    {
      name: 'Title Sponsor',
      logo: '/Sponsors/s0.png',
    },
    {
      name: 'Refreshment Partner',
      logo: '/Sponsors/s1.png',
    },
    {
      name: 'Icecream Partner',
      logo: '/Sponsors/s2.png',
    },
    {
      name: 'Gear Partner',
      logo: '/Sponsors/s3.png',
    },
    {
      name: 'Gate Partner',
      logo: '/Sponsors/s4.png',
    },
    {
      name: 'Perfume Partner',
      logo: '/Sponsors/s5.png',
    },
    {
      name: 'Ticketing Partner',
      logo: '/Sponsors/s6.png',
    },
  ];

  return (
    <div className="min-h-full bg-black overflow-hidden relative pl-10 md:p-14">
      <div className="absolute inset-0 flex justify-center overflow-hidden left-0 w-full h-full">
        <div
          className="-rotate-90 flex"
          style={{
            height: "100vw",
            display: "flex",
          }}
        >
          <Marqueework
            element1={"TATHVA 2024"}
            element2={"SPONSORS"}
            color={"#b7c9e2"}
          />
        </div>
      </div>

      <Navbar />

      <div className="flex bg-black w-full">
        <div className="flex-grow">
          <div className="py-[2%] pl-[4%]">
            <span
              className={`bg-white px-[1.5vw] text-[4vw] font-bold rounded-sm md:rounded-md ${styles.supplybold}`}
            >
              TATHVA
            </span>
            <p
              className={`text-white text-[12vw] m-0 leading-none ${styles.supplyregular}`}
            >
              SPONSORS
            </p>
          </div>
          <hr className="border-t-2" />

          {/* Title Sponsor Section */}
          <div className="py-12 px-5 text-white text-center bg-gradient-to-b rounded-lg mb-12 font-postnobillsS">
            <div className="flex flex-col items-center">
              <img
                src={sponsors[0].logo}
                alt={sponsors[0].name}
                className="w-full max-w-[650px] h-auto object-contain"
              />
              <p className="text-3xl md:text-5xl uppercase mt-6">
                {sponsors[0].name}
              </p>
            </div>
          </div>

          {/* Other Sponsors */}
          <div className="py-12 text-white text-center">
            <div className="flex flex-wrap justify-center gap-8">
              {sponsors.slice(1).map((sponsor, index) => (
                <div className="flex flex-col items-stretch justify-evenly font-postnobillsS m-3 " key={index}>
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full max-w-[420px] h-auto object-contain"
                  />
                  <p className="text-xl uppercase mt-2">{sponsor.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;

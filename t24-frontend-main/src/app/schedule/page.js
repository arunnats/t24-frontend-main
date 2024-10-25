"use client";

import React from "react";
import Marqueework from "../components/marquee_workshop/marquee_comp";
import Navbar from "../components/Navbar/Navbar";
import styles from './eventpage.module.css';

const Page = () => {
  const schedule = {
    day1: [
      { time: "10-11:00am", event: "Inauguration", location: "Bhaskara Hall" },
      { time: "11-12:00pm", event: "Wheels", location: "Various Locations" },
      { time: "9-5:30pm", event: "Albatross", location: "12th Mile" },
      { time: "9:00am-1:00pm", event: "Regatta", location: "Offshore Lab" },
      { time: "9:00am-5:00pm", event: "Workshops: AI & ML with Python", location: "ECLHC B" },
      { time: "4-5:00pm", event: "Goldman Sachs Talk", location: "Bhaskara Hall" },
      { time: "5-9:00pm", event: "Drone Race", location: "12th Mile" },
    ],
    day2: [
      { time: "9-5:00pm", event: "League of Machines", location: "97th Avenue" },
      { time: "9-5:00pm", event: "Workshops: 3D Game Development", location: "ECLHC A" },
      { time: "1-6:00pm", event: "Expo", location: "Auditorium" },
      { time: "6-11:00pm", event: "Cultural Events", location: "Ground" },
    ],
    day3: [
      { time: "9:00am - 4:00pm", event: "Chemopropello", location: "Basketball Court (C Hostel)" },
      { time: "9:00am - 5:00pm", event: "Workshops: BMW Designing", location: "ECLHC E" },
      { time: "4-5:00pm", event: "Prize Distribution & Vote of Thanks", location: "Auditorium" },
      { time: "6-11:00pm", event: "Cultural Events", location: "Ground" },
    ],
  };

  return (
    <div className="min-h-full bg-black overflow-hidden relative pl-4 md:pl-10 md:p-14">
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
            element2={"SCHEDULE"}
            color={"#b7c9e2"}
          />
        </div>
      </div>

      <Navbar />

      <div className="flex bg-black w-full  font-presstart">
        <div className="flex-grow">
          <div className="py-6 md:py-[2%] pl-4 md:pl-[4%]">
            <span
              className={`bg-white px-6 md:px-[1.5vw] text-3xl md:text-[4vw] font-bold rounded-sm md:rounded-md ${styles.supplybold}`}
            >
              TATHVA
            </span>
            <p
              className={`text-white text-6xl md:text-[12vw] m-0 leading-none ${styles.supplyregular}`}
            >
              SCHEDULE
            </p>
          </div>
          <hr className="border-t-2" />

          <div className="px-4 md:px-8 py-8 md:py-16 ml-10 text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
              Tathva 2024 Schedule
            </h1>

            {/* Day 1 */}
            <section className="mb-8 md:mb-16">
              <h2 className="text-xl md:text-3xl font-semibold mb-4 md:mb-8">
                Day 1 - 25th October 2024
              </h2>
              <ul className="space-y-2 md:space-y-4">
                {schedule.day1.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col md:flex-row justify-between border-b border-gray-700 pb-2 md:pb-4"
                  >
                    <span>{item.time}</span>
                    <span>{item.event}</span>
                    <span>{item.location}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Day 2 */}
            <section className="mb-8 md:mb-16">
              <h2 className="text-xl md:text-3xl font-semibold mb-4 md:mb-8">
                Day 2 - 26th October 2024
              </h2>
              <ul className="space-y-2 md:space-y-4">
                {schedule.day2.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col md:flex-row justify-between border-b border-gray-700 pb-2 md:pb-4"
                  >
                    <span>{item.time}</span>
                    <span>{item.event}</span>
                    <span>{item.location}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Day 3 */}
            <section>
              <h2 className="text-xl md:text-3xl font-semibold mb-4 md:mb-8">
                Day 3 - 27th October 2024
              </h2>
              <ul className="space-y-2 md:space-y-4">
                {schedule.day3.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col md:flex-row justify-between border-b border-gray-700 pb-2 md:pb-4"
                  >
                    <span>{item.time}</span>
                    <span>{item.event}</span>
                    <span>{item.location}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

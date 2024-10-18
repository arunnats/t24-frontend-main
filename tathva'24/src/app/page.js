"use client";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 font-jakarta">
      {/* Cards */}
      <div className="flex flex-row custom-sm:flex-col gap-6">
        {/* Card 1 - Workshops */}
        <div className="relative flex flex-col items-center rounded-2xl overflow-hidden">
          <h2 className="absolute text-2xl font-semibold mb-4 text-white px-2 py-1 right-0 top-[5%] rounded-tl-md rounded-bl-md "
              style={{ background: "linear-gradient(to right , #2A2453 90%,  black 100%)" ,boxShadow: "3px 3px 2px rgba(0, 0, 0, 0.6)"  }}>
            WORKSHOPS
          </h2>
          <img
            src="/work.png"
            alt="Workshops"
            className="object-fit h-full rounded-tl-md rounded-bl-md"
          />
        </div>

        {/* Card 2 - Lectures */}
        <div className="relative flex flex-col items-center rounded-2xl overflow-hidden">
          <h2 className="absolute text-2xl font-semibold mb-4 text-white px-2 py-1 right-0 top-[5%] rounded-tl-md rounded-bl-md"
              style={{ background: "linear-gradient(to right , #629D4D 80%, #262626 100%) ",boxShadow: "3px 3px 2px rgba(0, 0, 0, 0.6)" }}>
            LECTURES
          </h2>
          <img
            src="/lec.png"
            alt="Lectures"
            className="object-fit rounded-tl-md rounded-bl-md"
          />
        </div>

        {/* Card 3 - Competitions */}
        <div className="relative flex flex-col items-center rounded-2xl overflow-hidden">
          <h2 className="absolute text-2xl font-semibold mb-4 text-white px-2 py-1 right-0 top-[5%] rounded-tl-md rounded-bl-md shadow-lg"
               style={{ background: "linear-gradient(to right , #A47238 90%, #262626 100%)",boxShadow: "3px 3px 2px rgba(0, 0, 0, 0.6)" }}>
            COMPETITIONS
          </h2>
          <img
            src="/comp.png"
            alt="Competitions"
            className="object-fit h-full rounded-tl-md rounded-bl-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

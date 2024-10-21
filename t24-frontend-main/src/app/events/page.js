"use client"; // Add this directive at the top to mark this as a client-side component

import React, { useState, useEffect } from "react";
import Eventpage from "../components/Event_card/eventpageComp";
import Pacman from "../components/pacman/Pacman";
import Marqueework from "../components/marquee_workshop/marquee_comp";
import Navbar from "../components/Navbar/Navbar";

const CMS_URL = "https://cms.tathva.org";
const CMS_API_TOKEN =
  "fecee17e1e701ae4b85dfe015508ab24270c911fed283fa78752a6a233c11a2c232c464cc88dd0d96a07a9a71c82f6f04391795e58f94561fdfafa45a8d22d88209ee67f06b0ecfbe8ff6be3473f533fab42d6fd3b0c5cbc9a860b6733e744104818e113022e0e46f3b459acb648f8e04bc66198cd47ed303ea62a1f7186c980";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const res = await fetch(
          CMS_URL + "/api/competitions?populate=coverImage",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + CMS_API_TOKEN,
            },
          }
        );
        const fetchedData = await res.json();
        setData(fetchedData.data || []);
        setLoading(false); // Don't forget to set loading to false after fetching
      } catch (error) {
        console.error("Error fetching competitions:", error);
        setLoading(false); // Stop loading if there's an error
      }
    };

    fetchWorkshops();
  }, []);

  return (
    <div className="min-h-full bg-black overflow-hidden relative p-10 md:p-8">
      {loading || (data && data.length === 0) ? (
        <div className="flex  items-center h-[100vh]">
          <Pacman />
        </div>
      ) : (
        <div>
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
                element2={"COMPETITIONS"}
                color={"#f6b25e"}
              />
            </div>
          </div>
          <Navbar />
          <Eventpage event="COMPETITIONS" cards={data} />
        </div>
      )}
    </div>
  );
};

export default Page;

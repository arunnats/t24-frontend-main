"use client"; // Add this directive at the top to mark this as a client-side component

import React, { useEffect, useState } from "react";
import Link from "next/link";

const CMS_URL = "https://cms.tathva.org";
const CMS_API_TOKEN =
  "994fefbd051fa13866a7b0eed4df028a0d4b2bbbc22b1feaa23b0dfd849fc804e26750a92be9c4205fefd04c5aab555ebd2436e60f68ec0287c34e6fb7763a54b89d7239b1d73dcc1650f2eea905279f2c8eaafeed4b083294c30a8c9bdb4edefde6dea87986f992ff69a687d84d39ce2ad02c19fcbb053f57b6e29357cf7538";

const Page = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const res = await fetch(`${CMS_URL}/api/workshops`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${CMS_API_TOKEN}`,
          },
        });
        const data = await res.json();
        setWorkshops(data); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching workshops:", error);
      }
    };

    fetchWorkshops();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {workshops.map((workshop, index) => (
        <div key={index} className="bg-white p-4 shadow-lg rounded-lg ">
          <h2 className="text-xl font-bold">{workshop.title}</h2>
          <p className="text-gray-600">{workshop.description}</p>
          <Link href={`/workshops/${workshop.slug}`}>
            <a className="text-blue-500 mt-2 block">Learn More</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;

"use client";

import React, { useEffect, useState } from "react";
import Workshopmodal from "../../components/Workshopmodal/Workshopmodal";
import Navbar from "../../components/Navbar/Navbar";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "numeric", month: "short" };
  return date.toLocaleDateString("en-US", options).toUpperCase();
};
const Page = ({}) => {
  return (
    <div>
      <Navbar />
      {
        <Workshopmodal
          imageSrc="/expo.jpeg"
          title="Student Expo"
          price="Free"
          date="25-26 Oct"
          registrationLink="https://tiqr.events/e/Student-Expo---Round-2-479"
          description="Get ready to showcase your talent and innovation!! Join us for Student Expo, Tathva’24 which provides you with an exciting opportunity to showcase your diverse range of innovative ideas and prototypes. This event is designed exclusively for students to ensure that your products and ideas won’t go unappreciated. Be present here on 26 and 27th of October at NIT Calicut to witness this unprecedented festival of innovation and technology. Don’t miss out on this unique opportunity to explore and connect with the emerging future student community.
"
          type="Expo"
        />
      }
    </div>
  );
};

export default Page;

"use client";

import React, { useEffect, useState } from "react";

const CMS_URL = "https://cms.tathva.org";
const CMS_API_TOKEN =
  "994fefbd051fa13866a7b0eed4df028a0d4b2bbbc22b1feaa23b0dfd849fc804e26750a92be9c4205fefd04c5aab555ebd2436e60f68ec0287c34e6fb7763a54b89d7239b1d73dcc1650f2eea905279f2c8eaafeed4b083294c30a8c9bdb4edefde6dea87986f992ff69a687d84d39ce2ad02c19fcbb053f57b6e29357cf7538";

const Page = ({ params }) => {
  const { id } = params;

  const [workshop, setWorkshop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Document ID:", id);
    if (!id) return;

    const fetchWorkshop = async () => {
      try {
        const res = await fetch(`${CMS_URL}/api/workshops/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${CMS_API_TOKEN}`,
          },
        });

        if (!res.ok) {
          throw new Error(`Error fetching workshop: ${res.statusText}`);
        }

        const data = await res.json();
        setWorkshop(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWorkshop();
  }, [id]);

  useEffect(() => {
    if (workshop) {
      console.log("Updated workshop:", workshop); // Logs workshop only after it updates
    }
  }, [workshop]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!workshop) return <p>No workshop data found</p>;

  return <div>{<h1>{workshop.name}</h1>}</div>;
};

export default Page;

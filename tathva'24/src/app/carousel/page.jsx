"use client";
import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const images = ["dog.jpg", "dog1.jpeg", "dog2.webp"];

const Carousel = ({ reverse = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div
        className={reverse ? styles.carouselContentrev : styles.carouselContent}
      >
        {images.map((image, index) => (
          <div className={styles.carouselItem} key={index}>
            <img src={image} className="w-full p-1" />
          </div>
        ))}
        {images.map((image, index) => (
          <div className={styles.carouselItem} key={index}>
            <img src={image} className="w-full p-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

const CarouselGrid = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 p-1">
      {Array.from({ length: 12 }).map((_, index) => (
        <div className="flex justify-center items-center" key={index}>
          <Carousel reverse={Math.floor(index / 4) === 1} />{" "}
        </div>
      ))}
    </div>
  );
};

export default CarouselGrid;

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
    <div className="p-1 h-screen overflow-hidden">
      <div className={`grid grid-cols-4 ${styles.firstrow}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex justify-center items-center" key={index}>
            <Carousel reverse={false} />
          </div>
        ))}
      </div>

      <div className={`grid grid-cols-4 ${styles.secondrow}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex justify-center items-center" key={index + 4}>
            <Carousel reverse={true} />
          </div>
        ))}
      </div>

      <div className={`grid grid-cols-4 ${styles.thirdrow}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex justify-center items-center" key={index + 8}>
            <Carousel reverse={false} />
          </div>
        ))}
      </div>
      <div className={`grid grid-cols-4 ${styles.firstrow}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex justify-center items-center" key={index}>
            <Carousel reverse={false} />
          </div>
        ))}
      </div>

      <div className={`grid grid-cols-4 ${styles.secondrow}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex justify-center items-center" key={index + 4}>
            <Carousel reverse={true} />
          </div>
        ))}
      </div>

      <div className={`grid grid-cols-4 ${styles.thirdrow}`}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="flex justify-center items-center" key={index + 8}>
            <Carousel reverse={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselGrid;

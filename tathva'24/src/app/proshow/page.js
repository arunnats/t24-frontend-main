"use client";
import React from "react";
import styles from "./carousel.module.css";

const CarouselPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      <div className={styles.carouselContainer}>
        <div className={styles.carouselContent}>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>

          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselContent1}>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>

          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselContent}>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>

          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
          <div className={styles.carouselItem}>
            <img src="dog.jpg" className="w-full p-1" alt="dog" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;

"use client";
import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ images, reverse = false }) => {
  return (
    <div className={styles.carouselContainer}>
      <div
        className={reverse ? styles.carouselContentrev : styles.carouselContent}
      >
        {images.map((image, index) => (
          <div className={styles.carouselItem} key={index}>
            <img src={image} className="w-full p-1 object-cover" />
          </div>
        ))}
        {images.map((image, index) => (
          <div className={styles.carouselItem} key={index}>
            <img src={image} className="w-full p-1 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

const CarouselGridsm = () => {
  return (
    <div className="p-1 h-screen overflow-hidden">
      <div className={`grid grid-cols-3 ${styles.firstrow}`}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex justify-center items-center" key={index}>
            <Carousel
              images={["shilpa1.webp", "shilpa2.webp", "shilpa3.webp"]}
              reverse={false}
            />
          </div>
        ))}
      </div>

      <div className={`grid grid-cols-3 ${styles.secondrow}`}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex justify-center items-center" key={index + 4}>
            <Carousel
              images={["shilpa2.webp", "shilpa1.webp", "shilpa3.webp"]}
              reverse={true}
            />
          </div>
        ))}
      </div>

      <div className={`grid grid-cols-3 ${styles.thirdrow}`}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex justify-center items-center" key={index + 8}>
            <Carousel
              images={["shilpa3.webp", "shilpa2.webp", "shilpa1.webp"]}
              reverse={false}
            />
          </div>
        ))}
      </div>

      <div className="p-1 h-screen overflow-hidden -translate-y-[15vw]">
        <div className={`grid grid-cols-3 ${styles.firstrow}`}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="flex justify-center items-center" key={index}>
              <Carousel
                images={["shilpa1.webp", "shilpa2.webp", "shilpa3.webp"]}
                reverse={false}
              />
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-3 ${styles.secondrow}`}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="flex justify-center items-center" key={index + 4}>
              <Carousel
                images={["shilpa2.webp", "shilpa1.webp", "shilpa3.webp"]}
                reverse={true}
              />
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-3 ${styles.thirdrow}`}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="flex justify-center items-center" key={index + 8}>
              <Carousel
                images={["shilpa3.webp", "shilpa2.webp", "shilpa1.webp"]}
                reverse={false}
              />
            </div>
          ))}
        </div>
        <div className="p-1 h-screen overflow-hidden -translate-y-[15vw]">
          <div className={`grid grid-cols-3 ${styles.firstrow}`}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="flex justify-center items-center" key={index}>
                <Carousel
                  images={["shilpa1.webp", "shilpa2.webp", "shilpa3.webp"]}
                  reverse={false}
                />
              </div>
            ))}
          </div>

          <div className={`grid grid-cols-3 ${styles.secondrow}`}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="flex justify-center items-center" key={index + 4}>
                <Carousel
                  images={["shilpa2.webp", "shilpa1.webp", "shilpa3.webp"]}
                  reverse={true}
                />
              </div>
            ))}
          </div>

          <div className={`grid grid-cols-3 ${styles.thirdrow}`}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="flex justify-center items-center" key={index + 8}>
                <Carousel
                  images={["shilpa3.webp", "shilpa2.webp", "shilpa1.webp"]}
                  reverse={false}
                />
              </div>
            ))}
          </div>
          <div className="p-1 h-screen overflow-hidden -translate-y-[15vw]">
            <div className={`grid grid-cols-3 ${styles.firstrow}`}>
              {Array.from({ length: 3 }).map((_, index) => (
                <div className="flex justify-center items-center" key={index}>
                  <Carousel
                    images={["shilpa1.webp", "shilpa2.webp", "shilpa3.webp"]}
                    reverse={false}
                  />
                </div>
              ))}
            </div>

            <div className={`grid grid-cols-3 ${styles.secondrow}`}>
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  className="flex justify-center items-center"
                  key={index + 4}
                >
                  <Carousel
                    images={["shilpa2.webp", "shilpa1.webp", "shilpa3.webp"]}
                    reverse={true}
                  />
                </div>
              ))}
            </div>

            <div className={`grid grid-cols-3 ${styles.thirdrow}`}>
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  className="flex justify-center items-center"
                  key={index + 8}
                >
                  <Carousel
                    images={["shilpa3.webp", "shilpa2.webp", "shilpa1.webp"]}
                    reverse={false}
                  />
                </div>
              ))}
            </div>
            <div className="p-1 h-screen overflow-hidden -translate-y-[15vw]">
              <div className={`grid grid-cols-3 ${styles.firstrow}`}>
                {Array.from({ length: 3 }).map((_, index) => (
                  <div className="flex justify-center items-center" key={index}>
                    <Carousel
                      images={["shilpa1.webp", "shilpa2.webp", "shilpa3.webp"]}
                      reverse={false}
                    />
                  </div>
                ))}
              </div>

              <div className={`grid grid-cols-3 ${styles.secondrow}`}>
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    className="flex justify-center items-center"
                    key={index + 4}
                  >
                    <Carousel
                      images={["shilpa2.webp", "shilpa1.webp", "shilpa3.webp"]}
                      reverse={true}
                    />
                  </div>
                ))}
              </div>

              <div className={`grid grid-cols-3 ${styles.thirdrow}`}>
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    className="flex justify-center items-center"
                    key={index + 8}
                  >
                    <Carousel
                      images={["shilpa3.webp", "shilpa2.webp", "shilpa1.webp"]}
                      reverse={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselGridsm;

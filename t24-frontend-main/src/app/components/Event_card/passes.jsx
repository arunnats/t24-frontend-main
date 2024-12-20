import React from "react";
import styles from "./eventpage.module.css";
import PassCard from "../passes/passcard";

const CMS_URL = "https://cms.tathva.org";

// Function to format the date to "DD MMM" format
const formatDate = (dateString) => {
  const date = new Date(dateString); // Parse the date
  const options = { day: "numeric", month: "short" }; // Format options for day and month
  return date.toLocaleDateString("en-US", options).toUpperCase(); // e.g., "27 OCT"
};

const Passes = ({ event, cards, type }) => {
  return (
    <div className="flex bg-black">
      <div className="flex-grow">
        <div className={`py-[2%] pl-[4%] `}>
          <span
            className={`bg-white px-[1.5vw] text-[4vw] font-bold rounded-sm md:rounded-md ${styles.supplybold}`}
          >
            TATHVA
          </span>
          <p
            className={`text-white text-[12vw] m-0 leading-none ${styles.supplyregular}`}
          >
            PASSES
          </p>
        </div>
        <hr className="border-t-2 border-white" />
        <div className="flex flex-wrap p-[3vh] md:p-[2%] mx-auto">
          {cards.map((card, index) => {
            // Check if all required fields are present
            if (
              card.posterImage?.url &&
              card.name &&
              card.eventDate &&
              card.regLink &&
              card.documentId
            ) {
              const price =
                card.regPrice !== undefined && card.regPrice !== null
                  ? card.regPrice
                  : "0";

              return (
                <div key={index} className="mr-10">
                  <div className="text-cyan-500">
                    <div className="">
                    <PassCard
                      imageSrc={CMS_URL + card.posterImage.url}
                      title={card.name}
                      price={price}
                      date={formatDate(card.eventDate)}
                      registrationLink={card.regLink}
                      docID={card.documentId}
                      type={type}
                    />
                  </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Passes;
   
                  
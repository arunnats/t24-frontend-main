import React, { useEffect } from "react";
import styles from "./Worskshopmodal.module.css";
import Cartridge from "../workshopCartridge/cartridge_comp";

const Workshopmodal = ({
  imageSrc,
  title,
  price,
  date,
  registrationLink,
  description,
  type,
  guidelines,
  workshopTitle,
  workshopSubtitle,
  aboutText,
  contactDetails,
}) => {
  useEffect(() => {
    console.log("Guidelines:", guidelines); // Logs guidelines to the console
  }, [guidelines]);

  return (
    <div
      className={`flex-col md:flex-row flex justify-center items-center h-[100vh] bg-black text-slate-200 ${styles.plusJakartaFont}`}
    >
      <div className="w-[380px] md:w-[480px] m-2">
        <Cartridge
          imageSrc={imageSrc}
          title={title}
          price={price}
          date={date}
          registrationLink={registrationLink}
          description=""
          guidelinesLink={guidelines}
        />
      </div>
      <div className="p-2 m-2 w-[80%] md:w-[40%]">
        <h1 className="text-5xl mb-2 font-bold">{title}</h1>
        <h2 className="text-lg mb-4">{type}</h2>
        <h1 className="text-2xl mb-4 font-bold">About the {type}</h1>
        <p className="mb-4">{description}</p>
      </div>
    </div>
  );
};

export default Workshopmodal;

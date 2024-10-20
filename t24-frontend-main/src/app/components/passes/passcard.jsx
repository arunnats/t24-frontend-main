import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const PassCard = ({
  imageSrc,
  title,
  price,
  date,
  registrationLink,
  docID,
  teamSize,
  type,
}) => {
  return (
    <div className="flex flex-row justify-around flex-wrap">
      <div className="relative h-[900px] w-[400px] min-w-[330px] font-postnobillsS">
        <img
          src="/Layout.svg"
          alt="Background"
          className="absolute left-[10%] top-[3%]"
        />
        <img
          src="/d1.svg"
          alt="Background"
          className="absolute z-1 left-[20%] top-[13%]"
        />
        <div className="text-white absolute left-[27%] top-[6%] text-7xl font-postnobillsEB tracking-[10px] ">
          DAY 1
        </div>
        <div className="text-white absolute left-[18%] top-[57%] text-[20px] w-[250px] flex justify-between">
          <div>OCT</div>
          <div>26TH</div>
          <div>2024</div>
        </div>

        <div className="text-white absolute left-[14.5%] top-[65%] border-white pt-2 flex flex-col">
          <ul className="list-disc pl-[40px] text-[20px] tracking-[2px]">
            <li>Proshow</li>
            <li>Wheels</li>
            <li>Conclave</li>
          </ul>

          <div className={`${styles.button}  mt-4 items-center text-center border-[0.5px] w-[270px] h-[40px] tracking-[3px] border-white ml-[3px] font-bold rounded-lg text-xl flex justify-around`}>
            <div className="text-green-400 "> BUY NOW</div>
            <div>199/-</div>
          </div>
          <div className="font-barcode text-5xl pl-[12px] py-5">nigga urnet'slow</div>
        </div>
      </div>

      <div className="relative h-[900px] w-[400px] min-w-[330px] font-postnobillsS">
        <img
          src="/Layout2.svg"
          alt="Background"
          className="absolute left-[10%] top-[3%] "
        />
        <img
          src="/d2.svg"
          alt="Background"
          className="absolute z-1 left-[20%] top-[15%]"
        />
        <div className=" absolute left-[27%] top-[6%] text-7xl font-postnobillsEB tracking-[10px] ">
          DAY 2
        </div>
        <div className=" absolute left-[18%] top-[57%] text-[20px] w-[250px] flex justify-between">
          <div>OCT</div>
          <div>27TH</div>
          <div>2024</div>
        </div>

        <div className=" absolute left-[14.5%] top-[65%] pt-2 flex flex-col">
          <ul className="list-disc pl-[40px] text-[20px] tracking-[2px]">
            <li>Proshow</li>
            <li>Wheels</li>
            <li>Conclave</li>
          </ul>

          <div className={`${styles.button1}  mt-4 items-center text-center border-[0.5px] w-[270px] h-[40px] tracking-[3px] border-black ml-[3px] font-bold rounded-lg text-xl flex justify-around`}>
            <div className="text-red-600"> BUY NOW</div>
            <div>599/-</div>
          </div>
          <div className="font-barcode text-5xl pl-[12px] py-5">nigga urnet'slow</div>
        </div>
      </div>

      <div className="relative h-[900px] w-[400px] min-w-[330px] font-postnobillsS">
        <img
          src="/Layout.svg"
          alt="Background"
          className="absolute left-[10%] top-[3%]"
        />
        <img
          src="/day3.svg"
          alt="Background"
          className="absolute z-1 left-[20%] top-[11.2%]"
        />
        <div className="text-white absolute left-[27%] top-[6%] text-7xl font-postnobillsEB tracking-[10px] ">
          DAY 3
        </div>
        <div className="text-white absolute left-[18%] top-[57%] text-[20px] w-[250px] flex justify-between">
          <div>OCT</div>
          <div>28TH</div>
          <div>2024</div>
        </div>

        <div className="text-white absolute left-[14.5%] top-[65%] border-white pt-2 flex flex-col">
          <ul className="list-disc pl-[40px] text-[20px] tracking-[2px]">
            <li>Proshow</li>
            <li>Wheels</li>
            <li>Conclave</li>
          </ul>

          <div className={`${styles.button}  mt-4 items-center text-center border-[0.5px] w-[270px] h-[40px] tracking-[3px] border-white ml-[3px] font-bold rounded-lg text-xl flex justify-around`}>
            <div className="text-green-400"> BUY NOW</div>
            <div>1299/-</div>
          </div>
          <div className="font-barcode text-5xl pl-[12px] py-5">nigga urnet'slow</div>
        </div>
      </div>
    </div>
  );
};

export default PassCard;

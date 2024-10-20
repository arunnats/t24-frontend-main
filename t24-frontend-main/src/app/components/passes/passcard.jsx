import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const PassCard = ({}) => {
  return (
    <div className="flex flex-row justify-around flex-wrap">
      <div className="relative ml-4 h-[900px] w-[300px] min-w-[330px] font-postnobillsS">
        <img
          src="/Layout.svg"
          alt="Background"
          className="absolute left-[0%] top-[3%]"
        />
        <img
          src="/d1.svg"
          alt="Background"
          className="absolute z-1 left-[11%] top-[13%]"
        />
        <div className="text-white absolute left-[17%] top-[6%] text-7xl font-postnobillsEB tracking-[10px] ">
          DAY 1
        </div>
        <div className="text-white absolute left-[9%] top-[57%] text-[20px] w-[250px] flex justify-between">
          <div>OCT</div>
          <div>25TH</div>
          <div>2024</div>
        </div>

        <div className="text-white absolute left-[4.5%] top-[65%] border-white pt-2 flex flex-col">
          <ul className="list-disc pl-[40px] text-[20px] tracking-[2px]">
          <li>Entry Pass</li>
            <li>Stalls</li>
            <li>Informals Stage</li>
          </ul>
          <a
            href="https://tiqr.events/e/Tathva-Pass-450"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`${styles.button}  mt-4 items-center text-center border-[0.5px] w-[270px] h-[40px] tracking-[3px] border-white ml-[7px] font-bold rounded-lg text-xl flex justify-around`}
            >
              <div className="text-green-400 "> BUY NOW</div>
              <div>199/-</div>
            </div>
          </a>
          <div className="font-barcode text-5xl pl-[12px] py-5">
            nigga urnet'slow
          </div>
        </div>
      </div>

      <div className="relative h-[900px] w-[300px] min-w-[330px] font-postnobillsS">
        <img
          src="/Layout.svg"
          alt="Background"
          className="absolute left-[0%] top-[3%]"
        />
        <img
          src="/day3.svg"
          alt="Background"
          className="absolute z-1 left-[11%] top-[13%]"
        />
        <div className="text-white absolute left-[17%] top-[6%] text-7xl font-postnobillsEB tracking-[10px] ">
          DAY 2
        </div>
        <div className="text-white absolute left-[9%] top-[57%] text-[20px] w-[250px] flex justify-between">
          <div>OCT</div>
          <div>26TH</div>
          <div>2024</div>
        </div>

        <div className="text-white absolute left-[4.5%] top-[65%] border-white pt-2 flex flex-col">
          <ul className="list-disc pl-[40px] text-[20px] tracking-[2px]">
            <li>Fejo</li>
            <li>Malayali Monkeys</li>
          </ul>
          <div className="text-black">.</div>
          <a
            href="https://tiqr.events/e/Tathva-Pass-450"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`${styles.button}  mt-4 items-center text-center border-[0.5px] w-[270px] h-[40px] tracking-[3px] border-white ml-[7px] font-bold rounded-lg text-xl flex justify-around`}
            >
              <div className="text-green-400 "> BUY NOW</div>
              <div>599/-</div>
            </div>
          </a>
          <div className="font-barcode text-5xl pl-[12px] py-5">
            nigga urnet'slow
          </div>
        </div>
      </div>

      <div className="relative h-[900px] w-[300px] min-w-[330px] font-postnobillsS">
        <img
          src="/Layout.svg"
          alt="Background"
          className="absolute left-[0%] top-[3%]"
        />
        <img
          src="/da3.svg"
          alt="Background"
          className="absolute z-1 h-[350px] left-[10%] top-[16%]"
        />
        <div className="text-white absolute left-[17%] top-[6%] text-7xl font-postnobillsEB tracking-[10px] ">
          DAY 3
        </div>
        <div className="text-white absolute left-[9%] top-[57%] text-[20px] w-[250px] flex justify-between">
          <div>OCT</div>
          <div>27TH</div>
          <div>2024</div>
        </div>

        <div className="text-white absolute left-[4.5%] top-[65%] border-white pt-2 flex flex-col">
          <ul className="list-disc pl-[40px] text-[20px] tracking-[2px]">
            <li>Shilpa Rao</li>
            <li>Masala Coffee</li>
            <li>Ola Ras</li>
          </ul>
          <a
            href="https://tiqr.events/e/Tathva-Pass-450"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`${styles.button}  mt-4 items-center text-center border-[0.5px] w-[270px] h-[40px] tracking-[3px] border-white ml-[7px] font-bold rounded-lg text-xl flex justify-around`}
            >
              <div className="text-green-400 "> BUY NOW</div>
              <div>1299/-</div>
            </div>
          </a>
          <div className="font-barcode text-5xl pl-[12px] py-5">
            nigga urnet'slow
          </div>
        </div>
      </div>
      

      <div className="relative h-[950px] w-[400px] min-w-[330px] font-postnobillsS">
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
        <div className=" absolute left-[23%] top-[6%] text-7xl font-postnobillsEB tracking-[10px] ">
          SUPER
        </div>
        <div className=" absolute left-[25%] top-[55%] text-[23px] w-[190px] flex justify-between">
          <div>TATHVA</div>
          <div>SUPER</div>
          <div>PASS</div>
        </div>

        <div className=" absolute left-[14.5%] top-[60%] pt-2 flex flex-col">
          <div className="pl-[26px] text-[21px] tracking-[2px]">ACCESS TO ALL EVENTS</div>
          <ul className="list-disc pl-[65px] text-[20px] tracking-[2px]">
            <li>ProShows</li>
            <li>Wheels</li>
            <li>Conclave</li>
          </ul>
          <a
            href="https://tiqr.events/e/Tathva-Pass-450"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`${styles.button1}  mt-2 items-center text-center border-[0.5px] w-[270px] h-[40px] tracking-[3px] border-black ml-[3px] font-bold rounded-lg text-xl flex justify-around`}
            >
              <div className="text-red-600"> BUY NOW</div>
              <div>1799/-</div>
            </div>
          </a>
          <div className="font-barcode text-5xl pl-[12px] py-5">
            nigga urnet'slow
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default PassCard;

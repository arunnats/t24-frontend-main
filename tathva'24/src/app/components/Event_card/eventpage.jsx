import React from "react";
import styles from "./eventpage.module.css";

const Eventpage = ({event, cards}) => {

  return (
    <div className="flex bg-black">
        <marquee className=" w-[5%] h-[100vh] p-4" direction="up" scrollamount="3">
        This is a vertical marquee
        </marquee>

        <div className="flex-grow">
            <div className={`py-[2%] pl-[4%] `}>
                <span className={`bg-white px-[1.5vw] text-[4vw] font-bold rounded-sm md:rounded-md ${styles.supplybold}`}>TATHVA</span>
                <p className={`text-white text-[12vw] m-0 leading-none ${styles.supplyregular}`}>{event}</p>
            </div>
            <hr className="border-t-2 border-white" />
            <div className="flex flex-wrap p-[3vh] md:p-[4%]">
                {cards.map((card, index) => (
                    <div key={index} className="basis-full md:basis-1/3 p-4 h-[30vh] md:h-[30vw] pl-[5vw] border">
                        <div>
                            {card}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Eventpage;

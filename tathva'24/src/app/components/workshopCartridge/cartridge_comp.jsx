import React from "react";
import styles from "./workshopCartridge.module.css";
import Link from "next/link";

const Cartridge = ({ imageSrc, title, description, price, date, registrationLink }) => {
    return (
        <div className="relative h-full w-full ">
            {/* Background image */}
            <img src="/WorkshopCartridge/bg.svg" alt="Background" className="w-full h-auto" />

            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between">

                <div className="h-[61%] flex justify-center pr-[0.4%]">
                    <div className={`w-[77.4%] h-full rounded-md md:rounded-xl pb-[3%] px-[7.5%] ${styles.innerShadow}`}>
                        {/* poster image */}
                        <img src={imageSrc} alt={title} className="w-full h-full" />
                    </div>
                </div>  
            </div>

            <div className="w-full h-max flex items-center justify-center absolute left-[5%] bottom-2">
                <img src="/barcodeBG.png" alt="Inner box" className="h-auto w-[60%]" />
            </div>

            <div className="w-full h-max flex items-center justify-center absolute top-[60%] ">
                <p    className={`absolute top-[60%] left-[30%] text-black ${styles.title}`}>{title}</p>
            </div>

            <p    className={`absolute top-[75%] left-[30%] text-white ${styles.price}`}>{price}</p>
            <p    className={`absolute top-[84%] left-[30%] text-white ${styles.date}`}>{date}</p>
            <p    className={`absolute top-[92%] left-[30%] text-white border-[0.5px] border-dashed p-1 ${styles.date}`}>Team Size : 5 </p>
            <Link className={`absolute top-[89%] right-[20%] text-white font-bold rounded-[03%] py-[1%] px-[4%] w-max text-ellipsis bg-red-600 ${styles.register}`} href={registrationLink} >REGISTER</Link>
            <div className={`absolute top-[82%] right-[20%] text-white font-bold rounded-[03%] py-[1%] px-[3%] w-max text-ellipsis bg-yellow-600 ${styles.register}`} href={registrationLink} >Learn More</div>

             
            {/* <div className="w-full h-max flex items-center justify-center absolute left-[5%] top-[80%] bottom-0">
                <p    className={`absolute w-[50%] text-white  ${styles.description}`}  >{description.slice(0,100)}...</p>
            </div>  */}

            
        </div>

    );
};

export default Cartridge;

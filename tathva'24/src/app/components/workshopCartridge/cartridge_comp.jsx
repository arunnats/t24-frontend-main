import React from "react";
import styles from "./workshopCartridge.module.css";

const Cartridge = ({ imageSrc, title, description, price, date, registrationLink }) => {
    return (
        <div className="relative">
            {/* Background image */}
            <img src="/WorkshopCartridge/bg.svg" alt="Background" className="w-full h-auto" />

            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between">

                <div className="h-[61%] flex justify-center pr-[0.4%]">
                    <div className={`w-[77.4%] h-full rounded-md md:rounded-xl pb-[3%] px-[7.5%] ${styles.innerShadow}`}>
                        {/* poster image */}
                        <img src={imageSrc} alt={title} className="w-full h-full" />
                    </div>
                </div>

                {/* title */}
                <div className={`h-[12%] flex justify-center items-center text-black font-bold ${styles.titleText}`} >
                    {title}
                </div>


                <div className="h-[27%] w-full flex justify-center pl-[9%]">
                    <div className={`w-[70%] h-full rounded-md md:rounded-xl p-[0.7%] md:p-[0.5%] ${styles.innerShadow}`}>
                        <div className="w-full h-full bg-[#140F0F] rounded-md md:rounded-xl flex justify-between">
                            <div className="w-[95%]">

                                {/* description  */}
                                <div className={`h-[50%] text-white ${styles.plusJakartaFont} pt-[2%] pl-[5%] pr-[2%] ${styles.responsiveText}`}>
                                    {description.slice(0, 200)}{description.length > 200 ? "..." : ""}
                                </div>

                                <div className="h-[50%] flex font-bold text-sm sm:text-sm md:text-2xl lg:text-4xl">
                                    <div className={`w-[30%] h-full`}>
                                        {/* price  */}
                                        <div className={`h-1/2 flex items-center justify-center text-white md:text-3xl lg:text-5xl`}>{price}</div>
                                        {/* date  */}
                                        <div className={`h-1/2 flex justify-center text-[#808080]`}>{date}</div>
                                    </div>

                                    <div className="w-[70%] flex justify-center items-center">
                                        {/* Register button */}
                                        <a href={registrationLink} className={`w-full sm:w-[85%] md:w-[75%] lg:w-[60%]`}>
                                            <button className={`w-full h-full px-4 sm:px-6 md:px-8 py-1 sm:py-2 md:py-1 bg-[#DB162F] text-white font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl rounded-lg md:rounded-xl shadow-md hover:bg-[#B01328]`}>
                                                REGISTER
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[5%] flex justify-center items-center">
                                <img src="/WorkshopCartridge/barcode.svg" alt="Barcode" className="w-[75%] h-[83%]" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartridge;

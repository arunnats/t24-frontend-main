import React from "react";
import Image from 'next/image';
import styles from "./workshopCartridge.module.css";

const Cartridge = ({imageSrc, title}) => {
    return (
        <div className="relative">
            <img 
                src="/WorkshopCartridge/bg.svg"
                alt="Sample Image" 
                className="w-full h-auto" 
            />
            <div className={`absolute top-0 left-0 right-0 bottom-0 text-black flex-col justify-between`}>
                <div className=" h-[61%] flex justify-center pr-[0.4%]">
                    <div className={`w-[77.4%] h-full rounded-md md:rounded-xl pb-[3%] px-[7.5%] ${styles.innerShadow}` }>
                        <div className="h-full w-full bg-red-500">
                            <img 
                                src={imageSrc}
                                alt="Sample Image" 
                                className="w-full h-full" 
                            />
                        </div>
                    </div>
                </div>
                <div className="h-[10%] text-center text-black font-bold text-xl md:text-6xl ">
                    {title}
                </div>
                <div className="h-[29%] w-full flex justify-center pl-[9%]">
                    <div className={`w-[70%] h-full rounded-md md:rounded-xl p-[0.7%] md:p-[0.5%] ${styles.innerShadow}` }>
                        <div className="w-full h-full rounded-md md:rounded-xl flex justify-between" style={{ backgroundColor: '#140F0F' }}>
                            <div className="w-[95%]">
                                <div className="description">

                                </div>
                                <div className="infoandlink">
                                    <div className="pricedate">
                                        <div className="price"></div>
                                        <div className="date"></div>
                                    </div>
                                    <div className="registersection">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="w-[5%] flex justify-center items-center">
                                <img 
                                    src="/WorkshopCartridge/barcode.svg"
                                    alt="Sample Image" 
                                    className="w-[75%] h-[83%]" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartridge;

{/* <div 
            className="w-full h-full bg-no-repeat"
            style={{
                backgroundImage: `url(${background.src})`, 
                backgroundSize: '100% 100%',  // Stretches to fit the div
                backgroundPosition: 'center', 
            }}
        >
            <div className="flex justify-center pt-[0.5%] w-full h-[61%]">
                <div className="w-[76.5%] pb-[3%] flex justify-center border-black">
                    <img
                        className="h-full"
                        src="https://media.istockphoto.com/id/1494550961/vector/3d-synchronization-icon-isolated.jpg?s=612x612&w=0&k=20&c=QTf4vEhXVeFI_MtDXz_4eskQwM3UrlqauZK1Tk0Vwcs="
                        alt="Sample Image"
                    />
                </div>
                
            </div>
            <div className="p-[2%] text-center text-black font-bold">
                DATA SCIENCE
            </div>
            <div>
                register info
            </div>
        </div> */}
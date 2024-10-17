import Image from "next/image";
import Cartridge from "./components/workshopCartridge/cartridge_comp";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-evenly flex-wrap">
      
      <div className="w-[552px] h-[585px]">
      <Cartridge 
        imageSrc="/WorkshopCartridge/workshop.jpg"
        title="DATA SCIENCE"
        price="₹999"
        date="27 OCT"
        registrationLink="https://www.google.com/"
        description="LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AMET DOLOR MAURIS NIBH VIVAMUS VELIT LECTUS. UT FRINGILLA MALESUADA ULLAMCORPER ET JUSTO VARIUS BLANDIT NEQUE MASSA. MASSA PELLENTESQUE VOLUTPAT ET ENIM LAOREET BIBENDUM DICTUMST. CURSUS ETIAM LOREM ID IACULIS ELEMENTUM NISL CURSUS TRISTIQUE ID."
      /> 
      </div>

      <div className="w-[368px] h-[390px]">
      <Cartridge 
        imageSrc="/WorkshopCartridge/workshop.jpg"
        title="DATA SCIENCE"
        price="₹999"
        date="27 OCT"
        registrationLink="https://www.google.com/"
        description="LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AMET DOLOR MAURIS NIBH VIVAMUS VELIT LECTUS. UT FRINGILLA MALESUADA ULLAMCORPER ET JUSTO VARIUS BLANDIT NEQUE MASSA. MASSA PELLENTESQUE VOLUTPAT ET ENIM LAOREET BIBENDUM DICTUMST. CURSUS ETIAM LOREM ID IACULIS ELEMENTUM NISL CURSUS TRISTIQUE ID."
      /> 
      </div>


      <div className="w-[368px] h-[390px]">
      <Cartridge 
        imageSrc="/WorkshopCartridge/workshop.jpg"
        title="DATA SCIENCE"
        price="₹999"
        date="27 OCT"
        registrationLink="https://www.google.com/"
        description="LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AMET DOLOR MAURIS NIBH VIVAMUS VELIT LECTUS. UT FRINGILLA MALESUADA ULLAMCORPER ET JUSTO VARIUS BLANDIT NEQUE MASSA. MASSA PELLENTESQUE VOLUTPAT ET ENIM LAOREET BIBENDUM DICTUMST. CURSUS ETIAM LOREM ID IACULIS ELEMENTUM NISL CURSUS TRISTIQUE ID."
      /> 
      </div>


     
      
      
    </div>
  );
}

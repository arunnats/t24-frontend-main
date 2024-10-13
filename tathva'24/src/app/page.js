import Image from "next/image";
import Cartridge from "./components/workshopCartridge/cartridge_comp";

export default function Home() {
  return (
    <div className="w-full">
      {/* set same w and h to resize */}
      <Cartridge 
        imageSrc="/WorkshopCartridge/workshop.jpg"
        title="DATA SCIENCE"
      /> 
    </div>
  );
}

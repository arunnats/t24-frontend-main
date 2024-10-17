import Image from "next/image";
import Cartridge from "./components/workshopCartridge/cartridge_comp";
import Workshopmodal from "./components/Workshopmodal/Workshopmodal";

export default function Home() {
  return (
    <div className="flex">
      <Workshopmodal/>
    </div>
  );
}

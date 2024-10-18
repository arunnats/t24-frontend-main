import styles from "./page.module.css";
import FooterMobile from "./components/FooterMobile/FooterMobile";
import FooterDesktop from "./components/FooterDesktop/FooterDesktop";
// import Carousal from "./Carousal/Carousal";
import Carousal from "./components/updatedcarousal/page";
import Hero from "./components/Hero/Hero";
import ExpoPage from "./components/expo-page/page";
import ProshowMod from "./components/Proshow/ProshowMod";
import GamingPage from "./components/glitchPage/GamingPage";
import { Analytics } from "@vercel/analytics/react";
// import FooterPC from "./footerpc";

const Page = () => {
  return (
    <div className="h-[800vh] relative overflow-clip bg-black">

      <Hero />
      <Carousal />
      <ProshowMod />
      <GamingPage />
      <ExpoPage />
      <div className="footer h-max w-full absolute bottom-0 left-0">
        <FooterDesktop />
        <FooterMobile />
      </div>
      <Analytics />
    </div>
  );
};

export default Page;

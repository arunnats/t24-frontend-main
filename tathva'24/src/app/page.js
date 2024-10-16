import styles from "./page.module.css";
import FooterMobile from './components/FooterMobile/FooterMobile';
import FooterDesktop from "./components/FooterDesktop/FooterDesktop";
import Carousal from "./Carousal/Carousal";
// import FooterPC from "./footerpc";

const Page = () => {
  return (
    <div className="h-[200vh] relative">
        <Carousal />

      <div className="footer h-max w-full absolute bottom-0 left-0">
        <FooterDesktop />
        <FooterMobile />
      </div>
   </div>
  );
};

export default Page;

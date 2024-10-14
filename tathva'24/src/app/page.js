import styles from "./page.module.css";
import FooterMobile from './components/FooterMobile/FooterMobile';
import FooterDesktop from "./components/FooterDesktop/FooterDesktop";
// import FooterPC from "./footerpc";

const Page = () => {
  return (
    <div className="h-[200vh] relative">
      <div className="footer h-full w-full absolute bottom-0 left-0">
        <FooterDesktop />
      </div>
   </div>
  );
};

export default Page;

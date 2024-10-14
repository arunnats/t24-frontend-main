import styles from "./page.module.css";
import FooterMobile from './components/FooterMobile/FooterMobile';
import FooterDesktop from "./components/FooterDesktop/FooterDesktop";
// import FooterPC from "./footerpc";
import Gaming from'./gaming/page';
const Page = () => {
  return (
    <div>
       <Gaming/>
   </div>
  );
};

export default Page;

import styles from "./page.module.css";
import FooterMobile from "./footermobile";

const Page = () => {
  return (
    <div className="flex flex-col justify-end h-[100vh] box-border overflow-x-hidden">
      <FooterMobile />
    </div>
  );
};

export default Page;

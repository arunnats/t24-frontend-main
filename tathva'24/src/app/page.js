import styles from './page.module.css';

const Footer = () => {
  return (
    <footer className="flex flex-col w-screen bg-gray-700 ">
      <div className="flex flex-col h-[26vh]">
        <div className="flex h-[6vh] ml-20">
          <img src="/metal.svg" alt="My Icon" />
        </div>
        <div className={styles.cont}>
          <div className={styles.c1}>c1</div>
          <div className={styles.c2}>c2</div>
          <div className={styles.c3}>c3</div>
          <div className={styles.c4}>c4</div>
          <div className={styles.c5}>c5</div>
          <div className={styles.c6}>c6</div>
        </div>
      </div>

      <div className="flex  h-[18vh]">
        <div className=" w-[80%] flex  ">
          <img
            src="/table.svg"
            alt="My Icon"
            className="w-full h-full object-fit ml-7"
          />
        </div>
        <div className=" w-[24%] flex items-center justify-center">
          <img
            src="/buttons.svg"
            alt="My Icon"
            className="h-3/5 object-fit ml-8"
          />
        </div>
      </div>

      <div className="flex h-[20vh]">
        <div className=" w-[48%]  flex justify-center items-center">
          <img
            src="/button.svg"
            alt="My Icon"
            className=" h-4/5 object-fit mt-4"
          />
        </div>
        <div className=" w-[42%] flex justify-center items-center border-l-2 ">
          <img
            src="/social_buttons.svg"
            alt="My Icon"
            className=" w-full h-115 object-fit mt-4"
          />
        </div>
        <div className=" w-[10%] flex items-center">
          <img
            src="/borderlights.svg"
            alt="My Icon"
            className="  w-full h-1/2 object-fit"
          />
        </div>
      </div>

      <div className=" h-[10vh] flex justify-center overflow-y-hidden">
        <div className="border-2 border-gray-200 rounded-tr-3xl rounded-tl-3xl w-1/3 h-full object-fit p-2 pt-0.5 border-b-0 ">
          <img
            src="/bottom.svg"
            alt="My Icon"
            className="w-full h-full object-fit"
          />
        </div>
      </div>
    </footer>
  );
};

const Page = () => {
  return (
    <div className="flex flex-col justify-end h-[100vh]">
      <Footer />
    </div>
  );
};

export default Page;

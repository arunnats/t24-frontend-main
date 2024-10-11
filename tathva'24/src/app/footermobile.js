import styles from "./footermobile.module.css";
import Quicklink from "./Quicklinks";

const FooterMobile = () => {
  return (
    <div className="flex flex-col justify-end h-[100vh] box-border relative overflow-y-hidden">
      <div className={styles.foot_mob}>
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-5 object-fit z-5 absolute bottom-4 right-5"
        />
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-5 object-fit z-5 absolute bottom-4 left-5 "
        />
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-5 object-fit z-5 absolute top-4 right-4"
        />
        <img
          src="/screw.svg"
          alt="My Icon"
          className="h-5 object-fit z-5 absolute top-4 left-5"
        />

        <img
          src="/upper1.svg"
          alt="My Icon"
          className="w-[20%] object-fit z-[-6] absolute top-[-12px] right-0"
        />

        <img
          src="/upper2.svg"
          alt="My Icon"
          className="w-[20%] object-fit z-[-2] absolute top-[-12px]  left-0"
        />

        <div className="flex flex-col ">
          <div className="flex w-[90vw] h-[7vh] justify-end relative bottom-1 ">
            <img
              src="/metal.svg"
              alt="My Icon"
              className="h-120 object-fit relative z-2 "
            />
          </div>

          <div className={styles.cont}>
            <div className={styles.c1}>
              <div className="h-1/2  border-b-2"></div>
              <div></div>
            </div>
            <div className={styles.c2}>
              <img
                src="/small_display.svg"
                alt="My Icon"
                className="h-115 object-fit"
              />
            </div>
            <div className={styles.c3}>
              <div className="h-1/2 border-b-2"></div>
              <div></div>
            </div>
            <div className={styles.c4}>
              <img
                src="/speaker.svg"
                alt="My Icon"
                className="h-90  object-fit pb-2"
              />
            </div>
            <div className={styles.c5}></div>
          </div>
        </div>

        <div className="flex mt-6 max-h-44">
          <div className=" w-[79%] h-full flex ml-[7vw] mr-[4vw]">
            
            <Quicklink />
          </div>
          <div className={styles.button}>
            <img
              src="/buttons.svg"
              alt="My Icon"
              className="h-3/5 object-fit "
            />
          </div>
        </div>

        <div className="flex  max-h-44">
          <div className=" w-[47%]  flex justify-center items-center">
            <img
              src="/button.svg"
              alt="My Icon"
              className=" w-full h-4/5 object-fit "
            />
          </div>
          <div className=" w-[45%] flex justify-between items-center border-l-2 ">
            <img
              src="/social_buttons.svg"
              alt="My Icon"
              className=" w-full h-98 object-fit "
            />
          </div>
          <div className=" w-[6%] flex items-center">
            <img
              src="/borderlights.svg"
              alt="My Icon"
              className="  w-full object-fit"
            />
          </div>
        </div>

        <div className="flex justify-center mr-5 overflow-y-hidden">
          <div className="border-2 border-gray-200 rounded-tr-3xl rounded-tl-3xl w-1/3 h-full object-fit p-4 pt-3 border-b-0 ">
            <img
              src="/bottom.svg"
              alt="My Icon"
              className="w-full h-full object-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;

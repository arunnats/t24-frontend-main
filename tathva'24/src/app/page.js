import styles from "./page.module.css";
import Quicklink from "./Quicklinks.js";

const FooterMobile = () => {
  return (
    <div>
      <div className={styles.foot_mob}>
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
            <div className="h-1/2 border-b-2"></div>
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

        <div className="flex mt-4 max-h-44">
          <div className=" w-[79%] h-full flex ml-[7vw]">
            {/* <img
              src="/table.svg"
              alt="My Icon"
              className="w-full h-full object-fit ml-7"
            /> */}
            <Quicklink />
          </div>
          <div className=" w-[21%] flex items-center justify-center">
            <img
              src="/buttons.svg"
              alt="My Icon"
              className="h-3/5 object-fit "
            />
          </div>
        </div>

        <div className="flex  max-h-48 ">
          <div className=" w-[47%]  flex justify-center items-center">
            <img
              src="/button.svg"
              alt="My Icon"
              className=" w-full h-4/5 object-fit "
            />
          </div>
          <div className=" w-[45%] flex justify-center items-center border-l-2 ">
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
              className="  w-full h-1/2 object-fit"
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

      <div className={styles.foot_pc}>
        <div className="flex-5  bg-red-500">fsa</div>
        <div className="flex-4  bg-green-500">afa</div>
        <div className="flex-3  bg-blue-500">af</div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="flex flex-col justify-end h-[100vh] box-border overflow-x-hidden">
      <FooterMobile />
    </div>
  );
};

export default Page;

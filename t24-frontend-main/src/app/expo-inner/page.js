import React from "react";
import Marquee from "../components/InnerPages/marquee/marquee_comp";
import Arrow from "../components/InnerPages/InnerDescription/arrow";
import FooterMobile from "../components/FooterMobile/FooterMobile";
import FooterDesktop from "../components/FooterDesktop/FooterDesktop";
import InnerDescription from "../components/InnerPages/InnerDescription/InnerDescription";
import Link from "next/link";
const page = () => {
  const desc =
    "Metal mayhem in the arena! Witness the clash of steel and sparks at RoboWars - where all the metal enthusiasts are invited to prepare their robots to battle for supremacy in the ultimate mechanical showdown and earn prizes worth 7 lakhs!";

  const date = "26-27th Oct";
  const venue = "Ground";

  return (
    <div className="w-full h-[232vh] md:h-[208vh] relative overflow-hidden ">
      <div className="h-screen">
        <div className="w-full h-[15%] lg:h-[20%] flex justify-between items-center p-2 ">
          <div className="m-2 h-full w-full p-2 rounded  ">
            <Marquee
              element1={"student "}
              element2={"expo "}
              color1={"#DD6F2A"}
              color2={"#DD6F2A"}
            />
          </div>
        </div>

        {/* desktop */}
        <div className="w-full hidden h-[40%] lg:flex justify-around items-center p-2 ">
          <div className="w-[50%] h-full pl-10 mt-5">
            <div className="relative flex h-min justify-center items-center xl:mt-[2rem] lg:mt-[1rem] md:mt-[0.8rem] sm:mt-[0.7rem] mt-[0.6rem]">
              <img
                src="/left_top.jpeg"
                alt="idk"
                className="absolute  top-0    left-0  xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6"
              />
              <img
                src="/right_top.jpeg"
                alt="idk"
                className="absolute  top-0    right-0 xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6"
              />
              <img
                src="/right_bottom.jpeg"
                alt="idk"
                className="absolute  bottom-0 right-0 xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6"
              />
              <img
                src="/left_bottom.jpeg"
                alt="idk"
                className="absolute  bottom-0 left-0  xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6"
              />

              <div
                className={`prize flex flex-col justify-center py-[5%] px-[5%] z-0`}
              >
                <div className="head  xl:text-[2.5rem] lg:text-[3rem] md:text-[2rem] text-[1rem] text-white flex justify-center border-b-2  font-pricedown">
                  Register Now
                </div>
                <div className="bod flex flex-col xl:py-4 lg:py-2 py-[10px] pb-0 text-white 2xl:text-[1.08rem] xl:text-[0.85rem] lg:text-[0.68rem] md:text-[0.7rem] text-[0.7rem] justify-between">
                  <div className="date whitespace-normal flex justify-between">
                    <span className="font-presstart">{"Date:"}</span>
                    <span
                      className={`place font-presstart text-right text-[#DD6F2A] inline-block w-[100%]`}
                    >
                      {date}
                    </span>
                  </div>
                  <div className="rt whitespace-normal flex justify-between">
                    <span className="venue font-presstart ">{"Venue: "} </span>
                    <span
                      className={`place font-presstart text-right text-[#DD6F2A] inline-block w-[60%]`}
                    >
                      {venue}
                    </span>
                  </div>
                </div>
                {/* square boxes */}
                <div className="flex justify-center space-x-1">
                  <div className="h-4 w-4 border-2 border-white"></div>
                  <div className="h-4 w-4 border-2 border-white"></div>
                  <div className="h-4 w-4 border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-3 ml-0 h-full w-[61%] p-2 rounded flex justify-end">
            <div className="w-[95%] h-full border-4 border-white rounded-2xl overflow-clip relative transform transition-transform duration-300 hover:translate-y-[-5px] object-cover">
              <img
                src={"/grid/expo.webp"}
                className="object-cover absolute bottom-0 fill h-full w-full "
              />
            </div>
          </div>
        </div>

        <div className=" h-[57%] hidden lg:flex justify-between items-center p-2 ">
          <div className="h-full w-[60%] rounded">
            <InnerDescription num="05" heading="About" text={desc} />
          </div>
          <div className="m-2 h-full w-[39%] p-2 rounded flex flex-col justify-between items-center ">
            <div className="w-full h-[49%] m-1 flex justify-between">
              <Link
                href={"./drone-racing"}
                className="w-[49%] border-4 border-white rounded-2xl overflow-clip relative transform transition-transform duration-300 hover:translate-y-[-5px]"
              >
                {" "}
                <p className="w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center text-pricedown">
                  Drone Racing
                </p>{" "}
                <img
                  src={"/grid/drone.webp"}
                  style={{ fontFamily: '"Pricedown", sans-serif' }}
                  className=" object-cover fill h-full w-full "
                />
              </Link>
              <Link
                href={"./automotive-summit"}
                className="w-[49%] border-4 border-white rounded-2xl overflow-clip relative transform transition-transform duration-300 hover:translate-y-[-5px]"
              >
                {" "}
                <p className="w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center text-pricedown">
                  Automotive Summit
                </p>{" "}
                <img
                  src={"/grid/red_car.jpg "}
                  style={{ fontFamily: '"Pricedown", sans-serif' }}
                  className=" object-cover fill h-full w-full "
                />
              </Link>
            </div>
            <div className="w-full h-[49%] m-1 flex justify-between">
              <Link
                href={"./glitch-inner"}
                className="w-[49%] border-4 border-white rounded-2xl overflow-clip relative transform transition-transform duration-300 hover:translate-y-[-5px]"
              >
                {" "}
                <p className="w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center text-pricedown">
                  Glitch
                </p>{" "}
                <img
                  src={"/grid/arcade.jpg"}
                  style={{ fontFamily: '"Pricedown", sans-serif' }}
                  className=" object-cover fill h-full w-full "
                />
              </Link>
              <Link
                href={"./proshow"}
                className="w-[49%] border-4 border-white rounded-2xl overflow-clip relative transform transition-transform duration-300 hover:translate-y-[-5px]"
              >
                {" "}
                <p className="w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center text-pricedown">
                  Proshow
                </p>{" "}
                <img
                  src={"/grid/concert.webp"}
                  style={{ fontFamily: '"Pricedown", sans-serif' }}
                  className=" object-cover fill h-full w-full "
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="w-full lg:hidden h-full flex flex-col justify-between items-center p-2">
          <div className="w-[90%] ">
            <div className="relative flex h-min justify-center items-center xl:mt-[2rem] lg:mt-[1rem] md:mt-[0.8rem] sm:mt-[0.7rem] mt-[0.6rem]">
              <img
                src="/left_top.jpeg"
                alt="idk"
                className="absolute  top-0    left-0  xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6"
              />
              <img
                src="/right_top.jpeg"
                alt="idk"
                className="absolute  top-0    right-0 xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6"
              />
              <img
                src="/right_bottom.jpeg"
                alt="idk"
                className="absolute  bottom-0 right-0 xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6"
              />
              <img
                src="/left_bottom.jpeg"
                alt="idk"
                className="absolute  bottom-0 left-0  xl:w-20 xl:h-20 lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6"
              />

              <div
                className={`prize flex flex-col justify-center py-[3%] px-[3%] z-0`}
              >
                <div className="head  xl:text-[2.5rem] lg:text-[3rem] md:text-[2rem] text-[2rem] text-white flex justify-center border-b-2  font-pricedown">
                  Register Now
                </div>
                <div className="bod flex flex-col xl:py-4 lg:py-2 py-[10px] pb-0 text-white 2xl:text-[1.08rem] xl:text-[0.85rem] lg:text-[0.68rem] md:text-[0.7rem] text-[0.7rem] justify-between">
                  <div className="date whitespace-normal flex justify-between">
                    <span className="font-presstart">{"Date:"}</span>
                    <span
                      className={`place font-presstart text-right text-[#DD6F2A] inline-block w-[100%]`}
                    >
                      {date}
                    </span>
                  </div>
                  <div className="rt whitespace-normal flex justify-between">
                    <span className="venue font-presstart ">{"Venue: "} </span>
                    <span
                      className={`place font-presstart text-right text-[#DD6F2A] inline-block w-[60%]`}
                    >
                      {venue}
                    </span>
                  </div>
                </div>
                {/* square boxes */}
                <div className="flex justify-center space-x-1">
                  <div className="h-4 w-4 border-2 border-white"></div>
                  <div className="h-4 w-4 border-2 border-white"></div>
                  <div className="h-4 w-4 border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-2 h-[100%] w-full rounded flex items-center justify-center ">
            <div className="w-[99%] h-full border-4 border-white rounded-3xl overflow-clip relative transform transition-transform duration-300 hover:translate-y-[-5px] object-cover mt-3">
              <img
                src={"/grid/expo.webp"}
                className="object-cover absolute bottom-0 fill h-full w-full "
              />
            </div>
          </div>

          <div className="m-2 h-[75%] w-full rounded flex flex-col items-center justify-center ">
            <div className="w-full h-[49%] m-1 flex justify-between">
              <Link
                href={"./proshow"}
                className="w-[49%] border-4 border-white rounded-2xl overflow-clip relative transform transition-transform duration-300 hover:translate-y-[-5px]"
              >
                {" "}
                <p className="w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center text-pricedown ">
                  Proshow
                </p>{" "}
                <img
                  src={"/grid/concert.webp"}
                  className=" object-cover fill h-full w-full "
                />
              </Link>
              <Link
                href={"./automotive-summit"}
                className="w-[49%] border-4 border-white rounded-2xl overflow-clip relative transform transition-transform duration-300 hover:translate-y-[-5px]"
              >
                {" "}
                <p className="w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center text-pricedown">
                  Automotive Summit
                </p>{" "}
                <img
                  src={"/grid/red_car.jpg"}
                  className=" object-cover fill h-full w-full "
                />
              </Link>
            </div>
            <div className="w-full h-[49%] m-1 flex justify-between">
              <Link
                href={"./glitch-inner"}
                className="w-[49%] border-4 border-white rounded-2xl overflow-clip relative transform transition-transform duration-300 hover:translate-y-[-5px]"
              >
                {" "}
                <p className="w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center text-pricedown">
                  Glitch
                </p>{" "}
                <img
                  src={"/grid/arcade.jpg"}
                  className=" object-cover fill h-full w-full "
                />
              </Link>
              <Link
                href={"./drone-racing"}
                className="w-[49%] border-4 border-white rounded-2xl overflow-clip relative transform transition-transform duration-300 hover:translate-y-[-5px]"
              >
                {" "}
                <p className="w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center text-pricedown">
                  Drone Racing
                </p>{" "}
                <img
                  src={"/grid/drone.webp"}
                  className=" object-cover fill h-full w-full "
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="h-[32%] md:hidden rounded p-2 pt-0">
          <InnerDescription num="02" heading="About" text={desc} />
        </div>

        {/* Mobile */}
        {/* <div className='w-full h-[35%] lg:hidden flex justify-between items-center p-2 '>
          <div className='m-2 bg-white h-full w-full p-2 rounded-2xl border-1 border-black flex flex-col justify-between items-center '>
            <div className='w-[90%] h-[19%] flex justify-between px-6 border-black border-b-[1px] '><p className='text-5xl'>03</p><p className='text-2xl'>About</p></div>
            <div className='w-[90%] h-[79%]  '>
              <p className='text-lg relative h-full  '>{desc}
              <span className='absolute bottom-0 right-0 h-[20%] m-4 aspect-square '><Arrow /></span>
                </p> 
               
            </div>
          </div>
        </div> */}
      </div>
      <div className="footer h-max w-full absolute bottom-0 left-0">
        <FooterDesktop />
        <FooterMobile />
      </div>
    </div>
  );
};

export default page;

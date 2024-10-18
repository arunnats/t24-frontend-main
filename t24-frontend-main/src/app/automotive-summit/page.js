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

  return (
    <div className="w-full h-[200vh] md:h-[220vh] relative overflow-hidden ">
      <div className="h-screen">
        <div className="w-full h-[15%] lg:h-[20%] flex justify-between items-center p-2 ">
          <div className="m-2 h-full w-full p-2 rounded  ">
            <Marquee
              element1={"automotive "}
              element2={"summit "}
              color1={"#b70202"}
              color2={"#0a0a00"}
            />
          </div>
        </div>

        {/* desktop */}
        <div className="w-full hidden h-[60%] lg:flex justify-between items-center p-2 ">
          <div className="m-2 h-full w-[38%] p-2 rounded flex flex-col justify-between items-center ">
            <div className="w-full h-[49%] m-1 flex justify-between">
              <Link
                href={"./expo-inner"}
                className="w-[49%] border-4 border-white rounded-2xl overflow-clip relative transform transition-transform duration-300 hover:translate-y-[-5px] "
              >
                {" "}
                <p className="w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center text-pricedown">
                  Student Expo
                </p>{" "}
                <img
                  src={"/grid/expo.webp"}
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
            </div>
          </div>
          <div className="m-2  h-full w-[61%] p-2 rounded  ">
            <div className="w-[99%] h-full border-4 border-white rounded-2xl overflow-clip relative transform transition-transform duration-300 hover:translate-y-[-5px] object-cover">
              <img
                src={"/grid/red_car.jpg"}
                className="object-cover absolute bottom-0 fill h-full w-full "
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="w-full lg:hidden h-[70%] flex flex-col justify-between items-center p-2 ">
          <div className="m-2 h-[58%] w-full rounded flex items-center justify-center">
            <div className="w-[99%] h-full border-4 border-white rounded-3xl overflow-clip relative transform transition-transform duration-300 hover:translate-y-[-5px] object-cover">
              <img
                src={"/grid/red_car.jpg"}
                className="object-cover absolute bottom-0 fill h-full w-full "
              />
            </div>
          </div>

          <div className="m-2 h-[75%] w-full rounded flex flex-col items-center justify-center">
            <div className="w-full h-[49%] m-1 flex justify-between">
              <Link
                href={"./expo-inner"}
                className="w-[49%] border-4 border-white rounded-2xl overflow-clip relative transform transition-transform duration-300 hover:translate-y-[-5px]"
              >
                {" "}
                <p className="w-full h-[15%] absolute bottom-0 bg-black bg-opacity-65 z-10 text-white flex justify-center items-center text-pricedown ">
                  Student Expo
                </p>{" "}
                <img
                  src={"/grid/expo.webp"}
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

        <div className="w-full h-[30%]  md:h-[40%] flex justify-between items-center px-5">
          <div className="h-full w-full rounded">
            <InnerDescription num="01" heading="About" text={desc} />
          </div>
        </div>
      </div>
      <div className="footer h-max w-full absolute bottom-0 left-0">
        <FooterDesktop />
        <FooterMobile />
      </div>
    </div>
  );
};

export default page;

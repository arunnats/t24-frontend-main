"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Navbar_mob from "./navbar_mob";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to track if the screen is mobile

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1075); // Adjust based on your breakpoint
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="relative ">
      {/* Check if the screen is mobile */}
      {isMobile ? (
        <Navbar_mob />
      ) : (
        <>
          {/* Hamburger Icon for larger screens */}
          {!isOpen && ( // Only show the hamburger if the menu is closed
            <button
              className="text-white p-2 fixed top-5 right-5 z-[1000]"
              style={{ fontSize: "2rem" }}
              onClick={toggleMenu}
            >
              {/* Replace text icon with SVG */}
              <img
                src="/hamburgerIcon.svg" // Path to your SVG
                alt="Menu"
                style={{ width: "60px", height: "60px" }} // Adjust size if needed
              />
            </button>
          )}

          {/* Slide Down Menu */}
          <div
            className={`fixed inset-0 z-[1000] transition-transform ease-in-out ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="h-screen flex items-center justify-center relative">
              <div
                className="absolute inset-0"
                // style={{
                //   backgroundImage: "url('/navbar_bg.svg')",
                //   filter: "blur(4px)",
                //   backgroundSize: "cover",
                //   backgroundPosition: "center",
                // }}
                style={{
                  WebkitBackdropFilter: "blur(14px)",
                  backdropFilter: "blur(14px)",
                }}
              ></div>

              <div className="md:ml-0 w-full lg:ml-40 p-4 flex flex-col md:flex-row gap-5 md:gap-11 mt-28 mb-28 mr-24 z-[1000]">
                <div className="flex justify-between items-start">
                  <button
                    onClick={toggleMenu}
                    className="text-6xl w-25 border-none bg-white text-black p-1"
                    style={{ fontWeight: "100", width: "64px", height: "64px" }}
                  >
                    X
                  </button>
                </div>

                <div
                  className={`grid grid-cols-2 gap-x-36 gap-y-5 text-black font-['ValorantFont'], sans-serif ${styles.val}`}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.label}
                      label={item.label}
                      backgroundImage={item.backgroundImage}
                      link={item.link}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const MenuItem = ({ label, backgroundImage, link }) => {
  return (
    <Link href={link} className="relative group">
      <div>
        <div
          className="bg-white flex items-center justify-left pl-5"
          style={{ width: "400px", height: "64px" }}
        >
          <span className="text-4xl font-medium">{label}</span>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-0 group-hover:cursor-pointer group-hover:opacity-100 transition-opacity"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      ></div>
    </Link>
  );
};

const menuItems = [
  { label: "HOME", backgroundImage: "/homebg.svg", link: "/" },
  {
    label: "WORKSHOPS",
    backgroundImage: "/workshopbg.svg",
    link: "/workshops",
  },
  { label: "EXPO", backgroundImage: "/expobg.svg", link: "/expo" },
  { label: "EVENTS", backgroundImage: "/eventbg.svg", link: "/events" },
  { label: "LECTURES", backgroundImage: "/lectbg.svg", link: "/lectures" },
  { label: "PROSHOW", backgroundImage: "/proshowbg.svg", link: "/proshow" },
  { label: "SPONSORS", backgroundImage: "/sponsorsNav.png", link: "/sponsors" },
  { label: "SCHEDULE", backgroundImage: "", link: "/schedule" },
  // {
  //   label: "ACCOMMODATION",
  //   backgroundImage: "/dronebg.svg",
  //   link: "/accommodation",
  // },
  {
    label: "DRONE RACING",
    backgroundImage: "/dronebg.svg",
    link: "/drone-racing",
  },
  
  // {
  //   label: "CERTIFICATES",
  //   backgroundImage: "/dronebg.svg",
  //   link: "/certificates",
  // },
  { label: "FAQ", backgroundImage: "/faqbg.svg", link: "/faq" },
  // {
  //   label: "COMPETITIONS",
  //   backgroundImage: "/compbg.svg",
  //   link: "/events",
  // },
  // { label: "TEAMS", backgroundImage: "/teamsbg.svg", link: "/teams" },
  { label: "WHEELS", backgroundImage: "/wheelsbg.svg", link: "/wheels" },
  // { label: "CONTACTS", backgroundImage: "/contactsbg.svg", link: "/contacts" },
  {
    label: "GLITCH",
    backgroundImage: "/glitchnavbar.svg",
    link: "/glitch",
  },
];

export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { FiUser } from "react-icons/fi";
import { GoProjectSymlink } from "react-icons/go";
import { LuMessageSquareText } from "react-icons/lu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logo from "../../assets/logo.png";
import { motion } from "motion/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useGSAP(() => {
    let t1 = gsap.timeline();
    t1.from("#logo", {
      y: -100,
      duration: 1,
      opacity: 0,
    });
    t1.from(".desktopmenu ul li", {
      scale: 0.2,
      duration: 0.4,
      opacity: 0,
      stagger: 1,
    });
  });

  return (
    <div id="navbar" className="font-[font1] relative">
      <div className="h-54 fixed -mt-72 w-full z-[2000]"></div>
      <div className="fixed top-0 z-[3000] bg-transparent backdrop-blur-md w-full h-22">
        <img id="logo" src={logo} className="h-24 -mt-1" />
      </div>

      <div
        id="left-side"
        className="desktopmenu z-10 hidden md:block ml-4 pt-5 fixed"
      >
        <ul className="flex flex-col gap-2 items-start justify-center h-full w-full">
          <Link
            to="home"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            <li className="group cursor-pointer">
              <h1 className="flex items-center bg-[#e7e9ef] text-[#565e66] hover:bg-[#0563bb] hover:text-white rounded-full h-[3.6rem] px-4 py-3 w-[3.6rem] group-hover:w-[7.4rem] transition-all duration-300 overflow-hidden">
                <TiHomeOutline className="text-xl flex-shrink-0 ml-[0.2rem]" />
                <span className="ml-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Home
                </span>
              </h1>
            </li>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            <li className="group cursor-pointer">
              <h1 className="flex items-center bg-[#e7e9ef] text-[#565e66] hover:bg-[#0563bb] hover:text-white rounded-full h-[3.6rem] px-4 py-3 w-[3.6rem] group-hover:w-[7.4rem] transition-all duration-300 overflow-hidden">
                <FiUser className="text-xl flex-shrink-0 ml-[0.2rem]" />
                <span className="ml-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  About
                </span>
              </h1>
            </li>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            <li className="group cursor-pointer">
              <h1 className="flex items-center  bg-[#e7e9ef] text-[#565e66] hover:bg-[#0563bb] hover:text-white rounded-full h-[3.6rem] px-4 py-3 w-[3.6rem] group-hover:w-[7.4rem] transition-all duration-300 overflow-hidden">
                <GoProjectSymlink className="text-xl flex-shrink-0 ml-[0.2rem]" />
                <span className="ml-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Projects
                </span>
              </h1>
            </li>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            <li className="group cursor-pointer">
              <h1 className="flex items-center bg-[#e7e9ef] text-[#565e66] hover:bg-[#0563bb] hover:text-white rounded-full h-[3.6rem] px-4 py-3 w-[3.6rem] group-hover:w-[7.3rem] transition-all duration-300 overflow-hidden">
                <LuMessageSquareText className="text-xl flex-shrink-0 ml-[0.2rem]" />
                <span className="ml-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Contact
                </span>
              </h1>
            </li>
          </Link>
        </ul>
      </div>

      <div
        className="md:hidden right-5 top-5 text-3xl cursor-pointer fixed h-full z-[3000]"
        onClick={toggleMenu}
      >
        {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
      </div>

      {menuOpen && (
        <motion.div
          id="left-side"
          className="mobilemenu md:hidden z-30 h-screen min-w-[60%] bg-white flex items-center justify-center fixed"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ul className="flex flex-col gap-2 items-center justify-center">
            <Link
              to="home"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              <li className="text-[1.2rem] cursor-pointer">
                <h1 className="h-[3.5rem] px-[12vw] flex items-center justify-start gap-2 rounded-full text-#566068 bg-sky-100 text-start">
                  <TiHomeOutline />
                  <span>Home</span>
                </h1>
              </li>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              <li className="text-[1.2rem] cursor-pointer">
                <h1 className="h-[3.5rem] px-[12vw]  flex items-center justify-start gap-2 rounded-full text-#566068 bg-sky-100 text-start">
                  <FiUser />
                  <span>About</span>
                </h1>
              </li>
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              <li className="text-[1.2rem] cursor-pointer">
                <h1 className="h-[3.5rem] px-[11vw] flex items-center justify-start gap-2 rounded-full text-#566068 bg-sky-100 text-start">
                  <GoProjectSymlink />
                  <span>Projects</span>
                </h1>
              </li>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              <li className="text-[1.2rem] cursor-pointer">
                <h1 className="h-[3.5rem] px-[11vw] flex items-center justify-start gap-2 rounded-full text-#566068 bg-sky-100 text-start">
                  <LuMessageSquareText />
                  <span>Contact</span>
                </h1>
              </li>
            </Link>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

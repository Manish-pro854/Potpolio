import React from "react";
import "./Home.css";
import { TiHomeOutline } from "react-icons/ti";
import { FiUser } from "react-icons/fi";
import { GoProjectSymlink } from "react-icons/go";
import { LuMessageSquareText } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div id="home" className="h-screen w-full">

      <div className="relative h-full w-full bg-[url(https://wallpapercave.com/wp/wp9517084.jpg)] bg-cover opacity-[0.2]">
      </div>

      <div className="absolute top-[0%] md:top-[25%] flex md:gap-45 h-full w-full">


        <div id="left-side" className="desktopmenu z-10 hidden md:block ml-4">

          <ul className="flex flex-col gap-2 items-center justify-center fixed">
            <Link
              to="home"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              <li className="text-[1.5rem] p-[1.2rem] rounded-full text-#566068 bg-sky-100 cursor-pointer">
                <TiHomeOutline />
              </li>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              <li className="text-[1.5rem] p-[1.2rem] rounded-full text-#566068 bg-sky-100 cursor-pointer">
                <FiUser />
              </li>
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              <li className="text-[1.5rem] p-[1.2rem] rounded-full text-#566068 bg-sky-100 cursor-pointer">
                <GoProjectSymlink />
              </li>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              <li className="text-[1.5rem] p-[1.2rem] rounded-full text-#566068 bg-sky-100 cursor-pointer">
                <LuMessageSquareText />
              </li>
            </Link>
          </ul>
        </div>


        {/* <div className="hamburger">
          <RxHamburgerMenu />
        </div>

        <div className="closenav h-full w-full">
          <IoClose />
        </div> */}



        {/* <div id="left-side" className="mobilemenu">
          <ul className="flex flex-col gap-2 items-center justify-center fixed">
            <Link
              to="home"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              <li className="text-[1.5vw] p-[1.45vw] rounded-full text-#566068 bg-sky-100 cursor-pointer">
                <TiHomeOutline />
              </li>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              <li className="text-[1.5vw] p-[1.45vw] rounded-full text-#566068 bg-sky-100 cursor-pointer">
                <FiUser />
              </li>
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              <li className="text-[1.5vw] p-[1.45vw] rounded-full text-#566068 bg-sky-100 cursor-pointer">
                <GoProjectSymlink />
              </li>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              <li className="text-[1.5vw] p-[1.45vw] rounded-full text-#566068 bg-sky-100 cursor-pointer">
                <LuMessageSquareText />
              </li>
            </Link>
          </ul>
        </div> */}


        <div id="right-side" className="h-full w-full flex flex-col items-center justify-center text-center md:items-start md:-mt-[31vh]">
          <h2 className="text-[3.9rem] font-[font1] font-[800] text-[#46505a]">
            Manish
          </h2>
          <h4 className="text-[1.5rem] font-[font1] font-[500] text-[#46505a] mb-3">
            Frontend-focused || CSE Student
          </h4>
          <h3 className="text-[1.8rem] font-[font1] font-[500] text-[#46505a] mb-6">
            I'm <span className="text-blue-700">
               <Typewriter
              words={["React Developer","JavaScript Enthusiast","Frontend Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={70}
              delaySpeed={2000}
            />
            </span>
          </h3>
          <ul className="flex gap-5 mb-6">
            <li className="text-[2rem] bg-transparent text-[#45505a]">
              <IoLogoLinkedin />
            </li>
            <li className="text-[2rem] bg-transparent text-[#45505a]">
              <FaTwitter />
            </li>
            <li className="text-[2rem] bg-transparent text-[#45505a]">
              <FaInstagram />
            </li>
            <li className="text-[2rem] bg-transparent text-[#45505a]">
              <FaGithub />
            </li>
          </ul>
          <button className="flex justify-center items-center gap-1 text-[1.5rem] text-white py-2 px-4 bg-[#0d6efd] rounded-lg outline-0">
            <IoSearch className="text-[1.7rem]" />
            View Resume
          </button>
        </div>

        </div>

    </div>
  );
};

export default Home;

// Using npm install react-scroll for makig navbar

// for automatic typing effect use library = npm i react-typing-effect
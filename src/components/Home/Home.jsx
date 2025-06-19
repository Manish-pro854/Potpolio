import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div id="home" className="h-screen w-full font-[font1]">

      <div className="relative h-full w-full bg-[url(https://wallpapercave.com/wp/wp9517084.jpg)] bg-cover opacity-[0.2]">
      </div>

      <div className="flex md:gap-45 h-full w-full absolute top-[0%] md:top-[25%]">

         <Navbar/>

        <div id="right-side" className="h-full w-full flex flex-col items-center justify-center text-center md:items-start md:-mt-48 lg:-mt-40">
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

// for automatic typing effect use library = npm i react-typing-effect

// <div className=" flex md:gap-45 h-full w-full absolute top-[0%] md:top-[25%]">
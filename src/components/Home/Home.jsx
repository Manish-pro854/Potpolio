import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../Navbar/Navbar";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div id="home" className="h-screen w-full font-[font1]">
      <div className="relative h-full w-full bg-[url(https://wallpapercave.com/wp/wp9517084.jpg)] bg-cover opacity-[0.2]"></div>

      <div className="flex md:gap-45 h-full w-full absolute top-[0%] md:top-[25%]">
        <Navbar />

        <motion.div
          id="right-side"
          className="h-full w-full flex flex-col items-center justify-center text-center md:items-start md:-mt-48 lg:-mt-40 md:-ml-20"
          initial={{
            opacity: 0,
            scale: 0.2,
          }}
          animate={{
            opacity: 1,
            scale: 0.8,
          }}
          transition={{
            duration: 1.3,
            delay: 0.1,
          }}
        >
          <h2 className="text-[5rem] font-[font1] font-[800] text-[#46505b]">
            Manish
          </h2>
          <h4 className="text-[2rem] font-[font1] font-[500] text-[#46505a] mb-3">
            Frontend-focused || CSE Student
          </h4>
          <h3 className="text-[2.1rem] font-[font1] font-[500] text-[#46505a] mb-6">
            I'm{" "}
            <span className="text-[#0763b8]">
              <Typewriter
                words={[
                  "React Developer",
                  "JavaScript Enthusiast",
                  "Frontend Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>
          </h3>
          <ul className="flex gap-7 mb-7">
            <li className="text-[2.2rem] bg-transparent text-[#46505a] outline-none">
              <a
                href="https://www.linkedin.com/in/manish-ahlawat-16514925a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin className="hover:text-[#0d6efd] transition-all duration-400" />
              </a>
            </li>
            <li className="text-[2.2rem] bg-transparent text-[#46505a] outline-none">
              <a
                href="https://x.com/ManishSoftEngg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-[#0d6efd] transition-all duration-400" />
              </a>
            </li>
            <li className="text-[2.2rem] bg-transparent text-[#46505a] outline-none">
              <a
                href="https://www.instagram.com/minku_ahlawat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-[#0d6efd] transition-all duration-400" />
              </a>
            </li>
            <li className="text-[2.2rem] bg-transparent text-[#46505a] outline-none">
              <a
                href="https://github.com/Manish-pro854"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-[#0d6efd] transition-all duration-400 ml-[0.1rem]" />
              </a>
            </li>
          </ul>
          <a href="/Manish_resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="flex justify-center items-center gap-1 text-[1.5rem] text-[#fcffff] py-2 px-4 bg-[#0d6efd] rounded-lg outline-0 hover:bg-blue-700 transition-all duration-500 cursor-pointer">
              <IoSearch className="text-[1.7rem]" />
              View Resume
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

// // for automatic typing effect use library = npm i react-typing-effect

// // <div className=" flex md:gap-45 h-full w-full absolute top-[0%] md:top-[25%]">

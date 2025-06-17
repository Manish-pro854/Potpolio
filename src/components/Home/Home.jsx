import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { FiUser } from "react-icons/fi";
import { GoProjectSymlink } from "react-icons/go";
import { LuMessageSquareText } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Home = () => {
  return (
    <div id="home" className="h-screen bg-white">
      <div className="relative h-full w-full bg-[url(https://wallpapercave.com/wp/wp9517084.jpg)] bg-cover opacity-[0.2]"></div>

      <div className="absolute top-42 pl-4 flex justify-center items-start gap-28">
        <div id="left-side" className="">
          <ul className="flex flex-col gap-2 items-center justify-center">
            <li className="text-[1.5vw] p-[1.45vw] rounded-full text-white bg-blue-700">
              <TiHomeOutline />
            </li>
            <li className="text-[1.5vw] p-[1.45vw] rounded-full text-white bg-blue-700">
              <FiUser />
            </li>
            <li className="text-[1.5vw] p-[1.45vw] rounded-full text-white bg-blue-700">
              <GoProjectSymlink />
            </li>
            <li className="text-[1.5vw] p-[1.45vw] rounded-full text-white bg-blue-700">
              <LuMessageSquareText />
            </li>
          </ul>
        </div>
        <div id="right-side" className="-mt-9">
          <h2 className="text-[5vw] font-[font1] font-[800] text-[#46505a]">
            Manish
          </h2>
          <h4 className="text-[2vw] font-[font1] font-[500] text-[#46505a]">
            Frontend-focused || CSE Student
          </h4>
          <h3 className="text-[2.2vw] font-[font1] font-[500] text-[#46505a]">
            I'm <span className="text-blue-700">React Developer</span>
          </h3>
          <ul className="flex gap-5">
            <li className="text-[2vw] bg-transparent text-[#45505a]">
              <IoLogoLinkedin />
            </li>
            <li className="text-[2vw] bg-transparent text-[#45505a]">
              <FaTwitter />
            </li>
            <li className="text-[2vw] bg-transparent text-[#45505a]">
              <FaInstagram />
            </li>
            <li className="text-[2vw] bg-transparent text-[#45505a]">
              <FaGithub />
            </li>
          </ul>
          <button className="flex justify-center items-center text-white p-3 bg-[#0d6efd] rounded-lg">
            <IoSearch />
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

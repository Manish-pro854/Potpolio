import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#f7f8fa] font-[font1]">
      <div className="pt-5 text-center">
        <h1 className="text-[3rem] font-[800] text-[#46505a]">Manish</h1>
        <p className="text-[1rem] font-[400] text-[#27282a] mx-8">
          Thank you for stopping by and reaching at this point, please know more
          about me by connecting with me on any of the social media platform.
        </p>
        <ul className="flex gap-4 items-center justify-center mt-8">
          <a
            href="https://www.linkedin.com/in/manish-ahlawat-16514925a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-[1rem] text-white p-3 rounded-full bg-[#0563bc] hover:bg-blue-500 transition-all duration-500  outline-none">
              <FaLinkedinIn />
            </li>
          </a>
          <a
            href="https://github.com/Manish-pro854"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-[1rem] text-white p-3 rounded-full bg-[#0563bc] hover:bg-blue-500 transition-all duration-500 outline-none">
              <FaGithub />
            </li>
          </a>
          <a
            href="https://www.instagram.com/minku_ahlawat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-[1rem] text-white p-3 rounded-full bg-[#0563bc] hover:bg-blue-500 transition-all duration-500 outline-none">
              <FaInstagram />
            </li>
          </a>
          <a
            href="https://x.com/ManishSoftEngg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-[1rem] text-white p-3 rounded-full bg-[#0563bc] hover:bg-blue-500 transition-all duration-500 outline-none">
              <FaTwitter />
            </li>
          </a>
        </ul>
        <h2 className="text-[0.9rem] font-[400] text-[#46505b] mt-6 pb-8">
          © Copyright <span className="font-[700]">MyResume.</span>
          {"  "} All Rights Reserved
        </h2>
      </div>
    </div>
  );
};

export default Footer;

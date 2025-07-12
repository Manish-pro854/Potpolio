import React from "react";


import { FaArrowRightLong } from "react-icons/fa6";

const ProjectCard = ({ image, title, discription, link }) => {
  return (
    <div className="w-[18rem] rounded-2xl shadow-lg shadow-[#999] m-[0.2rem] h-fit bg-white -ml-2 md:ml-0">
      <img src={image} className="w-[100%] h-[13rem] rounded-2xl p-1 bg-[#efe8e8]" />
      <h1 className="m-2 text-center text-3xl font-[500] text-[#517293]">{title}</h1>
      <p className="text-center text-xl font-[400] pb-3 text-[#27282a]">{discription}</p>
      <a href={link} className="flex items-center justify-center mb-2">
        <button className="flex items-center justify-center p-2 gap-2 rounded-md text-white bg-[#0563bc] hover:bg-blue-500 transition-all duration-500 mb-4 cursor-pointer">
          Learn More <FaArrowRightLong />
        </button>
      </a>
    </div>
  );
};

export default ProjectCard;

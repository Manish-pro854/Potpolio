import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";

const ProjectCard = ({ image, title, discription, link }) => {
  return (
    <div className="w-[18rem] rounded-2xl shadow-lg shadow-[#999] m-[0.2rem] h-fit bg-white">
      <img src={image} className="w-[100%] h-[15rem] rounded-t-2xl" />
      <h1 className="m-2 text-center text-3xl font-[500]">{title}</h1>
      <p className="text-center text-xl font-[400] pb-3">{discription}</p>
      <a href={link} className="flex items-center justify-center mb-2">
        <button className="flex items-center justify-center p-2 gap-2 bg-blue-500 rounded-md text-white">
          Learn More <FaArrowRightLong />
        </button>
      </a>
    </div>
  );
};

export default ProjectCard;

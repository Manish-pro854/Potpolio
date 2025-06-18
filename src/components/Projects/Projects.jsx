import React from "react";
import { FaGears } from "react-icons/fa6";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import ProjectCard from "../Card/ProjectCard";

const Projects = () => {
  return (

    <div id="projects" className="grid grid-cols-[5%_95%] h-full w-full font-[font1]">
      <div className="h-full w-full"></div>
      <div className="h-full w-full">
        <div className="relative">
        <h1 className="flex items-center justify-center gap-2 text-center pt-15 text-3xl font-[700] text-[#46505b]">
          <FaGears className="text-4xl" />
          PROJECTS
        </h1>
        <div className="absolute left-[45.4%] w-[7.1rem] h-[1px] bg-[#e5e5e5] mt-4">
          <span className="h-1 w-10 absolute bg-[#0563bb] left-[33%] -mt-[1.2px]"></span>
        </div>
        <p className="text-center pt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          soluta!
        </p>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-10 mt-8 md:ml-15">
        <ProjectCard
          image={image1}
          title="Social Media"
          discription="Made a social media manager template using REACT"
          link="http://manishportpolio.netlify.app"
        />
        <ProjectCard
          image={image2}
          title="Social Media"
          discription="Made a social media manager template using REACT"
          link="http://minkuprivateproperty.netlify.app"
        />
        <ProjectCard
          image={image3}
          title="Social Media"
          discription="Made a social media manager template using REACT"
          link="http://minku-ecommerse-store.netlify.app"
        />
      </div>
      </div>
    </div>

  );
};

export default Projects;

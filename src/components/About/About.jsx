import React from 'react'
import minku from "../../assets/MINKU.jpg"
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import SkillsCard from '../Card/SkillsCard';

const About = () => {
  return (
    <div id='about' className='h-full w-full grid grid-cols-1 md:grid-cols-[10%_90%] font-[font1]'>
      <div id='nav' className="h-secreen w-0 md:w-full"></div>


      <div className="about-section">

       

      <div className="">
        <h1 className='text-center mt-15 text-3xl font-[700]'>ABOUT</h1>
      </div>

      <div className="mt-8 text-center ml-2 pr-4">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, temporibus! Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='-mx-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, laborum?</p>
      </div>




      <div className="flex flex-col gap-5 items-center justify-center lg:flex-row">


        <img src={minku} className='h-[500px] mt-10 md:w-[50%]'/>


          <div className="flex w-full h-full items-center justify-center flex-col md:flex-row lg:flex-col">

            <div className="md:w-[60%] lg:w-full">
        <h1 className='text-3xl font-[500] text-center lg:text-start lg:mt-6'>React and Frontend Developer</h1>
          <p className='text-[1.4rem] font-[500] text-center lg:text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut minus accusantium doloribus itaque? Voluptatem id quas consectetur, architecto molestiae nostrum?</p>
          </div>

          <div className="Skills-section mt-4 text-center text-2xl font-[600] md:w-[50%] lg:w-full">
            <h2 className='text-center text-2xl font-[700]'>SKILLS</h2>
        <div className="grid gap-10 md:gap-2 grid-cols-2 lg:grid-cols-3 lg:gap-10 mt-6">
        <SkillsCard skillImage={<FaReact/>} skillName="REACT"/>
        <SkillsCard skillImage={<TbBrandJavascript/>} skillName="JavaScript"/>
        <SkillsCard skillImage={<RiTailwindCssFill/>} skillName="Tailwind CSS"/>
        <SkillsCard skillImage={<FaGithub/>} skillName="GitHub"/>
        <SkillsCard skillImage={<FaCss3Alt/>} skillName="CSS"/>
        <SkillsCard skillImage={<FaHtml5/>} skillName="HTML"/>
        </div>
          </div>

          </div>

        </div>
        </div>
        </div>
      
  )
}

export default About

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
    <div id='about' className='w-full h-full bg-[#ffffff] font-[font1]'>

      <div className="relative">
      <h1 className='text-center pt-15 text-3xl font-[700] text-[#46505b]'>ABOUT</h1>
      <div className="absolute left-[45.4%] w-[7.1rem] h-[1px] bg-[#e5e5e5] mt-4"><span className='h-1 w-10 absolute bg-[#0563bb] left-[33%] -mt-[1.2px]'></span></div>
      <div className="mt-8 text-center ml-30 mr-10">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, temporibus! Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className='-mx-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, laborum?</p>
      </div>
      </div>


      <div className="ml-28 mt-9">

        <div className="h-full w-full flex items-start justify-center gap-6">

        <img src={minku} className='h-[500px]'/>

        <div className="Skills">
        <h1 className='text-3xl font-[500] text-start pb-2'>React and Frontend Developer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut minus accusantium doloribus itaque? Voluptatem id quas consectetur, architecto molestiae nostrum?</p>

          <div className="Skills-section mt-4 text-center text-2xl font-[600]">
            <h2>SKILLS</h2>
            <div className="absolute left-[65.5%] w-[7.1rem] h-[1px] bg-[#e5e5e5] mt-3">
          <span className="h-1 w-10 absolute bg-[#0563bb] left-[33%] -mt-[1.2px]"></span>
        </div>
        <div className="mt-14 ml-23 grid grid-cols-3 gap-6">
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

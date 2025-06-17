import React from 'react'
import minku from "../../assets/MINKU.jpg"
import polygon from "../../assets/polygon.png"
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
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
            <ul className='grid grid-cols-3 gap-15 ml-35 mt-10'>
              <li className='relative'>
                <img src={polygon} className='h-23'/>
                <FaReact className='absolute text-6xl left-4 top-4' />
              </li>
              <li className='relative'>
                <img src={polygon} className='h-23'/>
                <TbBrandJavascript className='absolute text-6xl left-4 top-5' />
              </li>
              <li className='relative'>
                <img src={polygon} className='h-23'/>
                <RiTailwindCssFill className='absolute text-6xl left-4 top-4' />
              </li>
              <li className='relative'>
                <img src={polygon} className='h-23'/>
                <FaGithub className='absolute text-6xl left-4 top-4' />
              </li>
              <li className='relative'>
                <img src={polygon} className='h-23'/>
                <FaCss3Alt className='absolute text-6xl left-4 top-5' />
              </li>
              <li className='relative'>
                <img src={polygon} className='h-23'/>
                <FaHtml5 className='absolute text-6xl left-4 top-5' />
              </li>
              
              
              
              
              
              
            </ul>
          </div>

          </div>

        </div>



      </div>


    </div>
  )
}

export default About

import React, { useRef } from "react";
import minku from "../../assets/MINKU.jpg";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import SkillsCard from "../Card/SkillsCard";
import { motion, useInView } from "motion/react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // once: true = only animates once

  return (
    <motion.div
      id="about"
      className="h-full w-full grid grid-cols-1 md:grid-cols-[10%_90%] font-[font1]"
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div id="nav" className="h-secreen w-0 md:w-full"></div>

      <div className="about-section">
        <div className="text-[#46505a]">
          <h1 className="flex flex-col justify-center items-center pt-15 text-3xl font-[700] text-[#46505a]">
            ABOUT
            <h2 className="flex flex-col justify-center items-center h-[0.2rem] w-[7rem] bg-[#e5d8d8] mt-4 rounded-lg">
              <h3 className="h-full w-[2.2rem] bg-[#0563bb]"></h3>
            </h2>
          </h1>
        </div>

        <div className="mt-8 text-center ml-2 pr-4 text-[#27282a]">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
            temporibus! Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p className="-mx-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias, laborum?
          </p>
        </div>

        <div className="flex flex-col gap-5 items-center justify-center lg:flex-row">
          <motion.img
            src={minku}
            className="h-[500px] mt-10 md:w-[50%] ml-2 rounded-md"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.div
            className="flex w-full h-full items-center justify-center flex-col md:flex-row lg:flex-col"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="md:w-[60%] lg:w-full text-[#728394]">
              <h1 className="text-3xl font-[500] text-center lg:text-start lg:mt-6">
                React and Frontend Developer
              </h1>
              <p className="text-[1.4rem] font-[500] text-center lg:text-start text-[#27282a]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                minus accusantium doloribus itaque? Voluptatem id quas
                consectetur, architecto molestiae nostrum?
              </p>
            </div>

            <div className="Skills-section mt-4 text-center text-2xl font-[600] md:w-[50%] lg:w-full">
              <h1 className="flex flex-col justify-center items-center text-3xl font-[700] text-[#27282a]">
                SKILLS
                <h2 className="flex flex-col justify-center items-center h-[0.2rem] w-[6.8rem] bg-[#e5d8d8] mt-4 rounded-lg">
                  <h3 className="h-full w-[2.2rem] bg-[#0563bb]"></h3>
                </h2>
              </h1>
              <div className="grid gap-10 md:gap-2 grid-cols-2 lg:grid-cols-3 lg:gap-10 mt-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <SkillsCard
                    skillImage={<FaReact className="text-[#02d0f8]" />}
                    skillName="REACT"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <SkillsCard
                    skillImage={
                      <TbBrandJavascript className="text-[#f2ab3e]" />
                    }
                    skillName="JavaScript"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <SkillsCard
                    skillImage={
                      <RiTailwindCssFill className="text-[#687fef]" />
                    }
                    skillName="Tailwind CSS"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <SkillsCard skillImage={<FaGithub />} skillName="GitHub" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <SkillsCard
                    skillImage={<FaCss3Alt className="text-[#016bb4]" />}
                    skillName="CSS"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <SkillsCard
                    skillImage={<FaHtml5 className="text-[#de4a25]" />}
                    skillName="HTML"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

import React, { useRef } from "react";
import { FaGears } from "react-icons/fa6";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import ProjectCard from "../Card/ProjectCard";
import { motion, useInView } from "motion/react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // once: true = only animates once

  return (
    <motion.div
      id="projects"
      className="grid grid-cols-[5%_95%] h-full w-full font-[font1]"
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="h-full w-full"></div>
      <div className="h-full w-full">
        <div className="relative">
          <h1 className="flex flex-col justify-center items-center pt-15 text-3xl font-[700] text-[#46505a]">
            <h4 className="flex items-center justify-center gap-2">
              <FaGears />
              Projects
            </h4>
            <h2 className="flex flex-col justify-center items-center h-[0.2rem] w-[10rem] bg-[#e5d8d8] mt-4 rounded-lg">
              <h3 className="h-full w-[3.3rem] bg-[#0563bb]"></h3>
            </h2>
          </h1>
          <p className="text-center pt-8 text-[#27282a] pr-3 text-xl font-[400] md:px-9">
            A Collection of Responsive and Interactive Web Applications Built
            Using React, Tailwind CSS, and Modern Frontend Tools.
          </p>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center gap-10 mt-8 py-6">
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 100 },
            }}
          >
            <ProjectCard
              image={image1}
              title="HelpMe"
              discription="Connecting helpers with those who need them"
              link="http://help-mee.netlify.app"
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 100 },
            }}
          >
            <ProjectCard
              image={image2}
              title="Everything Mall"
              discription="A full mall experience in one sleek web app"
              link="http://everything-mall.netlify.app"
            />
          </motion.div>

          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 100 },
            }}
          >
            <ProjectCard
              image={image3}
              title="Ixigo Clone"
              discription="Responsive ixigo clone with flights and interactive UI"
              link="https://tinyurl.com/396buewk"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

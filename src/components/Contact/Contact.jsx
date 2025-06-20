import React, { useRef } from "react";
import contact from "../../assets/contact.png";
import { IoIosSend } from "react-icons/io";
import { motion, useInView } from "motion/react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // once: true = only animates once

  return (
    <motion.div
      id="contact"
      className="h-full w-full grid grid-cols-[6%_94%] font-[font1] mb-6 relative z-0"
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="h-full w-full"></div>
      <div className="h-full w-full">
        <div className="relative">
          <h1 className="flex flex-col justify-center items-center pt-10 text-3xl font-[700] text-[#46505a]">
            CONTACT
            <h2 className="flex flex-col justify-center items-center h-[0.2rem] w-[8rem] bg-[#e5d8d8] mt-4 rounded-lg">
              <h3 className="h-full w-[2.7rem] bg-[#0563bb]"></h3>
            </h2>
          </h1>

          <div className="mt-18 flex flex-col gap-10 items-center justify-center md:grid md:grid-cols-2 md:gap-10">
            <motion.div
              className="h-full w-full left-side flex items-center justify-center"
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src={contact} className="w-[80%] md:h-full" />
            </motion.div>

            <motion.div
              className="right-side md:mr-5 md:-ml-4"
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form
                action="https://formspree.io/f/xblykjpb"
                method="POST"
                className="flex flex-col items-center justify-center gap-6 md:-ml-5"
              >
                <input
                  className="h-13 w-[75vw] md:w-[40vw] border-2 border-[#dadde0] text-xl rounded-lg p-5 outline-0"
                  type="text"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="h-13 w-[75vw] md:w-[40vw] border-2 border-[#dadde0] text-xl rounded-lg p-5 outline-0"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  className="h-30 w-[75vw] md:w-[40vw] text-start text-xl border-2 border-[#dadde0] rounded-lg p-5 outline-0"
                  name="message"
                  id="textarea"
                  placeholder="Describe what you're looking to build..."
                ></textarea>
                <button className="col-span-2 flex gap-2 items-center justify-center px-4 py-3 rounded-md text-white font-[500] text-lg bg-[#0563bb] hover:bg-blue-500 transition-all duration-600">
                  Send Message{" "}
                  <IoIosSend className="text-white text-[1.4rem]" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

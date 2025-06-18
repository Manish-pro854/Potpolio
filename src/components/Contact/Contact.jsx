import React from "react";
import contact from "../../assets/contact.png";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    

    <div id="contact" className="h-full w-full grid gid-col-[5%_95%] font-[font1]">
      <div className="h-full w-full"></div>
      <div className="h-full w-full">



         <div className="relative">
        <h1 className="text-center pt-15 text-3xl font-[700] text-[#46505b]">
          CONTACT
        </h1>
        <div className="absolute left-[45.2%] w-[7.1rem] h-[1px] bg-[#e5e5e5] mt-4">
          <span className="h-1 w-10 absolute bg-[#0563bb] left-[33%] -mt-[1.2px]"></span>
        </div>
      

      <div className="mt-18 flex flex-col gap-10 items-center justify-center md:grid md:grid-cols-2 md:gap-20">
        <div className="h-full w-full left-side flex items-center justify-center md:ml-30">
          <img src={contact} className="w-[80%] md:h-full"/>
        </div>

        <div className="right-side">
          <form
            action="https://formspree.io/f/xblykjpb"
            method="POST"
            className="flex flex-col items-center justify-center gap-6"
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
            <button className="col-span-2 flex gap-2 items-center justify-center px-4 py-3 rounded-md text-white font-[500] text-lg bg-[#343d68]">
              Send Message{" "}
              <IoIosSend className="text-[#82d5f3] text-[1.4rem]" />
            </button>
          </form>
        </div>
      </div>
    </div>


      </div>
    </div>
    
  );
};

export default Contact;

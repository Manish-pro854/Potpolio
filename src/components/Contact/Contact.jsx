import React from "react";
import contact from "../../assets/contact.png";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-full bg-[#ffffff] font-[font1] mb-16">
      <div className="relative">
        <h1 className="text-center pt-15 text-3xl font-[700] text-[#46505b]">
          CONTACT
        </h1>
        <div className="absolute left-[45.4%] w-[7.1rem] h-[1px] bg-[#e5e5e5] mt-4">
          <span className="h-1 w-10 absolute bg-[#0563bb] left-[33%] -mt-[1.2px]"></span>
        </div>
      </div>

      <div className="ml-28 mt-18 flex">
        <div className="left-side">
          <img src={contact} className="w-[25rem]" />
        </div>

        <div className="right-side ml-8">
          <form
            action="https://formspree.io/f/xblykjpb"
            method="POST"
            className="grid grid-cols-2 gap-7"
          >
            <input
              className="h-13 w-[20rem] border-2 border-[#dadde0] text-xl rounded-lg p-5 outline-0"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="h-13 w-[20rem] border-2 border-[#dadde0] text-xl rounded-lg p-5 outline-0"
              type="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="col-span-2 h-30 w-[42rem] text-start text-xl border-2 border-[#dadde0] rounded-lg p-5 outline-0"
              name="message"
              id="textarea"
              placeholder="Describe what you're looking to build..."
            ></textarea>
            <button className="mx-[35%] col-span-2 flex gap-2 items-center justify-center py-2 rounded-md text-white font-[500] text-lg bg-[#343d68]">
              Send Message{" "}
              <IoIosSend className="text-[#82d5f3] text-[1.4rem]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

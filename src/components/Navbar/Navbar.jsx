import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { FiUser } from "react-icons/fi";
import { GoProjectSymlink } from "react-icons/go";
import { LuMessageSquareText } from "react-icons/lu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div id="navbar" className="font-[font1]">
      <div
        id="left-side"
        className="desktopmenu z-10 hidden md:block ml-4 pt-5"
      >
        <ul className="flex flex-col gap-2 items-center justify-center fixed">
          <Link
            to="home"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            <li className="text-[1.5rem] cursor-pointer">
              <h1 className="p-[1.2rem] rounded-full text-#566068 bg-sky-100"><TiHomeOutline /></h1>
              
            </li>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            <li className="text-[1.5rem] cursor-pointer">
              <h1 className="p-[1.2rem] rounded-full text-#566068 bg-sky-100"><FiUser /></h1>
              
            </li>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            <li className="text-[1.5rem] cursor-pointer">
              <h1 className="p-[1.2rem] rounded-full text-#566068 bg-sky-100"><GoProjectSymlink /></h1>
              
            </li>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            <li className="text-[1.5rem] cursor-pointer">
              <h1 className="p-[1.2rem] rounded-full text-#566068 bg-sky-100"><LuMessageSquareText /></h1>
              
            </li>
          </Link>
        </ul>
      </div>

      <div
        className="md:hidden right-5 top-5 text-3xl cursor-pointer fixed h-full z-[999]"
        onClick={toggleMenu}
      >
        {menuOpen ? <IoClose/> : <RxHamburgerMenu />}
      </div>



      {menuOpen && (
        <div
          id="left-side"
          className="mobilemenu md:hidden z-30 h-screen min-w-[40%] bg-white flex items-center justify-center fixed"
        >
          <ul className="flex flex-col gap-2 items-center justify-center">
            <Link
              to="home"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              <li className="text-[1.2rem] cursor-pointer">
                <h1 className="h-[3.5rem] px-[12vw] flex items-center justify-start gap-2 rounded-full text-#566068 bg-sky-100 text-start"><TiHomeOutline/><span>Home</span></h1>
                
              </li>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              <li className="text-[1.2rem] cursor-pointer">
                <h1 className="h-[3.5rem] px-[12vw]  flex items-center justify-start gap-2 rounded-full text-#566068 bg-sky-100 text-start"><FiUser/><span>About</span></h1>
                
              </li>
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              <li className="text-[1.2rem] cursor-pointer">
                <h1 className="h-[3.5rem] px-[11vw] flex items-center justify-start gap-2 rounded-full text-#566068 bg-sky-100 text-start"><GoProjectSymlink/><span>Projects</span></h1>
                
              </li>
              
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              <li className="text-[1.2rem] cursor-pointer">
                <h1 className="h-[3.5rem] px-[11vw] flex items-center justify-start gap-2 rounded-full text-#566068 bg-sky-100 text-start"><LuMessageSquareText/><span>Contact</span></h1>
                
              </li>
            
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar; 
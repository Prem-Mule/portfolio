/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-scroll";

import "../Navigation/Navigation.css";
import { MdDownloadDone } from "react-icons/md";

function Navigation() {
  return (
    <div className="text-zinc-200  w-full tracking-wider h-[12vh] flex items-center justify-evenly font-['helvetica'] bg-zinc-950  gap-[10vw]">
      <div className="PortfolioLogo  text-[3vw] ">♠</div>
      <div className="menu flex  justify-between w-[40vw]  text-[1vw] ">
        <Link to="home" smooth={true} duration={500} className="menuitem">
          <h1>Home</h1>
        </Link>
        <Link to="about" smooth={true} duration={600} className="menuitem">
          <h1>About</h1>
        </Link>
        <Link to="projects" smooth={true} duration={800} className="menuitem">
          <h1>Projects</h1>
        </Link>
        <Link to="skills" smooth={true} duration={900} className="menuitem">
          <h1>Skills</h1>
        </Link>
        <Link to="contact" smooth={true} duration={1800} className="menuitem">
          <h1>Contact</h1>
        </Link>
      </div>
      <a
        href="src\assets\Prem_Kiran_Mule_Resume.pdf"
        download={"Prem's_Resume"}
      >
        <div
          id="resume"
          className=" w-[8vw] h-[3vw] text-[1.4vw] bg-cyan-500 flex items-center justify-center tracking-wider gap-[0.3vw] px-[0.8vw] rounded-3xl  text-white font-[oswald]"
        >
          <MdDownloadDone className="logoresume scale-[1.2]" />
          <h1 className="resumeText">Resume</h1>
        </div>
      </a>
    </div>
  );
}

export default Navigation;

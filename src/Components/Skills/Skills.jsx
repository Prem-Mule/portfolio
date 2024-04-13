/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

function Skills() {
  const [cursorPosition, setcursorPosition] = useState({ x: 0, y: 0 });
  const [cursorScale, setcursorScale] = useState(0);
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.4"
      className="h-[65vw] bg-zinc-950 -mt-[3vw] p-[6vw] relative"
    >
      <div
        className="cursor w-[8vw] h-[8vw] bg-cyan-500 blur-xl fixed rounded-full translate-x-[-50%] translate-y-[-50%] z-[0] "
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          opacity: cursorScale,
          transition: "all 0.3s ease",
        }}
      ></div>
      <div
        className="foreground absolute z-[1] hover:cursor-pointer "
        onMouseMove={(loc) => {
          setcursorPosition({ x: loc.clientX, y: loc.clientY });
        }}
        onMouseEnter={() => {
          setcursorScale(100);
        }}
        onMouseLeave={() => {
          setcursorScale(0);
        }}
      >
        <motion.h1
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          transition={{ duration: 2.5 }}
          className="font-['august'] text-[6vw] text-white "
        >
          Skills
        </motion.h1>
        <div className="skillset flex flex-wrap justify-center gap-x-[5vw]">
          <motion.div
            initial={{ x: -100, scale: 0.4 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={"cubic - bezier(0.34, 1.56, 0.64, 1) "}
            className="frontendskills uppercase font-['oswald'] text-white bg-zinc-700 w-[30vw] shadow-custom p-[1.3vw] m-[2vw] hover:cursor-grab hover:scale-[0.9] transition-all ease duration-[1s]"
          >
            <h1 className="text-center text-[1.6vw]">Frontend </h1>
            <li className="list-none">
              <h3>html</h3>
              <span className="bar  block bg-cyan-800 h-[1.3vw] text-white mt-[0.6vw] mb-[0.6vw] border-[1px] border-solid shadow-bar border-cyan-700 hover:shadow-barHover">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ ease: "easeInOut", duration: 2 }}
                  className="html bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-[9vw]  float-left h-[1.3vw]  duration-3000"
                ></motion.div>
              </span>
            </li>
            <li className="list-none">
              <h3>css</h3>
              <span className="bar  block bg-cyan-800 h-[1.3vw] text-white mt-[0.6vw] mb-[0.6vw] border-[1px] border-solid shadow-bar border-cyan-700 hover:shadow-barHover">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "90%" }}
                  transition={{ ease: "easeInOut", duration: 2 }}
                  className="css bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-[9vw]  float-left h-[1.3vw]  duration-3000"
                ></motion.div>
              </span>
            </li>
            <li className="list-none">
              <h3>javascript</h3>
              <span className="bar  block bg-cyan-800 h-[1.3vw] text-white mt-[0.6vw] mb-[0.6vw] border-[1px] border-solid shadow-bar border-cyan-700 hover:shadow-barHover">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ ease: "easeInOut", duration: 2 }}
                  className="javascript bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-[9vw]  float-left h-[1.3vw]  duration-3000"
                ></motion.div>
              </span>
            </li>
            <li className="list-none">
              <h3>react</h3>
              <span className="bar  block bg-cyan-800 h-[1.3vw] text-white mt-[0.6vw] mb-[0.6vw] border-[1px] border-solid shadow-bar border-cyan-700 hover:shadow-barHover">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ ease: "easeInOut", duration: 2 }}
                  className="react bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-[9vw]  float-left h-[1.3vw]  duration-3000"
                ></motion.div>
              </span>
            </li>
          </motion.div>
          <motion.div
            initial={{ x: 100, scale: 0.4 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={"cubic - bezier(0.34, 1.56, 0.64, 1) "}
            className="programmingLang uppercase font-['oswald'] text-white bg-zinc-700 w-[30vw] shadow-custom p-[1.3vw] m-[2vw] hover:cursor-grab hover:scale-[0.9] transition-all ease duration-[1s] "
          >
            <h1 className="text-center text-[1.6vw]">Programming Languages </h1>
            <li className="list-none">
              <h3>Java</h3>
              <span className="bar  block bg-cyan-800 h-[1.3vw] text-white mt-[0.6vw] mb-[0.6vw] border-[1px] border-solid shadow-bar border-cyan-700 hover:shadow-barHover">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ ease: "easeInOut", duration: 2 }}
                  className="java bg-gradient-to-r from-orange-400 from-10% via-yellow-500 via-30% to-emerald-500 to-90% w-[9vw]  float-left h-[1.3vw]  duration-3000"
                ></motion.div>
              </span>
            </li>
            <li className="list-none">
              <h3>C++</h3>
              <span className="bar  block bg-cyan-800 h-[1.3vw] text-white mt-[0.6vw] mb-[0.6vw] border-[1px] border-solid shadow-bar border-cyan-700 hover:shadow-barHover">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ ease: "easeInOut", duration: 2 }}
                  className="cpp bg-gradient-to-r from-orange-400 from-10% via-yellow-500 via-30% to-emerald-500 to-90% w-[9vw]  float-left h-[1.3vw]  duration-3000"
                ></motion.div>
              </span>
            </li>
            <li className="list-none">
              <h3>Python</h3>
              <span className="bar  block bg-cyan-800 h-[1.3vw] text-white mt-[0.6vw] mb-[0.6vw] border-[1px] border-solid shadow-bar border-cyan-700 hover:shadow-barHover">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ ease: "easeInOut", duration: 2 }}
                  className="python bg-gradient-to-r from-orange-400 from-10% via-yellow-500 via-30% to-emerald-500 to-90% w-[9vw]  float-left h-[1.3vw]  duration-3000"
                ></motion.div>
              </span>
            </li>
          </motion.div>
          <motion.div
            initial={{ x: -100, scale: 0.4 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={"cubic - bezier(0.34, 1.56, 0.64, 1) "}
            className="backendskills uppercase font-['oswald'] text-white bg-zinc-700 w-[30vw] shadow-custom p-[1.3vw] m-[2vw] hover:cursor-grab hover:scale-[0.9] transition-all ease duration-[1s]"
          >
            <h1 className="text-center text-[1.6vw]">Backend </h1>
            <li className="list-none">
              <h3>NODEJS</h3>
              <span className="bar  block bg-cyan-800 h-[1.3vw] text-white mt-[0.6vw] mb-[0.6vw] border-[1px] border-solid shadow-bar border-cyan-700 hover:shadow-barHover ">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ ease: "easeInOut", duration: 2 }}
                  className="nodejs bg-gradient-to-r from-green-500 from-10% via-emerald-800 via-50% to-green-900 to-90% w-[9vw]  float-left h-[1.3vw]  duration-3000"
                ></motion.div>
              </span>
            </li>
            <li className="list-none">
              <h3>ExpressJS</h3>
              <span className="bar  block bg-cyan-800 h-[1.3vw] text-white mt-[0.6vw] mb-[0.6vw] border-[1px] border-solid shadow-bar border-cyan-700 hover:shadow-barHover">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ ease: "easeInOut", duration: 2 }}
                  className="expressjs bg-gradient-to-r from-green-500 from-10% via-emerald-800 via-50% to-green-900 to-90% w-[9vw]  float-left h-[1.3vw]  duration-3000"
                ></motion.div>
              </span>
            </li>
          </motion.div>
          <motion.div
            initial={{ x: 100, scale: 0.4 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={"cubic - bezier(0.34, 1.56, 0.64, 1) "}
            className="databases uppercase font-['oswald'] text-white bg-zinc-700 w-[30vw] shadow-custom p-[1.3vw] m-[2vw] hover:cursor-grab hover:scale-[0.9] transition-all ease duration-[1s]"
          >
            <h1 className="text-center text-[1.6vw]">Databases </h1>
            <li className="list-none">
              <h3>MYSQL</h3>
              <span className="bar  block bg-cyan-800 h-[1.3vw] text-white mt-[0.6vw] mb-[0.6vw] border-[1px] border-solid shadow-bar border-cyan-700 hover:shadow-barHover">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ ease: "easeInOut", duration: 2 }}
                  className="mysql bg-gradient-to-r from-rose-600 from-10% via-red-700 via-30% to-orange-500 to-90% w-[9vw]  float-left h-[1.3vw]  duration-3000"
                ></motion.div>
              </span>
            </li>
            <li className="list-none">
              <h3>MONGODB</h3>
              <span className="bar  block bg-cyan-800 h-[1.3vw] text-white mt-[0.6vw] mb-[0.6vw] border-[1px] border-solid shadow-bar border-cyan-700 hover:shadow-barHover">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ ease: "easeInOut", duration: 2 }}
                  className="mongodb bg-gradient-to-r  from-rose-600 from-10% via-red-700 via-30% to-orange-500 to-90% w-[9vw]  float-left h-[1.3vw]  duration-3000"
                ></motion.div>
              </span>
            </li>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

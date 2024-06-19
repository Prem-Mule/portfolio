/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Hero/Hero.css";
function Hero() {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorScale, setCursorScale] = useState(100);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.7"
      className="hero text-white font-bold tracking-widest  bg-zinc-950 p-[3vw] min-h-[90vh] max-w-[100%]"
    >
      <div
        className="cursor1 w-[4vw] h-[4vw] bg-white blur-md absolute rounded-full translate-x-[-50%] translate-y-[-50%] z-[2] "
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          opacity: cursorScale,
          transition: "all  ease-in-out",
          mixBlendMode: "exclusion",
        }}
      ></div>
      <div
        className="cursor1 w-[22vw] h-[22vw] bg-amber-500 blur-3xl absolute rounded-full translate-x-[-50%] translate-y-[-50%] z-[0] "
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          opacity: cursorScale,
          transition: "all  ease-in-out ",
          mixBlendMode: "plus-lighter",
        }}
      ></div>
      <div
        className=" mt-[-4vw] flex flex-col justify-evenly    font-['august'] tracking-widest  text-[2vw]  cursor-none px-[3vw] h-[90vh]"
        onMouseMove={(loc) => {
          setCursorScale(100);
          setCursorPosition({ x: loc.clientX, y: loc.clientY });
        }}
        onMouseLeave={() => {
          setCursorScale(0);
        }}
        onMouseEnter={() => {
          setCursorScale(100);
        }}
      >
        <div className="helloprem flex flex-col">
          {" "}
          <div
            id="hello"
            className=" font-bold text-blue-600 text-[2.1vw]  h-fit"
          >
            <p> Hello it's Me</p>
          </div>
          <motion.div
            id="nameprem"
            className="name font-['august'] font-extrabold   text-[28vw]  leading-[28vw]  flex justify-center text-white overflow-hidden "
          >
            {/* PREM MULE */}
            {"PREM  MULE".split("").map((item, index) => {
              return (
                <motion.div
                  initial={{ y: "90%" }}
                  whileInView={{ y: "0%" }}
                  transition={{
                    ease: [0.34, 1.56, 0.64, 1],
                    delay: index * 0.1,
                  }}
                  className="inline-block"
                >
                  {index == 4 ? (
                    <p className="w-[4vw]" id="prem">
                      {" "}
                    </p>
                  ) : (
                    item
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div className="desc text-[1.4vw] font-['oswald'] font-normal text-justify text-zinc-500 pl-[7vw] pr-[7vw] ">
          <p>
            Welcome to my digital hub, where technology meets creativity. I'm
            Prem Kiran Mule, a passionate software developer and aspiring
            engineer, crafting innovative solutions and pushing boundaries in
            the digital realm. Explore my journey, projects, and skills as we
            embark on a quest for excellence together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

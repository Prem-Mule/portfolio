/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../About/About.css";
import { motion } from "framer-motion";
import "animate.css/animate.min.css";
import premprofile from "../assets/Prem_Mule_PassportPhoto-removebg-preview-removebg-preview (1).png";
function About() {
  useEffect(() => {
    const text = document.querySelector(".text");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
      )
      .join("");
  }, []);

  const roles = [" Fullstack Developer ", " Software Developer "];
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) =>
        prevIndex === roles.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-[50vw] bg-zinc-300 rounded-l-[3vw] rounded-tr-[12vw] p-[4vw] flex relative about w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 2.3 }}
        className="left"
      >
        <h1 className="text-[6vw] text-black font-['august'] w-[40vw]">
          About Me
        </h1>
        <hr className="w-[14vw] border-black border-[0.2vw]" />
        <img
          src={premprofile}
          alt=""
          className="w-[40vw] absolute bottom-[0%] left-[8vw] "
        />
      </motion.div>
      <div className="right text-zinc-900 font-['oswald'] text-[2vw] pt-[7vw] max-w-full">
        <h2 className="text-justify">
          Hello, I'm Prem Kiran Mule, a passionate
          {/* <section className="animation w-[19vw] h-[3vw] absolute   top-[23%] right-[6vw] ">
            <div className="first">
              <div>FullStack Developer</div>
            </div>
            <div className="second">
              <div>Software Developer</div>
            </div>
            <div className="third">
              <div>FullStack Developer</div>
            </div>
          </section> */}
          {/* {roles.map((role, index) => (
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1.3 }}
              key={index}
              className={` px=[1vw] mx-[1vw] inline-block ${
                index === roleIndex ? "animate-fade-in-out" : "hidden"
              }`}
            >
              {role}
            </motion.span>
          ))} */}
          {/* </div> */}
          <motion.span
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            animate={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            transition={{ duration: 1.5 }}
            className=""
            index={roleIndex}
          >
            {roles[roleIndex]}
          </motion.span>{" "}
          {/* <marquee
              direction="up"
              className="w-[16vw] h-[2vw] italic transition-all ease-linear "
            >
              software-Developer Fullstack Developer
            </marquee> */}
          with a knack for creativity. With expertise in Java, C++, Python, and
          web technologies, I enjoy transforming ideas into innovative
          solutions. I thrive on challenges and believe in the power of
          collaboration to drive meaningful change in the tech world.
        </h2>
        <div className="circle mt-[5vw] ml-[35vw] w-[7vw] h-[7vw]">
          <div className="logo w-[7vw] h-[7vw]"></div>
          <div className="text ">
            <p>Passionate- Driven- </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

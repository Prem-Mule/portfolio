/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../About/About.css";
import { motion } from "framer-motion";
import "animate.css/animate.min.css";

function About() {
  useEffect(() => {
    const text = document.querySelector(".text");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
      )
      .join("");
  }, []);
  const changeRole = () => {
    setRoleIndex((prevIndex) =>
      prevIndex === roles.length - 1 ? 0 : prevIndex + 1
    );
  };

  setInterval(changeRole, 3000);

  const roles = [" Fullstack Developer ", " Software Developer "];
  const [roleIndex, setRoleIndex] = useState(0);
  let setroles = () => {
    if (roleIndex) {
      setRoleIndex(0);
      <p>{roles[roleIndex + 1]}</p>;
    } else {
      setRoleIndex(1);
      <p>{roles[roleIndex - 1]}</p>;
    }
  };
  return (
    <div className="h-[100vh] bg-zinc-300 rounded-l-[3vw] rounded-tr-[12vw] p-[4vw] flex relative">
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
          src="src\assets\Prem_Mule_PassportPhoto-removebg-preview-removebg-preview (1).png"
          alt=""
          className="w-[40vw] absolute top-[-5vw] left-[8vw] "
        />
      </motion.div>
      <div className="right text-zinc-900 font-['oswald'] text-[2vw] pt-[7vw]">
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
          {/* <motion.span
            initial={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1.3 }}
            whileInView={{ opacity: 1 }}
            className="inline-block"
          >
            {roles[roleIndex]}
          </motion.span> */}
          {roles.map((role, index) => (
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
          ))}
          {/* </div> */}
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
        <div className="circle mt-[4vw] ml-[35vw]">
          <div className="logo"></div>
          <div className="text">
            <p>Passionate- Driven </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState } from "react";

const Projects = () => {
  const [isHovering, setisHovering] = useState(0);
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.2"
      className="w-full py-[3vw] z-[4]  bg-zinc-950"
    >
      <div className="w-full px-[5vw] border-b-2 border-zinc-900 pb-[1vw]">
        <h1 className="text-[4vw] font-['august']  text-white">
          Featured Projects
        </h1>
      </div>
      <div className="px-[5.3vw] ">
        <div className="cards w-full flex gap-10 mt-10 ">
          <div
            onMouseEnter={() => {
              setisHovering(1);
            }}
            onMouseLeave={() => {
              setisHovering(0);
            }}
            className="cardcontainer1 w-1/2 h-[30vw] relative  "
          >
            <h1 className="absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] overflow-hidden  text-[#CDEA68]">
              {"GREENOVA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering == 1 ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card shadow-custom w-full h-full rounded-lg bg-green-400  overflow-hidden  flex flex-col"
            >
              <img
                src="src\assets\greenovass.png"
                alt="card1"
                className="w-full h-full"
              />
              <div className="  text-[1.3vw] p-[0.4vw] bg-zinc-100 text-zinc-800 font-semibold font-['FoundersGrotesk']   pl-[2vw] pr-[2vw] text-justify">
                Greenova - an environmental information system to promote
                recycling and sustainability..
              </div>
            </motion.div>
          </div>
          <div
            onMouseEnter={() => {
              setisHovering(2);
              console.log("span1");
            }}
            onMouseLeave={() => {
              setisHovering(0);
            }}
            className="cardcontainer2 w-1/2 h-[30vw] relative "
          >
            <h1 className="absolute right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] flex text-[#CDEA68] overflow-hidden ">
              {"TWOGOOD CO.".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering == 2 ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card shadow-custom w-full h-full rounded-lg bg-green-400  overflow-hidden  flex flex-col"
            >
              <img
                src="src\assets\twogoodss.png"
                alt="card1"
                className="w-full h-full"
              />
              <div className="bg-zinc-700 text-[1.3vw] p-[0.4vw] text-zinc-100 font-semibold font-['FoundersGrotesk'] tracking-normal  pl-[2vw] pr-[2vw] text-justify ">
                Twogood Co - a sleek and modern website for a fictional company
                specializing in sustainable fashion
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="px-[5.3vw] mt-[9vw]">
        <div className="cards w-full flex gap-10 mt-10 ">
          <div
            onMouseEnter={() => {
              setisHovering(3);
            }}
            onMouseLeave={() => {
              setisHovering(0);
            }}
            className="cardcontainer3 w-1/2 h-[30vw] relative  "
          >
            <h1 className="absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] overflow-hidden  text-[#CDEA68]">
              {"SHOWCASE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering == 3 ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card shadow-custom w-full h-full rounded-lg bg-green-400  overflow-hidden  border-[1px] border-zinc-700 flex flex-col"
            >
              <img
                src="src\assets\ochi2ss.png"
                alt="card1"
                className="w-full h-full "
              />{" "}
              <div className="bg-zinc-700 text-[1.3vw] p-[0.4vw] text-zinc-100 tracking-normal font-['FoundersGrotesk']   pl-[2vw] pr-[2vw] text-justify">
                Ochi Design Showcase - a captivating website to showcase design
                projects with animated features.
              </div>
            </motion.div>
          </div>
          <div
            onMouseEnter={() => {
              setisHovering(4);
              console.log("span1");
            }}
            onMouseLeave={() => {
              setisHovering(0);
            }}
            className="cardcontainer4 w-1/2 h-[30vw] relative "
          >
            <h1 className="absolute right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] flex text-[#CDEA68] overflow-hidden ">
              {"LUMINE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering == 4 ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card shadow-custom w-full h-full rounded-lg bg-green-400  overflow-hidden flex flex-col"
            >
              <img
                src="src\assets\luminess.png"
                alt="card1"
                className="w-full h-full object-cover"
              />
              <div className="bg-zinc-100 text-zinc-800 text-[1.3vw] p-[0.4vw] font-['FoundersGrotesk']   pl-[2vw] pr-[2vw] text-justify">
                Lumine - Designed a modern and elegant website for Lumine, a
                fictional luxury fashion brand.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="px-[5.3vw] mt-[9vw]">
        <div className="cards w-full flex gap-10 mt-10 ">
          <div
            onMouseEnter={() => {
              setisHovering(5);
            }}
            onMouseLeave={() => {
              setisHovering(0);
            }}
            className="cardcontainer3 w-1/2 h-[30vw] relative  "
          >
            <h1 className="absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] overflow-hidden  text-[#CDEA68]">
              {"AURACART".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering == 5 ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card shadow-custom w-full h-full rounded-lg bg-green-400  overflow-hidden  border-[1px] border-zinc-700 flex flex-col"
            >
              <img
                src="src\assets\ecommercess.png"
                alt="card1"
                className="w-full h-full"
              />
              <div className="bg-zinc-100 text-[1.3vw] p-[0.4vw] text-zinc-800 font-['FoundersGrotesk']   pl-[2vw] pr-[2vw] text-justify">
                AuraCart - Crafted an intuitive e-commerce platform for seamless
                online shopping experiences.
              </div>
            </motion.div>
          </div>
          <div
            onMouseEnter={() => {
              setisHovering(6);
              console.log("span1");
            }}
            onMouseLeave={() => {
              setisHovering(0);
            }}
            className="cardcontainer4 w-1/2 h-[30vw] relative "
          >
            <h1 className="absolute right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] flex text-[#CDEA68] overflow-hidden ">
              {"VISIONPRO".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering == 6 ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              whileHover={{ scale: 0.9 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className="card shadow-custom w-full h-full rounded-lg bg-green-400  overflow-hidden flex flex-col"
            >
              <img
                src="src\assets\applevisionss.png"
                alt="card1"
                className="w-full h-full object-cover"
              />
              <div className="bg-zinc-700 text-[1.3vw] p-[0.4vw]  text-zinc-100  tracking-normal font-['FoundersGrotesk']   pl-[2vw] pr-[2vw] text-justify">
                Apple Vision Clone - Created a visually stunning website
                inspired by Apple's design aesthetic.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

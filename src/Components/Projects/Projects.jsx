/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState } from "react";
import "../Projects/Projects.css";
import greenova from "../assets/greenova.mp4";
import greenovaThumb from "../assets/greenovass.png";
import lumine from "../assets/lumine.mp4";
// import lumine from "../assets/luminess.png";
import ochidesign from "../assets/ochi.mp4";
// import ochidesign from "../assets/ochi2ss.png";
import applevision from "../assets/applevision.mp4";
// import applevision from "../assets/applevisionss.png";
import auracart from "../assets/auracart.mp4";
// import auracart from "../assets/ecommercess.png";
import twogood from "../assets/changethecourse.mp4";
// import twogood from "../assets/twogoodss.png";
import changethecourse from "../assets/changethecoursess.png";

const Projects = () => {
  const [isHovering, setisHovering] = useState(0);
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.2"
      className=" py-[3vw] z-[4]  bg-zinc-950 projects  w-full "
    >
      <div className="featured px-[5vw] border-b-2 border-zinc-900 pb-[1vw]">
        <h1 className="text-[4vw] font-['august']  text-white">
          Featured Projects
        </h1>
      </div>
      <div className="projectsContainer px-[5.3vw] ">
        <div className="cards  flex gap-[5vw] mt-10  relative">
          <div
            // onClick="window.open(this.href,'_blank');return false;"
            onClick={() =>
              window.open("https://prem-mule.github.io/GREENOVA/", "_blank")
            }
            target="_blank"
            href="https://prem-mule.github.io/GREENOVA/"
            className="w-1/2 h-[30vw] hover:cursor-grab"
          >
            {" "}
            <div
              onMouseEnter={() => {
                setisHovering(1);
              }}
              onMouseLeave={() => {
                setisHovering(0);
              }}
              className="cardl  relative "
            >
              {/* <h1 className="rght absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] overflow-hidden  text-[#CDEA68]">
                {"GREENOVA".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isHovering == 1 ? { y: "0%" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1> */}
              <motion.div
                whileHover={{ scale: 0.9 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
                className="card shadow-custom min-w-full min-h-full rounded-lg  overflow-hidden  "
              >
                <video
                  src={greenova}
                  poster={greenovaThumb}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-[100%] h-[28vw]"
                ></video>
                {/* <img src={greenova} alt="card1" className="w-[100%] h-[28vw]" /> */}
                <div className=" descr w-[100%] text-[1.3vw] p-[0.4vw] bg-zinc-100 text-zinc-800 font-semibold font-['FoundersGrotesk'] px-[2vw]   text-justify">
                  <p>
                    Greenova - an environmental information system to promote
                    recycling and sustainability..
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div
            onClick={() =>
              window.open("https://prem-mule.github.io/Two-Good-Co/", "_blank")
            }
            target="_blank"
            className="w-1/2 h-[30vw] hover:cursor-grab"
          >
            {" "}
            <div
              onMouseEnter={() => {
                setisHovering(2);
                console.log("span1");
              }}
              onMouseLeave={() => {
                setisHovering(0);
              }}
              className="cardr  relative "
            >
              <h1 className="lft absolute right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] flex text-[#CDEA68] overflow-hidden ">
                {"TWOGOOD CO.".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isHovering == 2 ? { y: "0%" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                    }}
                    className="inline-block "
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <motion.div
                whileHover={{ scale: 0.9 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
                className="card shadow-custom min-w-full min-h-full rounded-lg  overflow-hidden  flex flex-col"
              >
                <video
                  src={twogood}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-[100%] h-[28vw]"
                ></video>
                {/* <img src={twogood} alt="card1" className="w-[100%] h-[28vw]" /> */}
                <div className="descr bg-zinc-700 text-[1.3vw] p-[0.4vw] text-zinc-100 font-semibold font-['FoundersGrotesk'] tracking-normal  pl-[2vw] pr-[2vw] text-justify ">
                  <p>
                    {" "}
                    Twogood Co - a sleek and modern website for a fictional
                    company specializing in sustainable fashion
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="name absolute text-[5vw] left-[45%] translate-x-[-50%] top-1/2 translate-y-[-50%]">
            <h1 className="rght absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] overflow-hidden  text-[#CDEA68]">
              {"GREENOVA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering == 1 ? { y: "0%" } : { y: "100%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>{" "}
          </div>
        </div>
      </div>
      <div className="px-[5.3vw] mt-[9vw]">
        <div className="cards relative flex gap-[6vw] mt-10 ">
          <div
            onClick={() =>
              window.open(
                "https://ochidesign-showcase-app.onrender.com/",
                "_blank"
              )
            }
            target="_blank"
            className="w-1/2 h-[30vw] hover:cursor-grab"
          >
            <div
              onMouseEnter={() => {
                setisHovering(3);
              }}
              onMouseLeave={() => {
                setisHovering(0);
              }}
              className="cardl relative  "
            >
              {/* <h1 className="rght absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] overflow-hidden  text-[#CDEA68]">
                {"SHOWCASE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isHovering == 3 ? { y: "0%" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1> */}
              <motion.div
                whileHover={{ scale: 0.9 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
                className="card shadow-custom min-w-full min-h-full rounded-lg  overflow-hidden  border-[1px] border-zinc-700 flex flex-col"
              >
                <video
                  src={ochidesign}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-[100%] h-[28vw]"
                ></video>
                {/* <img
                  src={ochidesign}
                  alt="card1"
                  className="w-[100%] h-[28vw] "
                /> */}
                <div className=" descr bg-zinc-700 text-[1.3vw] p-[0.4vw] text-zinc-100 tracking-normal font-['FoundersGrotesk']   pl-[2vw] pr-[2vw] text-justify">
                  <p>
                    {" "}
                    Ochi Design:a captivating website to showcase design
                    projects with animated features.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div
            onClick={() =>
              window.open(
                "https://prem-mule.github.io/LUMINE-Fashion_Hub/",
                "_blank"
              )
            }
            className="w-1/2 h-[30vw] hover:cursor-grab"
          >
            <div
              onMouseEnter={() => {
                setisHovering(4);
                console.log("span1");
              }}
              onMouseLeave={() => {
                setisHovering(0);
              }}
              className="cardr  relative "
            >
              <h1 className="lft absolute right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] flex text-amber-400 overflow-hidden ">
                {"LUMINE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isHovering == 4 ? { y: "0%" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <motion.div
                whileHover={{ scale: 0.9 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
                className="card shadow-custom min-w-full min-h-full rounded-lg  overflow-hidden flex flex-col"
              >
                <video
                  src={lumine}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-[100%] h-[28vw]"
                ></video>
                {/* <img
                  src={lumine}
                  alt="card1"
                  className="w-[100%] h-[28vw] object-cover"
                /> */}
                <div className="descr bg-zinc-100 text-zinc-800 text-[1.3vw] p-[0.4vw] font-['FoundersGrotesk']   pl-[2vw] pr-[2vw] text-justify">
                  <p>
                    {" "}
                    Lumine - Designed a modern and elegant website for Lumine, a
                    fictional luxury fashion brand.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>{" "}
          <div className="name absolute text-[5vw] left-[40%] top-[40%]  ">
            <h1 className="rght  flex   z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] overflow-hidden  text-amber-400">
              {"SHOWCASE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering == 3 ? { y: "0%" } : { y: "100%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
          </div>
        </div>
      </div>
      <div className="px-[5.3vw] mt-[9vw]">
        <div className="cards flex gap-[6vw] mt-10  relative">
          <div
            onClick={() =>
              window.open(
                "https://aura-cart-store-frontend.vercel.app/",
                "_blank"
              )
            }
            className="w-1/2 h-[30vw] hover:cursor-grab"
          >
            <div
              onMouseEnter={() => {
                setisHovering(5);
              }}
              onMouseLeave={() => {
                setisHovering(0);
              }}
              className="cardl relative  "
            >
              {/* <h1 className="rght absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] overflow-hidden  text-[#CDEA68]">
                {"AURACART".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isHovering == 5 ? { y: "0%" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1> */}
              <motion.div
                whileHover={{ scale: 0.9 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
                className="card shadow-custom min-w-full min-h-full rounded-lg  overflow-hidden  border-[1px] border-zinc-700 flex flex-col"
              >
                <video
                  src={auracart}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-[100%] h-[28vw]"
                ></video>
                {/* <img src={auracart} alt="card1" className="w-[100%] h-[28vw]" /> */}
                <div className="descr bg-zinc-100 text-[1.3vw] p-[0.4vw] text-zinc-800 font-['FoundersGrotesk']   pl-[2vw] pr-[2vw] text-justify">
                  <p>
                    {" "}
                    AuraCart - Crafted an intuitive e-commerce platform for
                    seamless online shopping experiences.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div
            onClick={() =>
              window.open(
                "https://prem-mule.github.io/AppleVisionClone-Project/",
                "_blank"
              )
            }
            className="w-1/2 h-[30vw] hover:cursor-grab"
          >
            <div
              onMouseEnter={() => {
                setisHovering(6);
                console.log("span1");
              }}
              onMouseLeave={() => {
                setisHovering(0);
              }}
              className="cardr  relative "
            >
              <h1 className=" lft absolute right-full top-1/2 -translate-y-[50%] translate-x-[50%] z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] flex text-[#CDEA68] overflow-hidden ">
                {"VISIONPRO".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isHovering == 6 ? { y: "0%" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <motion.div
                whileHover={{ scale: 0.9 }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
                className="card shadow-custom min-w-full min-h-full rounded-lg  overflow-hidden flex flex-col"
              >
                <video
                  src={applevision}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-[100%] h-[28vw]"
                ></video>
                {/* <img
                  src={applevision}
                  alt="card1"
                  className="w-[100%] h-[28vw] object-cover"
                /> */}
                <div className="descr bg-zinc-700 text-[1.3vw] p-[0.4vw]  text-zinc-100  tracking-normal font-['FoundersGrotesk']   pl-[2vw] pr-[2vw] text-justify">
                  <p>
                    {" "}
                    Apple Vision Clone - Created a visually stunning website
                    inspired by Apple's design aesthetic.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="name absolute text-[5vw]  top-1/2 left-[45%] translate-x-[-50%] translate-y-[-50%]">
            <h1 className="rght absolute flex left-full top-1/2 -translate-y-[50%] -translate-x-[30%] z-10 text-[8.3vw] leading-none  font-['FoundersGrotesk'] overflow-hidden  text-[#CDEA68]">
              {"AURACART".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering == 5 ? { y: "0%" } : { y: "100%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.1,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="marquee relative mb-[4vw] min-h-[20vh] bg-zinc-950  w-full">
      <div className="  bg-blue-500 flex rotate-[2deg] mt-[-2vw] absolute z-[2]">
        <marquee
          behavior=""
          direction=""
          scrollamount="22"
          loop="-1"
          className="text-[3.5vw]  leading-none uppercase font-['FoundersGrotesk']  text-white "
        >
          Innovative Solutions | Passionate-Developer | Creative Thinker |
          Problem Solver | Digital Innovator |
        </marquee>
      </div>
      <div className="  bg-blue-500 flex rotate-[-2deg] mt-[-2vw] opacity-[40%] absolute z-[0]">
        <marquee
          behavior=""
          direction="right"
          scrollamount="22"
          loop="-1"
          className="text-[3.5vw]  leading-none uppercase font-['FoundersGrotesk']  text-white "
        >
          Innovative Solutions | Passionate-Developer | Creative Thinker |
          Problem Solver | Digital Innovator |
        </marquee>
      </div>
    </div>
  );
}

export default Marquee;

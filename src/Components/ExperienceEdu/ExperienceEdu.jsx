/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import "../ExperienceEdu/ExperienceEdu.css";
function ExperienceEdu() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className=" timeline p-[5vw] text-white relative max-w-[90vw] m-auto font-['helvetica'] font-bold rounded-md bg-gradient-to-b from-zinc-950 to-zinc-900"
    >
      <motion.div>
        <h1 className="text-[10vw] leading-[10vw] tracking-tighter mb-[2vw] ">
          W- <br />
          <div className="flex ">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              // animate={{}}
              transition={{ ease: "easeInOut", duration: 1.5 }}
              whileInView={{ opacity: 1, width: "28%" }}
              style={{
                color: "cyan",
                overflow: "hidden",
              }}
            >
              ORK
            </motion.div>
            <span className="text-zinc-300 tracking-[-0.05em] bg-transparent">
              Experience
            </span>
          </div>
        </h1>
        <div className="wrapper relative w-1/2  px-[1vw] py-[1vw] rounded-2xl bg-gradient-to-r from-zinc-800">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            className="textbox bg-white  text-black  px-[2vw] py-[1vw] rounded-2xl"
          >
            <h2 className="text-[1.7vw]  text-zinc-700">
              Backend Developer Intern
            </h2>
            <h1 className="text-[0.8vw] ">February 2023 - March 2023</h1>
            <h1 className="text-[1vw] text-cyan-500 font-extrabold">
              Energybae Pvt. Ltd.
            </h1>
            <p className="pl-[2vw]">
              <ul className="list-disc">
                <li>
                  Developed and integrated APIs for email and PDF generation
                  using Java.
                </li>
                <li>
                  Optimized API performance, resulting in a 40% reduction in
                  email generation time.
                </li>
                <li>
                  Contributed to seamless communication between front-end and
                  back-end systems.
                </li>
                <li>
                  Collaborated with team members to deliver high-quality
                  software solutions.
                </li>
              </ul>
            </p>
          </motion.div>
        </div>
        <div className="wrapper relative w-1/2 left-1/2  px-[1vw] py-[1vw] rounded-2xl b bg-gradient-to-l from-zinc-800 mb-[5vw]">
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            className="textbox bg-white rounded-2xl text-black px-[2vw] py-[1vw]   "
          >
            <h2 className="text-[1.7vw]  text-zinc-700">
              Internshala Student Partner
            </h2>
            <h1 className="text-[0.8vw] ">April 2022 - March-2023</h1>
            <h1 className="text-[1vw] text-cyan-500 font-extrabold">
              Internshala
            </h1>
            <p className="pl-[2vw]">
              <ul className="list-disc">
                <li>
                  Organizing and promoting Internshala's initiatives and
                  opportunities on campus.
                </li>
                <li>
                  Conducting workshops and webinars to help students improve
                  their skills.
                </li>
                <li>
                  Assisting students in finding suitable internships and
                  learning resources.
                </li>
              </ul>
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.h1
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        transition={{ duration: 1.5 }}
        className="text-[9vw] leading-[10vw] tracking-tighter mb-[2vw]"
      >
        Education
      </motion.h1>{" "}
      <div className="wrapper relative w-1/2  px-[1vw] py-[1vw] rounded-2xl bg-gradient-to-r from-zinc-800">
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          }}
          className="textbox bg-white  text-black  px-[2vw] py-[1vw] rounded-2xl"
        >
          <h2 className="text-[1.7vw]  text-zinc-700">
            Bachelor of Engineering (B.E.)
          </h2>
          <h1 className="text-[0.8vw] ">
            Dr. D. Y. Patil Institute of Technology, Pimpri
          </h1>
          <h1 className="text-[1vw] text-cyan-500 font-extrabold">
            Current SGPA: 9.32{" "}
          </h1>
          <p className="pl-[2vw]">
            <ul className="list-disc">
              <li>Rank: 3rd in SPPU University</li>
              <li>Pursuing, Expected Graduation: June 2024</li>
              <li>Major: Electronics and Telecommunication Engineering</li>
            </ul>
          </p>
        </motion.div>
      </div>
      <div className="wrapper relative w-1/2  left-1/2 px-[1vw] py-[1vw] rounded-2xl bg-gradient-to-r from-zinc-800">
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          }}
          className="textbox bg-white  text-black  px-[2vw] py-[1vw] rounded-2xl"
        >
          <h2 className="text-[1.7vw]  text-zinc-700">
            Higher Secondary (12th Grade)
          </h2>
          <h1 className="text-[0.8vw] ">
            Dr. D. Y. Patil Institute of Technology, Pimpri
          </h1>
          <h1 className="text-[1vw] text-cyan-500 font-extrabold">
            Percentage: 88%
          </h1>
          <p className="pl-[2vw]">
            <ul className="list-disc">
              <li>Year of Completion: 2020</li>
            </ul>
          </p>
        </motion.div>
      </div>
      <div className="wrapper relative w-1/2  px-[1vw] py-[1vw] rounded-2xl bg-gradient-to-r from-zinc-800">
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          }}
          className="textbox bg-white  text-black  px-[2vw] py-[1vw] rounded-2xl"
        >
          <h2 className="text-[1.7vw]  text-zinc-700">
            Secondary School (10th Grade)
          </h2>
          <h1 className="text-[0.8vw] ">Malkapur Highschool Malkapur</h1>
          <h1 className="text-[1vw] text-cyan-500 font-extrabold">
            Percentage: 95.20%
          </h1>
          <p className="pl-[2vw]">
            <ul className="list-disc">
              <li>Year of Completion: 2018</li>
            </ul>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ExperienceEdu;

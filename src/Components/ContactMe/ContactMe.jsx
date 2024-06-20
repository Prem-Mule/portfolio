/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import githublogo from "../assets/Github.png";
import linkedinlogo from "../assets/Linkedin.png";
import premphoto from "../assets/Prem_Mule_PassportPhoto-removebg-preview-removebg-preview-modified.png";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactMe() {
  const form = useRef();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const handleSubmit = (e) => {
    sendEmail(e);
    setname("");
    setemail("");
    setmessage("");
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_op6lecl", "template_b64zgsc", form.current, {
        publicKey: "ek5iwjg8VhmCZCZFK",
      })
      .then(
        () => {
          toast.success("Email sent Successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div id="contact">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 2 }}
          data-scroll
          data-scroll-section
          data-scroll-speed="0.4"
          className=" mx-auto px-4 bg-zinc-950  w-full"
        >
          <div className="ml-[3vw] mr-[3vw] mt-[3vw] bg-gray-100 rounded-t-[3vw] p-[4vw] ">
            <motion.div className="headingmsg flex items-center justify-center gap-[1vw]">
              <h2 className="text-[7vw] font-bold text-center mb-8  font-['august'] ">
                Ready to Begin? Let's Start Together{" "}
              </h2>
              <img
                src={premphoto}
                alt=""
                className="rounded-full border-[0.4vw] mb-[0.5vw]  w-[8vw] h-[8vw] object-contain border-zinc-400"
              />
            </motion.div>
            <div className="flex flex-col md:flex-row md:space-x-6 font-['oswald']">
              <div className="flex-1 p-[3vw]">
                <h3 className="text-[2.5vw] font-semibold  mb-4">
                  Send a Message
                </h3>
                <form
                  className="text-[1.4vw]"
                  ref={form}
                  onSubmit={handleSubmit}
                >
                  <div className="mb-[2vw]">
                    <label
                      htmlFor="fullname"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      What's your name?
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      value={name}
                      name="from_name"
                      required
                      placeholder="Prem"
                      onChange={(e) => {
                        setname((prev) => {
                          prev + e.target.value;
                        });
                      }}
                      className="w-full px-4 py-2 rounded border-none bg-transparent focus:outline-none focus:border-blue-500"
                    />
                    <hr className="border-[0.1vw] border-zinc-400" />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      What's your email?{" "}
                    </label>
                    <input
                      type="email"
                      value={email}
                      id="email"
                      name="from_email"
                      onChange={(e) => {
                        setemail((prev) => {
                          prev + e.target.value;
                        });
                      }}
                      placeholder="muleprem777@gmail.com"
                      required
                      className="w-full px-4 py-2 rounded border-none bg-transparent focus:outline-none focus:border-blue-500"
                    />{" "}
                    <hr className="border-[0.1vw] border-zinc-400" />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-1"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      required
                      rows="2"
                      onChange={(e) => {
                        setmessage((prev) => {
                          prev + e.target.value;
                        });
                      }}
                      placeholder="Hello Prem, Can you help me with*"
                      className="w-full px-4 py-2 rounded border-none bg-transparent focus:outline-none focus:border-blue-500"
                    ></textarea>{" "}
                    <hr className="border-[0.1vw] border-zinc-400" />
                  </div>{" "}
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="flex-1 p-[3vw]">
                <h3 className="text-[2.5vw] font-semibold  mb-4">Reach Out</h3>
                <p className="text-gray-700 mb-4 text-[1.5vw]">
                  Feel free to reach out to me via email or connect with me on
                  social media.
                </p>
                <hr className="border-zinc-400 my-[2vw]" />
                <div className=" ">
                  <a
                    href="https://www.linkedin.com/in/prem-mule/"
                    onClick="window.open(this.href,'_blank');return false;"
                    target="_blank"
                  >
                    <img src={linkedinlogo} alt="" className="h-[2vw]" />
                  </a>{" "}
                  <a
                    href="https://github.com/Prem-Mule"
                    onClick="window.open(this.href,'_blank');return false;"
                    target="_blank"
                  >
                    <img
                      src={githublogo}
                      alt=""
                      className="h-[4vw] mt-[0.7vw]"
                    />
                  </a>
                </div>
                <hr className="border-zinc-400 my-[1.4vw]" />

                <div className="details text-zinc-700 font-['oswald'] text-[1.2vw]">
                  <h1>muleprem777@gmail.com</h1> <h1>+91 8208920808</h1>
                </div>
                <hr className="border-zinc-400 my-[1vw]" />

                <div className="bg-blue-500 px-[1vw] w-fit py-[0.7vw] rounded-2xl text-[1.5vw] text-white hover:bg-blue-700 transition duration-300">
                  <a
                    href="/src/Components/assets/Prem_Kiran_Mule_Resume.pdf"
                    download={"Prem's_Resume"}
                  >
                    {" "}
                    Download Resume
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>{" "}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
        theme="light"
      />
    </>
  );
}

export default ContactMe;

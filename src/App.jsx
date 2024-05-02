/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Components/About/About";
import Marquee from "./Components/Marquee/Marquee";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import ExperienceEdu from "./Components/ExperienceEdu/ExperienceEdu";
import ContactMe from "./Components/ContactMe/ContactMe";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="app h-full max-w-screen bg-[#0a0a0a] ">
      <Navigation />
      <Hero />
      <About id="about" />
      <Marquee />
      <Projects id="projects" />
      <Skills id="skills" />
      <ExperienceEdu />
      <ContactMe id="contact" />
    </div>
  );
}
export default App;

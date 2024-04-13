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
    <div className=" h-full min-w-screen bg-zinc-950 ">
      <Navigation />
      <Hero />
      <About />
      <Marquee />
      <Projects />
      <Skills />
      <ExperienceEdu />
      <ContactMe />
    </div>
  );
}

export default App;

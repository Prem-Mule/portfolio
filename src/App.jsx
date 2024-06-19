/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Components/About/About";
import Marquee from "./Components/Marquee/Marquee";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import ExperienceEdu from "./Components/ExperienceEdu/ExperienceEdu";
import ContactMe from "./Components/ContactMe/ContactMe";
import LocomotiveScroll from "locomotive-scroll";
import Preloader from "./Components/Preloader/Preloader";
import Transition from "./Components/Transitions/Transition";
// import Preloader from "/Components/Preloader/Preloader";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MINIMUM_LOADING_TIME = 3000; // Minimum time to show the preloader (3 seconds)
    const start = Date.now();

    const handleLoad = () => {
      const duration = Date.now() - start;
      if (duration < MINIMUM_LOADING_TIME) {
        setTimeout(() => {
          setLoading(false);
        }, MINIMUM_LOADING_TIME - duration);
      } else {
        setLoading(false);
      }
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="animate-fade-in">
          <div className="app h-full max-w-screen bg-[#0a0a0a]  ">
            <Navigation />
            <Hero />
            <About id="about" />
            <Marquee />
            <Projects id="projects" />
            <Skills id="skills" />
            <ExperienceEdu />
            <ContactMe id="contact" />
          </div>
        </div>
      )}
    </>
  );
}
export default App;

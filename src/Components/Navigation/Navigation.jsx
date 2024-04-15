/* eslint-disable no-unused-vars */
import React from "react";
import '../Navigation/Navigation.css'
function Navigation() {
  return (
    <div className="text-zinc-200 tracking-wider h-[12vh] flex items-center justify-evenly font-['helvetica'] bg-zinc-950  gap-[10vw]">
      <div className="PortfolioLogo  text-[3vw] ">♠</div>
      <div className="menu flex  justify-between w-[40vw]  text-[1vw] ">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Skills</h1>
        <h1>Projects</h1>
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default Navigation;

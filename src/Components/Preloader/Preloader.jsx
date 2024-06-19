// src/Preloader.js

import React from "react";
import "../Preloader/Preloader.css";
const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bg z-50">
      <div className="pl"></div>
    </div>
  );
};

export default Preloader;

import React from "react";
import mobileImage from "../assets/images/mobile/image-header.jpg";
import desktopImage from "../assets/images/desktop/image-header.jpg";
import arrow from "../assets/images/icon-arrow-down.svg";
const Hero = () => {
  return (
    <div className="relative flex justify-center ">
      <h1 className="absolute z-10 top-1/3 text-5xl text-white uppercase  font-bold   md:text-6xl  lg:text-7xl sm:top-1/4">
        we are <br className="sm:hidden" /> creatives
      </h1>
      <img className="absolute   top-[55%] sm:top-[45%]" src={arrow} alt="" />
      {/* main image */}
      <img className="sm:hidden" src={mobileImage} alt="" />
      <img className="hidden sm:block" src={desktopImage} alt="" />
    </div>
  );
};

export default Hero;

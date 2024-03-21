import React from "react";
import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";
import { navLinks } from "../constent";
const Footer = () => {
  return (
    <footer className="bg-green-200 grid justify-center  py-6 text-center">
      <div className="my-4">
        <img href="#home" src={logo} alt="" />
      </div>
      <div className="flex space-x-5 justify-between text-green-800 capitalize font-semibold ">
        {navLinks?.map((navLink) => (
          <a key={navLink.id} href={navLink.path}>
            {navLink.name}
          </a>
        ))}
      </div>
      <div className="flex space-x-6 py-4 justify-center">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={pinterest} alt="" />
        <img src={twitter} alt="" />
      </div>
    </footer>
  );
};

export default Footer;

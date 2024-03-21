import { useState } from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

import { navLinks } from "../constent";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between fixed top-0 left-0 right-0 px-2 py-4 z-30">
      <div>
        {/* logo */}
        <img src={logo} alt="" />
      </div>

      <div className=" hidden  space-x-8 justify-between transition duration-200 ease-in-out  sm:flex">
        {navLinks.map((link) => (
          <a
            className=" mx-4 text-white hover:text-gray-300 capitalize "
            key={link.id}
            href={link.path}
          >
            {link.name}
          </a>
        ))}
        <button className=" flex justify-center items-center bg-white rounded-2xl px-4 py-1 font-bold  hover:opacity-90">
          contact
        </button>
      </div>

      {/* hmaburger */}
      <button className="sm:hidden" onClick={() => setToggle((prev) => !prev)}>
        <img src={hamburger} alt="" />
      </button>
      <MobileNav toggle={toggle} />
    </nav>
  );
};

export default Navbar;

const MobileNav = ({ toggle }) => {
  return (
    <div
      className={`${
        toggle ? "scale-y-full" : "scale-y-0 origin-top"
      } w-auto h-auto absolute top-24 left-4 right-4 grid bg-slate-50 p-8 justify-center items-center text-center  gap-4 transition ease-in-out duration-150 sm:hidden `}
    >
      {/* triangle */}
      <div className="top-[4.1rem] right-4 fixed w-0 h-0 border-b-[30px] border-b-slate-50 border-solid border-l-[30px] border-l-transparent "></div>

      {navLinks?.map((link) => (
        <a
          key={link.id}
          href={link.path}
          className={`${
            toggle ? "text-gray-400" : "text-transparent"
          }  font-bold capitalize hover:text-gray-300`}
        >
          {link.name}
        </a>
      ))}
      {toggle && (
        <button
          className={`capitalize font-bold w-32 bg-yellow-400 py-2 px-4 my-4 rounded-3xl`}
        >
          contact
        </button>
      )}
    </div>
  );
};

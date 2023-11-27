import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" bg-[#0e0e2c] h-24 max-w-[1240px] mx-auto px-4 justify-between text-white flex items-center ">
      <h1 className="w-full  text-3xl font-bold">MVS Academy™.</h1>
      <ul className=" hidden md:flex text-xl">
        <a href="">
          <li className="p-4">Home</li>
        </a>
        <a href="">
          <li className="p-4">About</li>
        </a>
        <a href="">
          <li className="p-4">Services</li>
        </a>
        <a href="">
          <li className="p-4">Pricing</li>
        </a>
        <a href="">
          <li className="p-4">Contact</li>
        </a>
      </ul>
      <div onClick={handleNav} className="relative md:hidden">
        {!nav ? <IoClose size={20} /> : <IoMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? " bg-[#000300]  fixed left-0 top-0 w-[60%] border-r border-r-gray-600 h-full ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full  text-3xl font-bold m-4">MVS Academy™.</h1>

        <ul className="m-4 uppercase ">
          <li className="p- border-b border-b-gray-700">Home</li>
          <li className="p- border-b border-b-gray-700">About</li>
          <li className="p- border-b border-b-gray-700">Services</li>
          <li className="p- border-b border-b-gray-700">Pricing</li>
          <li className="p- border-b border-b-gray-700">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

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
        <a href="" className=" hover:scale-105 duration-300">
          <li className="p-4 ">Home</li>
        </a>
        <a href="" className=" hover:scale-105 duration-300">
          <li className="p-4">About</li>
        </a>
        <a href="" className=" hover:scale-105 duration-300">
          <li className="p-4">Services</li>
        </a>
        <a href="" className=" hover:scale-105 duration-300">
          <li className="p-4">Pricing</li>
        </a>
        <a href="" className=" hover:scale-105 duration-300">
          <li className="p-4">Contact</li>
        </a>
        <a href="" className=" p-3 hover:scale-105 duration-300">
          <button
            type="button"
            className=" pl-4 pr-4 pt-1 pb-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl  text-center "
          >
            Login
          </button>
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

        <ul className="m-4 uppercase   ">
          <li className="p- border-b mx-auto my-2  hover:scale-105 duration-300 border-b-gray-700">
            Home
          </li>
          <li className="p- border-b my-2  hover:scale-105 duration-300 border-b-gray-700">
            About
          </li>
          <li className="p- border-b my-2 hover:scale-105 duration-300 border-b-gray-700">
            Services
          </li>
          <li className="p- border-b my-2 hover:scale-105 duration-300 border-b-gray-700">
            Pricing
          </li>
          <li className="p- border-b my-2  hover:scale-105 duration-300 border-b-gray-700">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

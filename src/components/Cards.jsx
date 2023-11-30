import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";

import { FaUsers } from "react-icons/fa6";

const Cards = () => {
  return (
    <div>
      <div className=" w-full px-4 bg-white py-[10rem]">
        <div className=" max-w-[1240px] grid md:grid-cols-3 gap-8 mx-auto">
          <div className="w-full shadow-xl flex flex-col py-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300 ">
            <FaUserAlt className="  mt-[-2rem] mx-auto" size={50} />
            <h1 className=" text-2xl py-8 font-extrabold text-center">
              Single User
            </h1>
            <p className="text-4xl  font-bold text-center">$149</p>
            <div className="text-2xl font-medium text-center ">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8 ">1 Granted User</p>
              <p className="py-2 border-b mx-8 ">Send up to 2 GB</p>
            </div>
            <button
              className=" bg-[#00df16] w-[200px] rounded-md mx-auto my-6  py-3 text-black focus:ring-4  "
              type="submit"
            >
              Start Trial
            </button>
          </div>
          <div className=" bg-gray-200 w-full shadow-xl flex flex-col py-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300 ">
            <HiUsers className="  mt-[-2rem] mx-auto" size={50} />
            <h1 className=" text-2xl py-8 font-extrabold text-center">
              Partnership
            </h1>
            <p className="text-4xl  font-bold text-center">$199</p>
            <div className="text-2xl font-medium text-center ">
              <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
              <p className="py-2 border-b mx-8 ">3 Users Allowed</p>
              <p className="py-2 border-b mx-8 ">Send up to 10 GB</p>
            </div>
            <button
              className=" bg-black text-[#00df16] w-[200px] rounded-md mx-auto my-6  py-3 focus:ring-4  "
              type="submit"
            >
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl flex flex-col py-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300 ">
            <FaUsers className="  mt-[-2rem] mx-auto" size={50} />
            <h1 className=" text-2xl py-8 font-extrabold text-center">
              Group Account
            </h1>
            <p className="text-4xl  font-bold text-center">$299</p>
            <div className="text-2xl font-medium text-center ">
              <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
              <p className="py-2 border-b mx-8 ">10 Users Allowed</p>
              <p className="py-2 border-b mx-8 ">Send up to 20 GB</p>
            </div>
            <button
              className=" bg-[#2335be] w-[200px] rounded-md mx-auto my-6  py-3 text-white focus:ring-4  "
              type="submit"
            >
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

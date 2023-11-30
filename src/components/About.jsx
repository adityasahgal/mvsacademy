import React from "react";
import rollball from "./images/rollball_skate.png";

const About = () => {
  return (
    <div className="text-white w-full py-16">
      <div className="max-w-[1240px] px-4 mx-auto grid lg:grid-cols-3">
        <div className=" lg:col-span-2 my-4">
          <h1 className="  hover:scale-105 duration-300 font-bold py-2 md:text-4xl sm:text-3xl text-2xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className=" hover:scale-105 duration-300">
            {" "}
            sign up to our newsletter and stay up to date.{" "}
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <input
              className=" text-black w-[400px] rounded-md my-6 mx-auto py-3"
              type="email"
              placeholder="Enter you email."
            />
            <button
              className=" bg-[#00df16] w-[200px] rounded-md my-6  py-3 text-black bg-gradient-to-r from-gray-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-800 font-medium text-center mx-3 "
              type="submit"
            >
              Notify Me.
            </button>
          </div>

          <p className=" hover:scale-105 duration-300">
            Care about the protection of your data. Read our{" "}
            <span className="  text-[#00df16] ">privacy policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import rollball from "./images/rollball_skate.png";

const About = () => {
  return (
    <div>
      <div className=" grid md:grid-cols-2 ">
        <div className=" rounded-md md:p-8 sm:p-6 p-4">
          <img className="" src={rollball} alt="" />
        </div>
        <div className="text-white rounded max-w-[800px]  justify-center items-center  md:ml-20">
          <h1 className="text-[#4ff368] uppercase md:p-4 sm:p-4 p-4 m-4 font-bold md:text-3xl sm:text-2xl text-xl">
            skating can teach us first job
          </h1>
          <p className=" md:p-4 sm:p-4 p-4 m-4 font-bold md:text-2xl sm:text-xl text-xl">
            Most people who don't want to sacrifice will find excuses. The
            people willing to make sacrifices find solutions. Competitions
            should feel just like practice, so practice like it is the
            competition.
          </p>
          <div className=" h-24 max-w-[800px] md:p-4 sm:p-4 p-4 m-4 justify-center items-center md:pl-48 sm:pl-60 pl-32">
            <button
              type="button"
              className=" bg-[#00df16] w-[200px] rounded-md my-6 mx-auto py-3 text-white bg-gradient-to-r from-green-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium text-center  "
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

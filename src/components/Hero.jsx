import React from "react";
import skate from "./images/skate.png";
import rollball from "./images/rollball_skate.png";

const Hero = () => {
  return (
    <div className=" text-white  justify-center ">
      <div className="grid md:grid-cols-2 gap-5">
        <div className=" max-w-[800px] h-screen w-full mt-[-96px] text-center flex flex-col md:items-center  justify-center">
          <p className=" text-[#25942b] md:text-5xl sm:text-3xl text-2xl font-bold uppercase">
            our safety is in our speed.
          </p>
          <h1 className=" md:text-7xl sm:text-5xl text-3xl font-bold md:py-6 ">
            Start Doing...
          </h1>
          <div className=" flex justify-center items-center ">
            <p className=" font-bold  md:text-6xl sm:text-5xl text-2xl pl-2">
              It is our "LIFE.", "Sanctuary.", "Passion."
            </p>
          </div>
          <p className=" md:text-3xl text-xl font-bold text-gray-600 p-3 ">
            Sometimes you just need to relax and know that everything is going
            to be okay.
          </p>

          <button
            type="button"
            className="  hover:scale-105 duration-500 bg-[#00df16] w-[200px] rounded-md my-6 mx-auto py-3 text-white bg-gradient-to-r from-green-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium text-center  "
          >
            Get started
          </button>
        </div>
        <img
          src={skate}
          className=" relative md:h-[600px] sm:h-[400px] h-[300px] md:w-[auto] md:pl-12 md:-pt-24  mx-auto my-5 px-6 md:mt-[-76px] sm:mt-[-136px] mt-[-196px] hover:scale-105 duration-300 "
          alt="skate image"
        />
      </div>
      <div className=" grid md:grid-cols-2 ">
        <div className=" rounded-md md:p-8 sm:p-6 p-4">
          <img
            className=" hover:scale-105 duration-300"
            src={rollball}
            alt=""
          />
        </div>
        <div className="text-white rounded max-w-[800px]  justify-center items-center  md:ml-20">
          <h1 className=" hover:scale-105 duration-300 text-[#4ff368] uppercase md:p-4 sm:p-4 p-4 m-4 font-bold md:text-3xl sm:text-2xl text-xl">
            skating can teach us first job
          </h1>
          <p className="  hover:scale-105 duration-300 md:p-4 sm:p-4 p-4 m-4 font-bold md:text-2xl sm:text-xl text-xl text-gray-600">
            Most people who don't want to sacrifice will find excuses. The
            people willing to make sacrifices find solutions. Competitions
            should feel just like practice, so practice like it is the
            competition.
          </p>
          <div className=" h-24 max-w-[800px] md:p-4 sm:p-4 p-4 m-4 justify-center items-center md:pl-48 sm:pl-60 pl-32">
            <button
              type="button"
              className=" hover:scale-105 duration-500 bg-[#00df16] w-[200px] rounded-md my-6 mx-auto py-3 text-white bg-gradient-to-r from-green-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium text-center  "
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

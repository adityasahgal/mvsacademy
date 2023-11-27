import React from "react";
import Typed from "react-typed";
import skate from "./images/skate.png";

const Hero = () => {
  return (
    <div className=" text-white  justify-center ">
      <div className="grid md:grid-cols-2 gap-5">
        <div className=" max-w-[800px] h-screen w-full mt-[-96px] text-center flex flex-col md:items-center  justify-center">
          <p className=" text-[#25942b] md:text-5xl sm:text-4xl text-3xl font-bold uppercase">
            our safety is in our speed
          </p>
          <h1 className=" md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
            Start Doing...
          </h1>
          <div className=" flex justify-center items-center ">
            <p className=" font-bold  md:text-6xl sm:text-5xl text-2xl pl-2">
              It is our
            </p>
            <Typed
              className=" md:pl-4 pl-2 font-bold uppercase  md:text-6xl sm:text-5xl text-2xl"
              strings={["LIFE.", "Sanctuary.", "Passion."]}
              typeSpeed={120}
              backSpeed={140}
            />
          </div>
          <p className=" md:text-3xl text-xl font-bold text-gray-600 p-3 ">
            Sometimes you just need to relax and know that everything is going
            to be okay.
          </p>

          <button
            type="button"
            className=" bg-[#00df16] w-[200px] rounded-md my-6 mx-auto py-3 text-white bg-gradient-to-r from-green-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium text-center  "
          >
            Get started
          </button>
        </div>
        <img
          src={skate}
          className=" relative md:h-[600px] sm:h-[400px] h-[300px] md:w-[auto] md:pl-12 md:-pt-24  mx-auto my-5 px-6 md:mt-[-96px] sm:mt-[-136px] mt-[-196px] "
          alt="skate image"
        />
      </div>
    </div>
  );
};

export default Hero;

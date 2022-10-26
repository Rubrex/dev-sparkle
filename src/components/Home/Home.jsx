import React from "react";
import Lottie from "lottie-react";
import codingMachine from "./coding.json";

const Home = () => {
  return (
    <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:mt-0 ">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-5xl  lg:text-6xl  font-extrabold text-slate-800 ">
            Dev.Sparkle
          </h1>
          <p className="font-medium py-2 text-sm md:text-lg text-slate-900">
            Sparkle your development career from now on !
          </p>
        </div>
        <div className="flex flex-col justify-center w-full">
          <Lottie animationData={codingMachine} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;

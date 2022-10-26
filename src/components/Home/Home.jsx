import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/coding.json";
import "./Home.css";
const Home = () => {
  // Lottie Config
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:mt-0 ">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-5xl  lg:text-6xl  font-extrabold text-slate-800 ">
            Dev.Sparkle
          </h1>
          <p className="font-medium py-2 text-sm lg:text-xl text-slate-900">
            Sparkle your development career from now on !
          </p>
        </div>
        <div className="">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default Home;

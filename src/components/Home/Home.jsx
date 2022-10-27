import React from "react";
import Lottie from "lottie-react";
import codingMachine from "./coding.json";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { motion } from "framer-motion";
import { AllInOneContext } from "../../contexts/AllInOneProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { pageVariants } = useContext(AllInOneContext);
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="dark:bg-slate-800 dark:text-white pb-20"
    >
      <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 lg:pt-0 ">
          <div className="flex flex-col justify-center gap-5 lg:ml-16 text-center md:text-start">
            <h1 className="text-5xl  lg:text-6xl  font-extrabold text-slate-800 dark:text-slate-100 ">
              Dev.Sparkle
            </h1>
            <p className="font-medium py-2 text-sm md:text-lg text-slate-900 dark:text-slate-100">
              Sparkle your development career from now on !
            </p>
            {!user?.email && (
              <Link
                to="/register"
                className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white dark:text-slate-100 transition duration-200 rounded shadow-md bg-yellow-500 hover:bg-yellow-700 focus:shadow-outline focus:outline-none w-48 mx-auto md:mx-0"
              >
                Sparkle Now
              </Link>
            )}
          </div>
          <div className="flex flex-col justify-center w-full">
            <Lottie animationData={codingMachine} loop={true} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

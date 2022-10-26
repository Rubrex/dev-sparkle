import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { AllInOneContext } from "../../contexts/AllInOneProvider";
import { useContext } from "react";

const NotFoundPage = () => {
  const { pageVariants } = useContext(AllInOneContext);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="dark:bg-slate-800 dark:text-white pt-10"
    >
      <div className="min-h-screen flex flex-col justify-center items-center">
        <img src={logo} alt="" />
        <p className="text-xl pt-5">
          Page Not Found. Go back{" "}
          <Link to="/" className="text-blue-400 text-2xl font-bold">
            Home
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;

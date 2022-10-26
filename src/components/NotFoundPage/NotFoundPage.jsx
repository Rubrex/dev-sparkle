import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { FramerContext } from "../../contexts/FramerMotionProvider";
import { useContext } from "react";

const NotFoundPage = () => {
  const { pageVariants } = useContext(FramerContext);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <img src={logo} alt="" />
      <p className="text-xl pt-5">
        Page Not Found. Go back{" "}
        <Link to="/" className="text-blue-400 text-2xl font-bold">
          Home
        </Link>
      </p>
    </motion.div>
  );
};

export default NotFoundPage;

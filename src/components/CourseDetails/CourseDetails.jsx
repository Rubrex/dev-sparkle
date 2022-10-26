import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa";
import Pdf from "react-to-pdf";
import { motion } from "framer-motion";
import { useContext } from "react";
import "./CourseDetails.css";
import { AllInOneContext } from "../../contexts/AllInOneProvider";

const CourseDetails = () => {
  const ref = createRef();
  const { pageVariants, theme } = useContext(AllInOneContext);

  const {
    _id,
    author,
    author_img,
    course,
    course_details,
    img,
    last_updated,
    what_needed,
  } = useLoaderData()[0];

  const bgOverlay = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    minHeight: "420px",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `linear-gradient(200deg, rgba(0, 0, 50,0.6) 0%, rgba(36,36,37,0.2) 100%),url("${img}")`,
  };

  const bgUnlockWhite = {
    position: "absolute",
    minHeight: "300px",
    backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.94) 26%, rgba(255,255,255,1) 100%)`,
  };
  const bgUnlockDark = {
    position: "absolute",
    minHeight: "300px",
    backgroundImage: `linear-gradient(180deg, rgba(30, 41, 59,0) 0%, rgba(30, 41, 59,0.94) 26%, rgba(30, 41, 59,1) 100%)`,
  };

  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="dark:bg-slate-800 dark:text-white pb-20"
    >
      <main
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative"
        ref={ref}
      >
        {/* Course Banner */}
        <div style={bgOverlay} className="rounded-lg">
          <Pdf targetRef={ref} filename={`${course}_tutorial.pdf`} scale={0.6}>
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="absolute right-10 top-10 tooltip"
              >
                <FaRegFilePdf className="text-4xl text-white hover:text-blue-300" />
                <span className="tooltiptext">Download PDF</span>
              </button>
            )}
          </Pdf>
        </div>

        {/* Author profile */}
        <div className="flex py-10">
          <img src={author_img} alt={author} className="rounded-full w-14" />
          <div className="flex flex-col justify-around ml-4">
            <span className="font-medium text-slate-900 dark:text-white">
              {author}
            </span>
            <span className="text-slate-400 font-medium text-sm">
              Last updated: {last_updated}
            </span>
          </div>
        </div>
        {/* Course Name */}
        <h2 className="text-3xl font-extrabold mb-3 text-slate-800 dark:text-white">
          {course}
        </h2>
        {/* Prerequisites */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-md font-medium">Prerequisites:- </span>
          {what_needed.map((tech) => {
            return (
              <span className="border-2 border-emerald-600 py-1 px-3 rounded-md text-xs font-medium">
                {tech}
              </span>
            );
          })}
        </div>
        {/* Course Details */}
        <section>
          <p>{course_details}</p>
        </section>
        <div
          className=" flex justify-center items-end  bottom-0 left-0 right-0 dark:text-white"
          style={!theme ? bgUnlockWhite : bgUnlockDark}
        >
          <Link
            to={`checkout`}
            className="mb-10 text-xl font-medium border shadow-md py-2 px-5 hover:border-red-600 hover:text-red-400"
          >
            Unlock Full Content
          </Link>
        </div>
      </main>
    </motion.main>
  );
};

export default CourseDetails;

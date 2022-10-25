import React, { createRef } from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa";
import Pdf from "react-to-pdf";
import "./CourseDetails.css";

const CourseDetails = () => {
  const ref = createRef();

  const {
    _id,
    author,
    author_img,
    course,
    course_details,
    img,
    last_updated,
    price,
  } = useLoaderData()[0];

  const bgOverlay = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    minHeight: "420px",
    position: "relative",
    backgroundImage: `linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(36,36,37,0.12368697478991597) 100%),url("${img}")`,
  };

  const bgUnlock = {
    position: "absolute",
    backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 26%, rgba(255,255,255,1) 100%)`,
  };

  return (
    <main
      className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative"
      ref={ref}
    >
      {/* Course Banner */}
      <div style={bgOverlay}>
        <Pdf targetRef={ref} filename={`${course}_tutorial.pdf`} scale={0.6}>
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="absolute right-10 top-10 tooltip"
            >
              <FaRegFilePdf className="text-4xl text-blue-500 hover:text-emerald-700" />
              <span className="tooltiptext">Download PDF</span>
            </button>
          )}
        </Pdf>

        <h2 className="text-3xl font-bold mb-32">{course}</h2>
      </div>
      {/* Author profile */}
      <div className="flex py-5">
        <img src={author_img} alt={author} className="rounded-full w-14" />
        <div className="flex flex-col justify-around ml-4">
          <span className="font-medium text-slate-900">{author}</span>
          <span className="text-slate-700">{last_updated}</span>
        </div>
      </div>
      {/* Course Details */}
      <section>
        <p>{course_details}</p>
      </section>
      <div
        className="h-96 flex justify-center items-end  bottom-0 left-0 right-0"
        style={bgUnlock}
      >
        <button className="mb-16 text-xl font-medium border py-2 px-5 hover:border-blue-600 hover:text-blue-900">
          Unlock full content
        </button>
      </div>
    </main>
  );
};

export default CourseDetails;

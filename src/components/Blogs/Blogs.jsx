import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { AllInOneContext } from "../../contexts/AllInOneProvider";

const Blogs = () => {
  const faq = useLoaderData();
  const { pageVariants } = useContext(AllInOneContext);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="dark:bg-slate-800 pb-20"
    >
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-10">
        <h2 className="text-center  text-3xl font-bold text-slate-800 dark:text-slate-100">
          Get the questions answered
        </h2>
        <div className="grid md:grid-cols-2 gap-10 mt-10 dark:text-slate-100">
          {faq.map((each) => {
            return (
              <div
                key={each._id}
                className="border px-5 py-2 shadow-sm hover:shadow-lg rounded-lg"
              >
                <h2 className="text-xl font-bold border-l-4 border-l-blue-500 pl-3 my-5">
                  {each.question}
                </h2>
                <p className="font-medium">{each.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Blogs;

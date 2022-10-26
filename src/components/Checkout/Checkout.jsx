import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

import { motion } from "framer-motion";
import { useContext } from "react";
import { AllInOneContext } from "../../contexts/AllInOneProvider";

const Checkout = () => {
  const { course, price } = useLoaderData()[0];
  const { pageVariants } = useContext(AllInOneContext);

  // Event Handlers
  const handleSubmit = (event) => {
    const yourName = event.target.username.value;
    event.preventDefault();
    Swal.fire(`${yourName}!`, "Thank you for your feedback", "success");
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="dark:bg-slate-800 dark:text-white"
    >
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="w-full max-w-xs mx-auto py-10 ">
          <form className="form dark:bg-slate-600" onSubmit={handleSubmit}>
            <h2 className="text-center text-2xl font-medium ">Checkout</h2>
            <p className="my-1">Selected Course: {course}</p>
            <p>Price: {price}</p>
            <div className="form-control">
              <label htmlFor="username">Your Name</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                id="username"
              />
            </div>
            <div className="form-control">
              <label htmlFor="textarea">Feedback</label>
              <textarea
                type="textarea"
                name="textarea"
                placeholder="Your Feedback"
                id="textarea"
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                id="email"
              />
            </div>

            <button type="submit" className="bg-red-500 text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;

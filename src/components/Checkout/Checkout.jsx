import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const { course, price } = useLoaderData()[0];

  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="w-full max-w-xs mx-auto py-10">
        <form className="form">
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
  );
};

export default Checkout;

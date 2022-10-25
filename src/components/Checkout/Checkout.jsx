import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const { course, price } = useLoaderData()[0];

  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <h2>{course}</h2>
      <span>{price}</span>
    </div>
  );
};

export default Checkout;

import React from "react";
import { useLoaderData } from "react-router-dom";

const Faq = () => {
  const faq = useLoaderData();
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h2>FAQ : {faq.length}</h2>
    </div>
  );
};

export default Faq;

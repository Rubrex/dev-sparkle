import React from "react";
import { useLoaderData } from "react-router-dom";

const Faq = () => {
  const faq = useLoaderData();
  return (
    <div>
      <h2>FAQ : {faq.length}</h2>
    </div>
  );
};

export default Faq;

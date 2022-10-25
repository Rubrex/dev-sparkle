import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Faq = () => {
  const faq = useLoaderData();

  const { amarNaam } = useContext(AuthContext);
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h2>FAQ : {faq.length}</h2>
      {amarNaam}
    </div>
  );
};

export default Faq;

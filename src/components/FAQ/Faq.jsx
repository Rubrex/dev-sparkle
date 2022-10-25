import React from "react";
import { useLoaderData } from "react-router-dom";

const Faq = () => {
  const faq = useLoaderData();
  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <h2 className="text-center mt-10 text-3xl font-bold text-slate-800">
        Frequestly asked questions
      </h2>
      <div className="grid md:grid-cols-2 gap-10 mt-10 ">
        {faq.map((each) => {
          return (
            <div
              key={each._id}
              className="border px-5 py-2 shadow-md hover:shadow-lg"
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
  );
};

export default Faq;

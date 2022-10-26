import React from "react";
import { createContext } from "react";

export const AllInOneContext = createContext();

const AllInOneProvider = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    in: {
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 80 },
      },
    },
    out: {
      opacity: 0,
      scale: 0.9,
    },
  };

  //   context values
  const values = { pageVariants };
  return (
    <AllInOneContext.Provider value={values}>
      {children}
    </AllInOneContext.Provider>
  );
};

export default AllInOneProvider;

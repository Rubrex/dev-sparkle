import React from "react";
import { useState } from "react";
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
  const [theme, setTheme] = useState(false);

  // Dark Mode Switching
  const switchTheme = () => setTheme(!theme);

  //   context values
  const values = { pageVariants, theme, switchTheme };
  return (
    <AllInOneContext.Provider value={values}>
      {children}
    </AllInOneContext.Provider>
  );
};

export default AllInOneProvider;

import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // States

  let contextValue = {};

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

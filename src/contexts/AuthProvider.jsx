import React, { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // States

  // Signin with email and password

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // context values
  let contextValue = { signUp };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import React, { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // States

  // Signup with email and password

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Signin with email and password

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // context values
  let contextValue = { signUp, signIn };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

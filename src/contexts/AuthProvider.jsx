import React, { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  // States

  const [user, setUser] = useState();

  // Signup with email and password

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Signin with email and password

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout user

  const logOut = () => {
    return signOut(auth);
  };

  // auth Observer

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
      }
    });

    return () => unsubscribe();
  }, []);

  // context values
  let contextValue = { user, signUp, signIn, logOut };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

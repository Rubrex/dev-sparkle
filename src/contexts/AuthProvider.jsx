import React, { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // States

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Signup with email and password

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update user

  const updateUserProfile = (profile) => {
    // pass profile ={displayName: "name",photoURL:"link"}
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  // Signin with email and password

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Verify email address

  const verifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  // Reset Password

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Google Login
  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Logout user

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // auth Observer

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // context values
  const contextValue = {
    user,
    signUp,
    verifyEmail,
    resetPassword,
    signIn,
    logOut,
    loading,
    setLoading,
    updateUserProfile,
    providerLogin,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

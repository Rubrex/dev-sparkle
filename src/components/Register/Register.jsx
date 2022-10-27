import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { motion } from "framer-motion";
import { AllInOneContext } from "../../contexts/AllInOneProvider";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  // Contexts
  const { pageVariants } = useContext(AllInOneContext);
  const { signUp, updateUserProfile, setLoading, verifyEmail } =
    useContext(AuthContext);

  // Event Handlers

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.username.value;
    const photoUrl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, displayName, photoUrl);
    signUp(email, password)
      .then((res) => {
        console.log(res);
        emailSent();
        updateProfile({ displayName: displayName, photoURL: photoUrl });

        // navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const emailSent = () => {
    verifyEmail().then(() => {
      toast.success("Verification email sent");
      setLoading(false);
    });
  };

  const updateProfile = (profile) => {
    updateUserProfile(profile)
      .then(() => {})
      .catch((err) => toast.error(err.code));
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="dark:bg-slate-800 dark:text-white pt-10 pb-20"
    >
      <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="w-full max-w-xs mx-auto py-10">
          <form className="form dark:bg-slate-700 " onSubmit={handleSubmit}>
            <h2 className="text-center text-2xl font-medium ">Signup</h2>
            <div className="form-control">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                id="username"
                className="dark:text-slate-800"
              />
            </div>
            <div className="form-control">
              <label htmlFor="photourl">Photo URL</label>
              <input
                type="text"
                name="photourl"
                placeholder="Photo URL"
                id="photourl"
                className="dark:text-slate-800"
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                id="email"
                className="dark:text-slate-800"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                className="dark:text-slate-800"
                required
              />
            </div>
            <span className="text-xs my-1">
              Already have an account? <Link to="/login">Login</Link>
            </span>
            <button type="submit" className="bg-yellow-500 text-white">
              Register
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;

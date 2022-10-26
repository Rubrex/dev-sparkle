import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { motion } from "framer-motion";
import { FramerContext } from "../../contexts/FramerMotionProvider";

import "./Login.css";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  // Context
  const { signIn, providerLogin } = useContext(AuthContext);
  const { pageVariants } = useContext(FramerContext);
  const location = useLocation();
  const navigate = useNavigate();
  // get private route location
  const from = location.state?.from?.pathname || "/";

  // Event handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => {
        console.log(res);
        form.reset();
        navigate(from, { replace: true });
        toast.success("Login successful");
      })
      .catch((err) => toast.error("Wrong email/password."));
  };

  // Google Login
  const handleGoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    providerLogin(googleProvider)
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Login successful");
      })
      .catch((err) => toast.error("Login Failed"));
  };
  // Github Login
  const handleGithubLogin = () => {
    const githubProvider = new GithubAuthProvider();
    providerLogin(githubProvider)
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Login successful");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className=" px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 "
    >
      <div className="w-full max-w-xs mx-auto my-10 ">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="text-center text-2xl font-medium ">Login</h2>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              id="email"
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
              required
            />
          </div>
          <span className="text-xs my-2">
            Don't have an account yet?{" "}
            <Link to="/register" className="">
              Sign Up
            </Link>
          </span>
          <button type="submit" className="bg-blue-500 text-white">
            Login
          </button>
          <hr className="hr-divider" data-content="OR" />
          <div onClick={handleGoogleLogin} className="other-sign-in">
            <FcGoogle style={{ fontSize: "32px" }} />
            <p>Continue with Google</p>
          </div>
          <div onClick={handleGithubLogin} className="other-sign-in">
            <ImGithub style={{ fontSize: "32px" }} />
            <p>Continue with Github</p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;

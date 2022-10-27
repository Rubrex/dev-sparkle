import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { motion } from "framer-motion";
import "./Login.css";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AllInOneContext } from "../../contexts/AllInOneProvider";
import { useState } from "react";
import { useRef } from "react";

const Login = () => {
  // useRef
  const forgotEmailValue = useRef();

  // state
  const [reset, setReset] = useState(false);

  // Context
  const { signIn, providerLogin, resetPassword, setLoading } =
    useContext(AuthContext);
  const { pageVariants } = useContext(AllInOneContext);
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
        form.reset();
        if (res.user?.emailVerified) {
          navigate(from, { replace: true });
          toast.success("Login successful");
          return;
        }
        toast.error("Please verify your email");
      })
      .catch((err) => {
        toast.error("Wrong email/password.");
        setLoading(false);
      });
  };

  // Google Login
  const handleGoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    providerLogin(googleProvider)
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Login successful");
      })
      .catch((err) => {
        toast.error(err.code);
        setLoading(false);
      });
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
        setLoading(false);
      });
  };

  // Forgot Password
  const handleForgetToggler = () => {
    setReset(!reset);
  };

  const handleForgetPassword = () => {
    resetPassword(forgotEmailValue?.current?.value)
      .then(() => {
        toast.success("Password Reset link sent");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="dark:bg-slate-800 dark:text-white pt-10 pb-20"
    >
      <div className=" px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="w-full max-w-xs mx-auto ">
          <form className="form dark:bg-slate-700" onSubmit={handleSubmit}>
            <h2 className="text-center text-2xl font-medium ">Login</h2>
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
            <span className="text-xs my-2">
              Don't have an account yet?{" "}
              <Link to="/register" className="">
                Sign Up
              </Link>
            </span>
            {reset ? (
              <div className="flex items-center border">
                <input
                  type="email"
                  name="forgot_password_email"
                  className=" outline-none w-full  dark:bg-slate-700"
                  ref={forgotEmailValue}
                />{" "}
                <span
                  className="text-md bg-blue-500 text-white hover:bg-slate-800 cursor-pointer py-2 px-4 "
                  onClick={() => {
                    handleForgetPassword();
                    handleForgetToggler();
                  }}
                >
                  Reset
                </span>
              </div>
            ) : (
              <span
                onClick={handleForgetToggler}
                className="text-sm hover:text-blue-500 cursor-pointer"
              >
                Forgot Password ?
              </span>
            )}

            <button type="submit" className="bg-blue-500 text-white">
              Login
            </button>
            <hr className="hr-divider " data-content="OR" />
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
      </div>
    </motion.div>
  );
};

export default Login;

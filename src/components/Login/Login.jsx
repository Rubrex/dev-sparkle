import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  // Context
  const { signIn } = useContext(AuthContext);
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
      .catch((err) => toast.error("Login Failed, Try again."));
  };

  return (
    <div className=" px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
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
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
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
        </form>
      </div>
    </div>
  );
};

export default Login;

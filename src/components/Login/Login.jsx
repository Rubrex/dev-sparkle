import React from "react";

const Login = () => {
  return (
    <div classNameName=" px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="w-full max-w-xs mx-auto my-10 ">
        <form className="form">
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
          <button type="submit" className="bg-blue-500 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="w-full max-w-xs mx-auto py-10">
        <form className="form">
          <h2 className="text-center text-2xl font-medium ">Signup</h2>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
            />
          </div>
          <div className="form-control">
            <label htmlFor="photourl">Photo URL</label>
            <input
              type="text"
              name="photourl"
              placeholder="Photo URL"
              id="photourl"
            />
          </div>
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

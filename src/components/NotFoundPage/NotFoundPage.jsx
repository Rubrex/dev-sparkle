import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img src={logo} alt="" />
      <p className="text-xl pt-5">
        Page Not Found. Go back{" "}
        <Link to="/" className="text-blue-400 text-2xl font-bold">
          Home
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;

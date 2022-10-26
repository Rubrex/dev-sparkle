import React, { useContext, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AllInOneContext } from "../../contexts/AllInOneProvider";
import { AuthContext } from "../../contexts/AuthProvider";
import "./NavLinks.css";

const NavLinks = () => {
  // Contexts
  const { logOut, user } = useContext(AuthContext);
  const { theme, switchTheme } = useContext(AllInOneContext);

  // Event handlers
  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Successfully logged out"))
      .catch((err) => toast.error(err.code));
  };
  return (
    <>
      <li>
        <NavLink
          to="/courses"
          className={
            "hoverLink text-sm font-medium tracking-wide  transition-colors duration-200 hover:text-primaryColor"
          }
        >
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className="hoverLink text-sm font-medium tracking-wide  transition-colors duration-200 hover:text-primaryColor"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/faq"
          className="hoverLink text-sm font-medium tracking-wide  transition-colors duration-200 hover:text-primaryColor"
        >
          FAQ
        </NavLink>
      </li>
      <li className="flex items-center">
        <DarkModeToggle onChange={switchTheme} checked={theme} size={60} />
      </li>
      <li>
        {user?.uid ? (
          <div className="flex items-center gap-2">
            {user?.photoURL === null ? (
              <Link to="/update_profile" className="tooltip-header">
                <img
                  src="https://lh3.googleusercontent.com/a/ALm5wu2LGJfyEFfwTi2u9E8djoea3noc3UjErmBm_cY8Qw=s96-c"
                  className="w-10 mr-4 rounded-full tooltip-block"
                />
                <span className="tooltiptext_header">{user?.displayName}</span>
              </Link>
            ) : (
              <Link to="/update_profile" className="tooltip-header">
                <img
                  className="h-10 mr-4 rounded-full tooltip-block"
                  src={user?.photoURL}
                  alt="user_profile_picture"
                />
                <span className="tooltiptext_header">{user?.displayName}</span>
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center w-24  h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to="/Login"
              className="inline-flex items-center justify-center w-24 h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Login
            </Link>
          </div>
        )}
      </li>
    </>
  );
};

export default NavLinks;

import React, { useState } from "react";
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import { Link, NavLink } from "react-router-dom";

const NavLinks = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <li>
        <NavLink
          to="/courses"
          className={`font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primaryColor`}
        >
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/faq"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primaryColor"
        >
          FAQ
        </NavLink>
      </li>
      <li className="flex items-center">
        <DarkModeToggle
          onChange={setIsDarkMode}
          isDarkMode={isDarkMode}
          size={60}
        />
      </li>
      <li>
        <div className="flex items-center gap-2">
          <Link
            to="/Login"
            className="inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-yellow-400 hover:bg-yellow-700 focus:shadow-outline focus:outline-none"
          >
            Register
          </Link>
        </div>
      </li>
    </>
  );
};

export default NavLinks;

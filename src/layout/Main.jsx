import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { AllInOneContext } from "../contexts/AllInOneProvider";

const Main = () => {
  const { theme } = useContext(AllInOneContext);

  return (
    <div className={`${theme ? "dark" : ""} `}>
      <div className="dark:bg-slate-800">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Main;

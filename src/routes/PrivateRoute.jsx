import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }
  if (user?.email) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }
};

export default PrivateRoute;

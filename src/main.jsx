import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AllInOneProvider from "./contexts/AllInOneProvider";
import AuthProvider from "./contexts/AuthProvider";
import "./index.css";
import router from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AllInOneProvider>
        <Toaster />
        <RouterProvider router={router}></RouterProvider>
      </AllInOneProvider>
    </AuthProvider>
  </React.StrictMode>
);

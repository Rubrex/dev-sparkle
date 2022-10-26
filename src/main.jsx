import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import FramerMotionProvider from "./contexts/FramerMotionProvider";
import "./index.css";
import router from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <FramerMotionProvider>
        <Toaster />
        <RouterProvider router={router}></RouterProvider>
      </FramerMotionProvider>
    </AuthProvider>
  </React.StrictMode>
);

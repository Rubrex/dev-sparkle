import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Checkout from "../components/Checkout/Checkout";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import Faq from "../components/FAQ/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Register from "../components/Register/Register";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "update_profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: async () =>
          fetch("https://dev-sparkle-server.vercel.app/blogs"),
      },
      {
        path: "courses",
        element: <Courses />,
        loader: async () =>
          fetch("https://dev-sparkle-server.vercel.app/courses"),
      },
      {
        path: "courses/:courseId",
        element: <CourseDetails />,
        loader: async ({ params }) =>
          fetch(
            `https://dev-sparkle-server.vercel.app/courses/${params.courseId}`
          ),
      },
      {
        path: "courses/:id/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          fetch(`https://dev-sparkle-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);

export default router;

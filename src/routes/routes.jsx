import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import Faq from "../components/FAQ/Faq";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: async () =>
          fetch("https://dev-sparkle-server.vercel.app/courses"),
      },
      {
        path: "/courses/:courseId",
        element: <CourseDetails />,
        // loader: async ({ params }) =>
        //   fetch(
        //     `https://dev-sparkle-server.vercel.app/courses/${params.courseId}`
        //   ),
      },
      {
        path: "/faq",
        element: <Faq />,
        loader: async () => fetch("https://dev-sparkle-server.vercel.app/faq"),
      },
    ],
  },
]);

export default router;

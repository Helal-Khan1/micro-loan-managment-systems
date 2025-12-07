import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Error from "../components/Error";
import AboutUs from "../pages/AboutUs/AboutUs";
import AllLoan from "../pages/AllLoan/AllLoan";
import Loding from "../pages/Loding";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/LogIn/Login";
import PrivetRoutes from "./PrivetRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "err",
        element: <AllLoan></AllLoan>,
      },
      {
        path: "aboutUs",
        element: (
          <PrivetRoutes>
            <AboutUs></AboutUs>
          </PrivetRoutes>
        ),
      },
      {
        path: "Loding",
        element: (
          <PrivetRoutes>
        
            <Loding></Loding>
          </PrivetRoutes>
        ),
      },
    ],
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "signup",
    Component: SignUp,
  },
]);

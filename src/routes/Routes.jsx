import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Error from "../components/Error";
import AboutUs from "../pages/AboutUs/AboutUs";
import AllLoan from "../pages/AllLoan/AllLoan";
import Loding from "../pages/Loding";
import SignUp from "../pages/MainLayouts/SignUp/SignUp";
import Login from "../pages/LogIn/Login";
import PrivetRoutes from "./PrivetRoutes";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import ApplicationFrom from "../pages/Application/ApplicationFrom";
import DeshbordLayouts from "../layouts/DeshbordLayouts";
import BannerApply from "../pages/Application/BannerApply";
import ManageUsers from "../pages/Deshbord/Admin/ManageUsers";
import ManajAllLoan from "../pages/Deshbord/Admin/ManajAllLoan";
import LoanApplications from "../pages/Deshbord/Admin/LoanApplications";
import UpdateLoan from "../pages/Deshbord/UpdateLoan/UpdateLoan";
import AdminRouts from "./adminRouts";
import AddLoan from "../pages/Deshbord/Manager/AddLoan";
import ManagLoan from "../pages/Deshbord/Manager/ManagLoan";
import PandingLoanAplication from "../pages/Deshbord/Manager/PandingLoanAplication";
import ApprivedAllLoan from "../pages/Deshbord/Manager/ApprivedAllLoan";
import ManagerProfile from "../pages/Deshbord/Manager/ManagerProfile";

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
        path: "loan",
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
      {
        path: "details/:id",
        element: (
          <PrivetRoutes>
            <DetailsPage></DetailsPage>
          </PrivetRoutes>
        ),
      },
      {
        path: "applicationFrom/:id",
        element: (
          <PrivetRoutes>
            <ApplicationFrom></ApplicationFrom>
          </PrivetRoutes>
        ),
      },
      {
        path: "Banner",
        element: (
          <PrivetRoutes>
            <BannerApply></BannerApply>
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
  {
    path: "deshbord",
    element: (
      <PrivetRoutes>
        <DeshbordLayouts></DeshbordLayouts>
      </PrivetRoutes>
    ),
    children: [
      {
        path: "users-manag",
        element: (
          <AdminRouts>
            <ManageUsers></ManageUsers>
          </AdminRouts>
        ),
      },
      {
        path: "All_loan_manaj",
        element: (
          <AdminRouts>
            <ManajAllLoan></ManajAllLoan>
          </AdminRouts>
        ),
      },
      {
        path: "loan_application",
        element: (
          <AdminRouts>
            <LoanApplications></LoanApplications>
          </AdminRouts>
        ),
      },
      {
        path: "updateLoan/:id",
        element: (
          <AdminRouts>
            <UpdateLoan></UpdateLoan>
          </AdminRouts>
        ),
      },
      {
        path: "add_loan_aplications",
        element: <AddLoan></AddLoan>,
      },
      {
        path: "manag_loan",
        element: <ManagLoan></ManagLoan>,
      },
      {
        path: "pannding_loan",
        element: <PandingLoanAplication />,
      },
      {
        path: "apprived_loan",
        element: <ApprivedAllLoan></ApprivedAllLoan>,
      },
      {
        path: "Profile",
        element: <ManagerProfile />,
      },
    ],
  },
]);

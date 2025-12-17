import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { MdContactSupport } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import Loading from "../../../pages/Loding";
import useTheme from "../../../utils";
const Naber = () => {
  const { user, loading, logOutUser, setLoading } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const logouthandalar = () => {
    logOutUser()
      .then((res) => {
        console.log(res.user);
        toast("user Seccussfully log Out");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-2 border-blue-500 rounded-md px-2" : ""
          }
        >
          <IoHome /> Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/loan"
          className={({ isActive }) =>
            isActive ? "border-2 border-blue-500 rounded-md px-2" : ""
          }
        >
          💰All-Loans
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            isActive ? "border-2 border-blue-500 rounded-md px-2" : ""
          }
        >
          <FcAbout /> About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/loding"
          className={({ isActive }) =>
            isActive ? "border-2 border-blue-500 rounded-md px-2" : ""
          }
        >
          <MdContactSupport /> Contact
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/deshbord"
            className={({ isActive }) =>
              isActive ? "border-2 border-blue-500 rounded-md px-2" : ""
            }
          >
            <MdContactSupport /> Deshbord
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="lg:max-w-7xl w-11/12 mx-auto flex items-center justify-between">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1  absolute mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>

          <div className="flex items-center">
            <img src={logo} className="w-12" alt="" />
            <h1 className="md:font-bold  hidden md:block ">Micro Loan</h1>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end space-x-2.5">
          <button onClick={toggleTheme} className="btn btn-circle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {loading ? (
            <button className="btn btn-disabled">
              <span className="loading loading-spinner loading-sm"></span>{" "}
              Loading
            </button>
          ) : user ? (
            <button onClick={logouthandalar} className="btn">
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">Log In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Naber;

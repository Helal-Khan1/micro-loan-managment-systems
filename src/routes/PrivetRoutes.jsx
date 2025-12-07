import React from "react";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/Loding";
import { Navigate, useLocation } from "react-router";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useAuth(); // fixed typo
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (user?.email) {
    return children;
  }
  return (
    <Navigate state={location.pathname} replace="true" to="/login"></Navigate>
  );
};

export default PrivetRoutes;

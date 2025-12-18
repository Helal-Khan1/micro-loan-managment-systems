import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loading from "../pages/Loding";

const BorrowerRouts = ({ children }) => {
  const { loading } = useAuth();
  const { role, isloading } = useRole();
  if (loading || isloading) {
    return <Loading></Loading>;
  }

  if (role !== "borrower") {
    return (
      <>
        <div className="flex items-center justify-center ">
          <h1 className="font-extrabold text-7xl">Acces for forbiden </h1>
        </div>
      </>
    );
  }
  return children;
};

export default BorrowerRouts;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loading from "../Loding";
import { FaPercentage } from "react-icons/fa";
import { Link } from "react-router";

const AllLoan = () => {
  const { isLoading, data: all_loan } = useQuery({
    queryKey: ["all_Loan"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_HOST_URL}/all_loan`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(all_loan);
  return (
    <div className="lg:min-w-7xl sm:w-11/12 lg:p-4 px-3 md:px-2   dark:text-white mt-5 mx-auto">
      <div className="grid md:grid-cols-2 space-y-5 lg:grid-cols-3">
        {all_loan.map((loan) => (
          <div className="card bg-base-100 sm:w-96 shadow-sm">
            <figure>
              <img src={loan.loanImage} className="h-70 w-full" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{loan.loanTitle}</h2>
              <div className="flex items-center justify-center">
                <p>
                  <span className="font-bold">Category: </span>
                  {loan.category}
                </p>
                <p className="text-gray-600 dark:text-white text-sm flex items-center gap-1">
                  <span className="font-bold">Interest:</span>{" "}
                  <FaPercentage className="text-green-500" />
                  {loan.interestRate}
                </p>
              </div>
              <div className="divider"></div>
              <div className="card-actions items-center">
                <p className="text-sm dark:text-white">
                  <span className="font-bold text-gray-800  bg-white/50 ">Max-Loan:</span>{" "}
                  💰
                  {loan.maxLimit}
                </p>
                <Link to={`/details/${loan._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllLoan;

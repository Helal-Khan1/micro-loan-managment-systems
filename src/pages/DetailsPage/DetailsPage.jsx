import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router";
import Loading from "../Loding";
import { FaPercentage } from "react-icons/fa";
import useAxiousSecoure from "../../hooks/useAxiousSecoure";

const DetailsPage = () => {
  const { id } = useParams();
  const axioussecore = useAxiousSecoure();

  const { isLoading, data: loan } = useQuery({
    queryKey: ["singleLoanCard"],
    queryFn: async () => {
      const res = await axioussecore.get(`/all_loan/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  const {
    category,
    description,
    interestRate,
    loanImage,
    loanTitle,
    maxLimit,

    emiPlans,
  } = loan;
  console.log(loan);
  return (
    <div className="max-w-7xl w-11/12 mt-10 mx-auto">
      <div className="flex flex-col sm:flex-row justify-between mb-5 gap-5 ">
        <div className="flex-1 flex justify-center sm:justify-start">
          <img
            src={loanImage}
            className="w-full sm:w-[400px] lg:w-[500px] object-cover rounded-sm"
            alt=""
          />
        </div>

        <div className="flex-1">
          <div className="bg-base-300 rounded-sm px-5 py-3">
            <h1 className="font-bold text-2xl md:text-4xl">{loanTitle}</h1>
            <p className="mt-1">
              <span className="font-semibold">Category:</span> {category}
            </p>
          </div>

          <div className="bg-base-300 px-5 py-3 rounded-sm mt-5">
            <h1 className="font-bold text-xl md:text-3xl">Description</h1>
            <p className="mt-2 text-sm md:text-base">{description}</p>
          </div>

          <div className="bg-base-300 px-5 py-3 rounded-sm mt-5">
            <h1 className="font-bold text-xl md:text-3xl">
              Available EMI Plans
            </h1>
            <div className="mt-2 flex flex-wrap gap-3">
              {emiPlans?.map((plan) => (
                <span key={plan} className="text-sm md:text-base">
                  Month {plan}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-base-300 px-5 py-3 rounded-sm mt-5">
            <h1 className="font-bold text-xl md:text-3xl">
              Max-Loan & Interest Rate
            </h1>
            <div className="flex justify-between max-w-full sm:max-w-[400px] mt-4">
              <p>
                <span className="font-semibold">Max-Loan: </span>💰{maxLimit}
              </p>
              <p className="text-gray-600 text-sm flex items-center gap-1">
                <span className="font-bold">Interest:</span>
                <FaPercentage className="text-green-500" /> {interestRate}
              </p>
            </div>
          </div>

          <Link to={`/applicationFrom/${loan._id}`}>
            <button className="btn mt-5 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] bg-primary text-white">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

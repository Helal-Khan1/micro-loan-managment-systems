import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const AvlableLoan = () => {
  const { isLoading, data: loan } = useQuery({
    queryKey: ["avlaibleLoan"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_HOST_URL}/avilableloan?isHome=true`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="text-center mt-[100px]">Loading available loans...</div>
    );
  }

  if (!loan || loan.length === 0) {
    return (
      <div className="text-center mt-[100px]">
        No loans currently available.
      </div>
    );
  }

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mt-20 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Available Loan
      </motion.h2>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {loan?.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border duration-300 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="text-primary bg-base-100  mb-4 mx-auto border p-4 rounded-xl w-full">
              <img
                src={step.loanImage}
                className="h-48   rounded-lg object-cover w-full"
                alt={step.loanTitle}
              />
            </div>

            <h3 className="text-xl  dark:text-base-100 text-gray-800  font-semibold mb-3">
              {step.loanTitle}
            </h3>

            <p className="text-gray-600 text-sm mb-4 flex-grow">
              {step.description}
            </p>

            <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
              <p className="text-sm  dark:text-base-100 text-gray-800">
                <span className="font-bold dark:text-base-100 text-gray-800">
                  Max-Loan:
                </span>{" "}
                💰
                {step.maxLimit}
              </p>

              <Link to={`/details/${step._id}`}>
                <button className="flex items-center gap-1.5 text-white bg-[#483ad4] hover:bg-[#342a9b] text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-300">
                  View Details <FaArrowRight className="h-3 w-3" />
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AvlableLoan;

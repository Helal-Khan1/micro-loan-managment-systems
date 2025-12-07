import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AvlableLoan = () => {
  const { isLoading, data: loan } = useQuery({
    queryKey: ["avlaibleLoan"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_HOST_URL}/avilableloan`
      );
      return res.data;
    },
  });
  console.log(isLoading);
  console.log(loan);
  return (
    <div className=" min-w-7xl  w-10/12 mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mt-[100px] mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Available Loan
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {loan?.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg  hover:shadow-xl transition-shadow border duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="text-primary  mb-4 mx-auto border p-4 rounded-2xl">
              <img
                src={step.loanImage}
                className="h-48  rounded-sm bg-cover w-full mx-auto"
                alt=""
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.loanTitle}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
            <div className="flex justify-between items-center mt-5">
              <p>
                {" "}
                <span className="font-bold">Max-Loan:</span> 💰{step.maxLimit}
              </p>
              <button className="btn bg-[#483ad4] text-white ">
                View Detils <FaArrowRight />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AvlableLoan;

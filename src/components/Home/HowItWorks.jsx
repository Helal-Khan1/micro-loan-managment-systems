import React from "react";
import { motion } from "framer-motion";

import {
  FaFileAlt,
  FaCheckCircle,
  FaMoneyBillWave,
  FaHandshake,
  FaClock,
} from "react-icons/fa";

// Step data (চাইল্ড component কে dynamic করতে পারেন MongoDB থেকে fetch করে)
const steps = [
  {
    icon: <FaFileAlt size={30} />,
    title: "Apply Online",
    description:
      "Fill out the loan application form with your personal and business details.",
  },
  {
    icon: <FaCheckCircle size={30} />,
    title: "Submit Documents",
    description:
      "Upload your ID, business info, and other required documents securely.",
  },
  {
    icon: <FaHandshake size={30} />,
    title: "Verification & Approval",
    description:
      "Our team will verify your details and approve your loan quickly.",
  },
  {
    icon: <FaMoneyBillWave size={30} />,
    title: "Loan Disbursement",
    description:
      "Get the approved loan directly in your bank or mobile account.",
  },
  {
    icon: <FaClock size={30} />,
    title: "Easy Repayment",
    description:
      "Pay back in convenient installments tracked automatically by the system.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 dark:text-black dark:bg-white mt-15 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="text-primary mb-4 mx-auto">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

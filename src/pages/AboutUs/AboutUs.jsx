import React from "react";
// Importing icons relevant to finance, management, and growth
import {
  FaHandshake,
  FaChartLine,
  FaCheckCircle,
  FaUsers,
  FaClipboardCheck,
  FaMoneyBillWave,
} from "react-icons/fa";

const AboutUs = () => {
  // --- Data Definition ---
  const stats = [
    { count: "50+", label: "Financial Partners", icon: FaUsers },
    { count: "10K+", label: "Loans Managed", icon: FaClipboardCheck },
    { count: "99%", label: "Process Clarity", icon: FaCheckCircle },
  ];

  const valueProps = [
    {
      icon: FaHandshake,
      title: "Seamless Application",
      description:
        "A unified, paperless platform for managing microloan applications, eliminating administrative chaos for NGOs.",
      color: "text-indigo-500",
    },
    {
      icon: FaMoneyBillWave,
      title: "Rapid Approval Workflow",
      description:
        "Streamlined review and approval tools ensure quick, compliant decision-making and efficient fund disbursement.",
      color: "text-green-500",
    },
    {
      icon: FaChartLine,
      title: "Transparent Repayment Tracking",
      description:
        "Automated EMI schedules and complete repayment history in one place, ensuring financial clarity and compliance.",
      color: "text-yellow-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. HEADER SECTION (Trust & Value Proposition) */}
        <header className="text-center mb-16">
          <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
            About LoanLink
          </h2>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Empowering Microfinance. Simplified.
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            LoanLink is the dedicated web-based system solving the critical loan
            management challenges faced by small financial organizations and
            microloan providers. We transform complexity into streamlined,
            compliant operations.
          </p>
        </header>

        {/* 2. CORE VALUE PROPOSITION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] border-t-4 border-indigo-500"
            >
              <div
                className={`p-3 rounded-full inline-block bg-gray-100 ${prop.color}`}
              >
                <prop.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {prop.title}
              </h3>
              <p className="mt-4 text-base text-gray-500">{prop.description}</p>
            </div>
          ))}
        </div>

        {/* 3. MISSION/VISION SECTION */}
        <div className="bg-white border-l-4 border-green-500 p-8 md:p-10 rounded-xl shadow-inner mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Commitment to Financial Inclusion
          </h2>
          <blockquote className="text-lg text-gray-700 italic">
            "Our mission is to provide the reliable technology that empowers
            NGOs and small FIs to focus on their core goal:{" "}
            <span className="text-indigo-600 font-semibold">
              serving their community and fostering financial inclusion
            </span>
            , rather than being bogged down by complex administrative tasks."
          </blockquote>
        </div>

        {/* 4. KEY STATISTICS SECTION (Build Trust) */}
        <div className="bg-indigo-700 rounded-xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <stat.icon className="h-8 w-8 text-indigo-300 mb-3" />
                <p className="text-5xl font-extrabold">{stat.count}</p>
                <p className="mt-2 text-lg font-medium uppercase tracking-wide text-indigo-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

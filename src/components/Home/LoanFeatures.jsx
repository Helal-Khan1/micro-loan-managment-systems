import { motion } from "framer-motion";

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

const LoanFeatures = () => {
  const features = [
    {
      title: "Quick Approval",
      desc: "Get your loan approved within 24–48 hours.",
    },
    {
      title: "Easy Repayment",
      desc: "Flexible EMI options designed for small businesses.",
    },
    {
      title: "Low Processing Fee",
      desc: "Enjoy minimum fees with maximum convenience.",
    },
  ];

  return (
    <section className="py-16 dark:text-black bg-white/50">
      <div className="container mx-auto px-4 text-center">
        {/* Title Animation */}
        <motion.h2
          className="text-3xl font-bold dark:text-base-100 text-gray-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Why Choose Our Microloan?
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gray-50 dark:text-base-100 text-gray-800 rounded-2xl shadow hover:shadow-xl hover:scale-105 transition cursor-default"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanFeatures;

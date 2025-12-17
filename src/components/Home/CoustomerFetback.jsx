import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import image from "../../assets/costomer/contomer1.jpg";

const feedbacks = [
  {
    name: "Rahim Ahmed",
    photo: "../../assets/costomer/contomer1.jpg",
    feedback:
      "Microloan service helped me expand my small business. Easy application and fast approval!",
  },
  {
    name: "Fatima Begum",
    photo: "../../assets/costomer/contomer2.jpg",
    feedback:
      "Very convenient and trustworthy platform. Repayment system is smooth and hassle-free.",
  },
  {
    name: "Karim Hossain",
    photo: "../../assets/costomer/contomer3.jpg",
    feedback:
      "Amazing support from the team! I got my loan within 48 hours and it boosted my sales.",
  },
  {
    name: "Nabila Khan",
    photo: "../../assets/costomer/contomer1.jpg",
    feedback:
      "Excellent service! The step-by-step guidance made the loan process easy for me.",
  },
];

const CustomerFeedback = () => {
  return (
    <section className="py-16  dark:text-black bg-white/50 ">
      <div className="container mx-auto px-4 text-center ">
        <h2 className="text-3xl font-bold dark:text-base-100 text-gray-800 mb-12">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {feedbacks.map((feedback, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 
                max-w-xl mx-auto transition-transform duration-300 hover:scale-[1.02] 
                hover:shadow-2xl relative"
              >
                {/* Glow Ring */}
                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                  from-blue-200 to-purple-200 opacity-20 blur-2xl -z-10"
                ></div>

                <FaQuoteLeft className="text-4xl text-primary mb-4 mx-auto opacity-70" />

                <p className="text-gray-700 mb-6 text-base leading-relaxed">
                  {feedback.feedback}
                </p>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={image}
                    alt={feedback.name}
                    className="w-14 h-14 rounded-full object-cover shadow-md"
                  />
                  <span className="font-semibold text-lg">{feedback.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerFeedback;

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import image_1 from "../../assets/Micro Loan/image1.png";
import image_2 from "../../assets/Micro Loan/image2.png";
import image_3 from "../../assets/Micro Loan/image3.png";
import image_4 from "../../assets/Micro Loan/image4.png";
import image_5 from "../../assets/Micro Loan/image5.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="mt-15 relative">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={image_1}
            className="w-full h-48 sm:h-64 md:h-[400px] lg:h-[600px] object-cover"
            alt="Banner Image 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image_2}
            className="w-full h-48 sm:h-64 md:h-[400px] lg:h-[600px] object-cover"
            alt="Banner Image 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image_3}
            className="w-full h-48 sm:h-64 md:h-[400px] lg:h-[600px] object-cover"
            alt="Banner Image 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image_4}
            className="w-full h-48 sm:h-64 md:h-[400px] lg:h-[600px] object-cover"
            alt="Banner Image 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image_5}
            className="w-full h-48 sm:h-64 md:h-[400px] lg:h-[600px] object-cover"
            alt="Banner Image 5"
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-5 left-5 md:left-10 z-10">
        <button className="btn bg-[#483ad4] hover:bg-[#342a9b] text-white font-semibold py-2 px-4 rounded flex items-center gap-2 transition-colors duration-300">
          Apply For Loan
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;

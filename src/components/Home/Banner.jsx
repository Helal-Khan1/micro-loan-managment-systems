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
    <div className="mt-5 ">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // প্রতিটা স্লাইড 2.5 সেকেন্ড পর অটো চেঞ্জ হবে
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src={image_1} className=" sm:h-[600px] w-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_2} className="sm:h-[600px] w-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_3} className="sm:h-[600px] w-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_4} className="sm:h-[600px] w-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_5} className="sm:h-[600px] w-full" alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="absolute pl-15 mt-5">
        <button className="btn bg-[#483ad4] text-white flex items-center gap-2">
          Apply For Loan
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;

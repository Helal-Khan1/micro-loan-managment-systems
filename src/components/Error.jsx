import React from "react";
import errpng from "../assets/alert-error.png";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const Error = () => {
  const navigation = useNavigate();
  return (
    <div className="min-h-screen w-full  flex items-center  justify-center">
      <div className="w-[600px] h-[300px] border border-[#483ad4]  shadow-1xl rounded-sm  px-25">
        <img src={errpng} className="mx-auto mt-5" alt="" />
        <h1 className="font-bold text-3xl text-center ">Something was wrong</h1>
        <div className="flex   justify-between items-center mt-10  ">
          <Link to={navigation(-1)}>
            <button className="btn border-[#483ad4] hover:bg-[#483ad4]  hover:text-white ">
              Go Back <FaArrowRight />
            </button>
          </Link>
          <Link to="/">
            <button className="btn border-[#483ad4] hover:bg-[#483ad4]  hover:text-white ">
              Go Home <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

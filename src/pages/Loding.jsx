import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="blue"
        strokeWidth="5"
        animationDuration="0.9"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loading;

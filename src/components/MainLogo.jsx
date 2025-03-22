import React from "react";
import { Link } from "react-router-dom";

const MainLogo = ({ width = "w-[100%]" }) => {
  return (
    <Link to={"/"}>
      <img
        src="/MainLogo.svg"
        alt="logo"
        className={`${width} my-1 overflow-hidden cursor-pointer text-[#191970]`}
      />
    </Link>
  );
};

export default MainLogo;

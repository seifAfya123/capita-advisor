import React from "react";
import { Link } from "react-router-dom";

const MainLogo = ({ width = "w-[100%]" }) => {
  return (
    <Link to={"/"}>
      <img
        src="/logo.svg"
        alt="logo"
        className={`${width} my-1 overflow-hidden cursor-pointer`}
      />
    </Link>
  );
};

export default MainLogo;

import React from "react";
import MainLogo from "./MainLogo";
import { links } from "../utils/paths";
import { Link } from "react-router-dom";
import ContactUsForm from "./inputs/ContactUsForm";

const classStyles = {
  footerContainer:
    "bg-white flex flex-col-reverse lg:flex-row items-center justify-between px-[16px] lg:px-[8rem] py-6 w-full border-t border-none mt-6 gap-3",
  leftSide:
    "flex flex-col items-center lg:items-start gap-3 w-full lg:w-auto text-gray-700",
  rightSide: "flex flex-col items-center lg:items-end gap-2 w-full lg:w-auto",
  iconsContainer: "flex flex-row gap-4 text-gray-500 text-lg",
  navLink:
    "cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-500 transition duration-200",
  textStyle: "text-xs text-gray-500",
};

const mediaLinks = [
  {
    type: "fb",
    link: "",
  },
  {
    type: "ig",
    link: "",
  },
  {
    type: "x",
    link: "",
  },
];

const Footer = ({ child }) => {
  return (
    <div className="bg-white flex flex-col items-center mt-6">
      {child}
      <div className={classStyles.footerContainer}>
        {/* Left Side: Logo, Icons, and Copyright */}
        <div className={classStyles.leftSide}>
          <MainLogo width="w-[10rem]" />
          <div className={classStyles.iconsContainer}>
            {/* Social Icons Here */}
          </div>
          <p className={classStyles.textStyle}>
            Copyright © 2025. All Rights Reserved
          </p>
        </div>

        {/* Right Side: Navigation Links */}
        <div className={classStyles.rightSide}>
          <Link className={classStyles.navLink} to={links.home}>
            Home
          </Link>
          <Link className={classStyles.navLink} to={links.ourService}>
            Our Services
          </Link>
          <Link className={classStyles.navLink} to={links.registerCompany}>
            Register Company
          </Link>
          <Link className={classStyles.navLink} to={links.contactUs}>
            Contact Us
          </Link>
          <Link className={classStyles.navLink} to={links.blogs}>
            Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import MainLogo from "./MainLogo";
import { backendDomainName, links } from "../utils/paths";
import { Link } from "react-router-dom";
import ContactUsForm from "./inputs/ContactUsForm";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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

const Footer = ({ child }) => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    instagram: "",
    tiktok: "",
    twitter: "",
    linkedin: "",
  });

  useEffect(() => {
    // Fetch the metadata from the API
    fetch(`${backendDomainName}/api/metadata/`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming only one metadata record is returned
        // console.log(data);
        const metadata = data[0];
        // console.log(metadata);
        
        setSocialLinks({
          facebook: data.facebook,
          instagram: data.instagram,
          tiktok: data.tiktok,
          twitter: data.twitter,
          linkedin: data.linkedin,
        });
      })
      .catch((error) => {
        console.error("Error fetching metadata:", error);
      });
    // console.log(socialLinks);
  }, []);

  return (
    <div className="bg-white flex flex-col items-center mt-6">
      {child}
      <div className={classStyles.footerContainer}>
        {/* Left Side: Logo, Icons, and Copyright */}
        <div className={classStyles.leftSide}>
          <MainLogo width="w-[10rem]" />
          <div className={classStyles.iconsContainer}>
            {/* Render Social Media Icons Conditionally */}
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            )}
            {socialLinks.tiktok && (
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
              >
               <FaTiktok />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXFill />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            )}
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

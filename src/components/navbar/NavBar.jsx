import { useState } from "react";
import MainLogo from "../MainLogo";
import { Link } from "react-router-dom";
import { links } from "../../utils/paths";
import { IoClose } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";

const classStyles = {
  navBar:
    "sticky absolute top-0 left-0 w-full z-50 bg-white flex flex-col lg:flex-row items-center justify-between lg:px-[8rem] py-[8px]",
  navLinksContainer:
    "flex flex-col lg:flex-row gap-8 lg:gap-[3rem] items-center w-full lg:w-auto",
  activeNavLink:
    "rounded-xl lg:py-[0.4rem] px-[2rem] items-center lg:bg-[#191970] lg:text-white text-[1rem]",
  unActiveNavLink: "cursor-pointer text-[#191970]",
  menuIcon: "lg:hidden text-2xl cursor-pointer",
  mobileNav:
    "flex flex-col items-center w-full absolute top-full left-0 bg-white shadow-md py-4 lg:hidden gap-2",
};

const NavBar = ({ tablink }) => {
  const [navState, setnavState] = useState(false);
  const handelClick = () => {
    setnavState((prev) => !prev);
  };

  return (
    <div className={classStyles.navBar}>
      {/* Always visible nav links for Web View */}
      <nav className={`${classStyles.navLinksContainer} hidden lg:flex`}>
        <Link
          className={
            tablink === links.home
              ? classStyles.activeNavLink
              : classStyles.unActiveNavLink
          }
          to={links.home}
        >
          Home
        </Link>
        <Link
          className={
            tablink === links.blogs
              ? classStyles.activeNavLink
              : classStyles.unActiveNavLink
          }
          to={links.blogs}
        >
          Blogs
        </Link>
        <Link
          className={
            tablink === links.ourService
              ? classStyles.activeNavLink
              : classStyles.unActiveNavLink
          }
          to={links.ourService}
        >
          Our Services
        </Link>
        <Link
          className={
            tablink === links.registerCompany
              ? classStyles.activeNavLink
              : classStyles.unActiveNavLink
          }
          to={links.registerCompany}
        >
          Register Company
        </Link>
        <Link
          className={
            tablink === links.contactUs
              ? classStyles.activeNavLink
              : classStyles.unActiveNavLink
          }
          to={links.contactUs}
        >
          Contact Us
        </Link>
      </nav>

      {/* Mobile Nav (only visible when toggled) */}
      {navState && (
        <nav className={classStyles.mobileNav}>
          <Link
            className={
              tablink === links.home
                ? classStyles.activeNavLink
                : classStyles.unActiveNavLink
            }
            to={links.home}
            onClick={handelClick}
          >
            Home
          </Link>
          <Link
            className={
              tablink === links.ourService
                ? classStyles.activeNavLink
                : classStyles.unActiveNavLink
            }
            to={links.ourService}
            onClick={handelClick}
          >
            Our Services
          </Link>
          <Link
            className={
              tablink === links.blogs
                ? classStyles.activeNavLink
                : classStyles.unActiveNavLink
            }
            to={links.blogs}
            onClick={handelClick}
          >
            Our Blogs
          </Link>
          <Link
            className={
              tablink === links.registerCompany
                ? classStyles.activeNavLink
                : classStyles.unActiveNavLink
            }
            to={links.registerCompany}
            onClick={handelClick}
          >
            Register Company
          </Link>
          <Link
            className={
              tablink === links.contactUs
                ? classStyles.activeNavLink
                : classStyles.unActiveNavLink
            }
            to={links.contactUs}
            onClick={handelClick}
          >
            Contact Us
          </Link>
        </nav>
      )}
      {/* Logo and Mobile Menu Toggle */}
      <div className="flex flex-row-reverse justify-between w-full items-center lg:w-auto px-4 lg:px-0">
        <MainLogo width="w-[8rem]" />
        <div className={classStyles.menuIcon} onClick={handelClick}>
          {navState ? <IoClose /> : <CiMenuBurger />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

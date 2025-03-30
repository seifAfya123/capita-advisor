import React from "react";
import MainLogo from "../MainLogo";
import SideMenuItem from "./SideMenuItem";
import { links } from "../../utils/paths";

const SideMenu = ({ currentPage }) => {
  return (
    <div className="bg-white flex flex-col px-3 py-8 justify-between items-center h-screen w-[20%]">
      <div>
        <MainLogo />
        <SideMenuItem
          link={links.dashboard_ourContactRequests}
          text={"Contact Requests"}
          active={currentPage == links.dashboard_ourContactRequests}
        />
        <SideMenuItem
          link={links.dashboard_ourServices}
          text={"Our Services"}
          active={currentPage == links.dashboard_ourServices}
        />
        <SideMenuItem
          link={links.dashboard_info}
          text={"Contact Info"}
          active={currentPage == links.dashboard_info}
        />
        <SideMenuItem
          link={links.dashboard_ourBlogs}
          text={"Our Blogs"}
          active={currentPage == links.dashboard_ourBlogs}
        />
        <SideMenuItem
          link={links.dashboard_companyRegiseration}
          text={"Company Registeration"}
          active={currentPage == links.dashboard_companyRegiseration}
        />
      </div>
      <button
        onClick={() => {
          console.log("logout");
        }}
      >
        <p className="text-red-500">Logout</p>
      </button>
    </div>
  );
};

export default SideMenu;

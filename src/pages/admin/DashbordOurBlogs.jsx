import React from "react";
import {  links } from "../../utils/paths";
import SideMenu from "../../components/admin/SideMenu";

const stylesClass = {
  pageStyle: " flex flex-row ",
};

const DashbordOurBlogs = () => {
  return (
    <div className={stylesClass.pageStyle}>
      <SideMenu currentPage={links.dashboard_ourBlogs} />
      <div></div>
    </div>
  );
};

export default DashbordOurBlogs;

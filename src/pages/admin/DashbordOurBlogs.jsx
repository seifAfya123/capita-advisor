import React from "react";
import {  links } from "../../utils/paths";
import SideMenu from "../../components/admin/SideMenu";
import OurBlogsSectionDB from "../../components/admin/OurBlogsSectionDB";

const stylesClass = {
  pageStyle: " flex flex-row ",
};

const DashbordOurBlogs = () => {
  return (
    <div className={stylesClass.pageStyle}>
      <SideMenu currentPage={links.dashboard_ourBlogs} />
      <OurBlogsSectionDB/>
    </div>
  );
};

export default DashbordOurBlogs;

import React from "react";
import SideMenu from "../../components/admin/SideMenu";
import { links } from "../../utils/paths";
import CreateOrEditBlogDB from "../../components/admin/CreateOrEditBlogDB";
const stylesClass = {
  pageStyle: " flex flex-row w-full",
};

const DashboardCreateEditBlog = () => {
  return (
    <div className={stylesClass.pageStyle}>
      <SideMenu currentPage={links.dashboard_ourBlogs} />
      <CreateOrEditBlogDB />
    </div>
  );
};

export default DashboardCreateEditBlog;

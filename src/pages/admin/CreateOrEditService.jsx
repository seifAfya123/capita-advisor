import React from "react";
import { conatctRequestsData, links } from "../../utils/paths";
import SideMenu from "../../components/admin/SideMenu";
import CreateOrServiceDB from "../../components/admin/CreateOrServiceDB";

const stylesClass = {
  pageStyle: " flex flex-row ",
};

const CreateOrEditService = () => {
  return (
    <div className={stylesClass.pageStyle}>
      <SideMenu currentPage={links.dashboard_ourServices} />
      <div>
        <CreateOrServiceDB />
      </div>
    </div>
  );
};

export default CreateOrEditService;

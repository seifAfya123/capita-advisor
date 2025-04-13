import React from "react";
import FormsRequestsDB from "../../components/admin/FormsRequestsDB";
import { links } from "../../utils/paths";
import SideMenu from "../../components/admin/SideMenu";
const stylesClass = {
  pageStyle: " flex flex-row ",
};
const FormRequests = () => {
  return (
    <div className={stylesClass.pageStyle}>
      <SideMenu currentPage={links.dashboard_companyRegiseration} />
      <div>
        <FormsRequestsDB />
      </div>
    </div>
  );
};

export default FormRequests;

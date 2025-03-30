import React from 'react'
import { conatctRequestsData, links } from "../../utils/paths";
import SideMenu from "../../components/admin/SideMenu";

const stylesClass = {
    pageStyle: " flex flex-row ",
  };
  
const DashbordCompanyReg = () => {
    return (
        <div className={stylesClass.pageStyle}>
          <SideMenu currentPage={links.dashboard_companyRegiseration} />
          <div></div>
        </div>
      );
}

export default DashbordCompanyReg
import React from 'react'
import { conatctRequestsData, links } from "../../utils/paths";
import SideMenu from "../../components/admin/SideMenu";
import CompanyRegSectionDB from '../../components/admin/CompanyRegSectionDB';

const stylesClass = {
    pageStyle: " flex flex-row w-full",
  };
  
const DashbordCompanyReg = () => {
    return (
        <div className={stylesClass.pageStyle}>
          <SideMenu currentPage={links.dashboard_companyRegiseration} />
          <CompanyRegSectionDB/>
        </div>
      );
}

export default DashbordCompanyReg
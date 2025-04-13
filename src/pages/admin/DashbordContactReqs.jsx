import React from "react";
import ContactRequests from "../../components/admin/ContactRequests";
import { conatctRequestsData, links } from "../../utils/paths";
import SideMenu from "../../components/admin/SideMenu";
const stylesClass = {
  pageStyle: " flex flex-row w-full",
};


const DashbordContactReqs = () => {
  return (
    <div className={stylesClass.pageStyle}>
      <SideMenu currentPage={links.dashboard_ourContactRequests} />
      <ContactRequests itemsList={conatctRequestsData} />
    </div>
  );
};

export default DashbordContactReqs;

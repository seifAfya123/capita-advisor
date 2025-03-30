import React from 'react'
import SideMenu from '../../components/admin/SideMenu';
import { links } from '../../utils/paths';


const stylesClass = {
    pageStyle: " flex flex-row ",
  };

const DashbordOurServices = () => {
    return (
        <div className={stylesClass.pageStyle}>
          <SideMenu currentPage={links.dashboard_ourServices} />
          <div></div>
        </div>
      );
}

export default DashbordOurServices
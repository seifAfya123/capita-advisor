import React from "react";
import { links } from "../../utils/paths";
import SideMenu from "../../components/admin/SideMenu";
import FormsSectionDB from "../../components/admin/FormsSectionDB";

const stylesClass = {
  pageStyle: " flex flex-row ",
};
const CreateFormPage = () => {
  return (
    <div className={stylesClass.pageStyle}>
      <SideMenu currentPage={links.dashboard_companyRegiseration} />
      <div>
        <FormsSectionDB />
      </div>
    </div>
  )
}

export default CreateFormPage
import React, { useState, useEffect } from "react";
import { backendDomainName, links } from "../../utils/paths";
import SideMenu from "../../components/admin/SideMenu";
import ContactINfoSectionDB from "../../components/admin/ContactINfoSectionDB";

const stylesClass = {
  pageStyle: "flex flex-row",
};

const DashbordInfo = () => {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    // Fetch the contact info from the API
    fetch(`${backendDomainName}/api/metadata/`)
      .then((response) => response.json())
      .then((data) => {
        // const metadata = data[0]; // Adjust based on your API structure
        console.log(data);
        
        setContactInfo(data);
      })
      .catch((error) => console.error("Error fetching contact info:", error));
  }, []);

  const handleUpdate = (updatedData) => {
    const token = localStorage.getItem("token");
    // Handle updating the data through API
    fetch(`${backendDomainName}/api/metadata/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        
        
        // You can optionally update the local state after successful update
        setContactInfo(data);
        alert("Contact info updated successfully!");
      })
      .catch((error) => console.error("Error updating contact info:", error));
  };

  return (
    <div className={stylesClass.pageStyle}>
      <SideMenu currentPage={links.dashboard_info} />
      {contactInfo ? (
        <ContactINfoSectionDB contactInfo={contactInfo} handleUpdate={handleUpdate} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DashbordInfo;

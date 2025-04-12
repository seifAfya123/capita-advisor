import React, { useEffect, useState } from "react";
import MainButton from "../buttons/MainButton";
import NewInputFeild from "../inputs/NewInputFeild";
import CounteryCard from "../cards/CounteryCard";
import { backendDomainName } from "../../utils/paths";

const CompanyRegSectionDB = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCompanies = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    try {
      const URL = `${backendDomainName}/api/companies/admin`;
      const response = await fetch(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch companies");
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <div className="flex flex-col w-full h-screen mx-4 mt-4">
      <div className="rounded-[16px] bg-white flex flex-col p-2">
        <p>Registration Locations</p>
        <div className="flex flex-row items-center justify-between">
          <NewInputFeild placeHolderText={"Search by Country name "} />
          <div className="w-[20%]">
            <MainButton bgcolor="green" text="Add Country" />
          </div>
        </div>
      </div>

      <div className="flex overflow-y-auto flex-wrap justify-between gap-2 mt-2">
        {loading ? (
          <p>Loading...</p>
        ) : (
          companies.map((c) => (
            <CounteryCard
              key={c._id}
              id={c._id}
              image={c.image}
              counteryName={c.name}
              isAdmin={true}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CompanyRegSectionDB;

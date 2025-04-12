import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer";
import CounteryCard from "../../components/cards/CounteryCard";
import { backendDomainName, links } from "../../utils/paths";

const classStyles = {
  pageStyle: "flex flex-col justify-between lg:min-h-screen",
  listStyle: "flex flex-wrap justify-center gap-5 w-full mx-auto",
  servicesBox:
    "mx-[16px] lg:mx-[8rem] flex flex-col gap-2 mt-6 rounded-2xl overflow-hidden bg-white p-8",
  heading: "text-semibold font-bold text-[2rem] lg:text-[3rem] ",
  imagesContainer: "flex flex-col lg:flex-row flex-wrap gap-4",
  descrip: "mb-3 text-[0.9rem] lg:text-[1.2rem]",
};

const RegisterCompanyPage = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${backendDomainName}/api/companies/clinet`);
      if (!response.ok) throw new Error("Failed to fetch countries");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className={classStyles.pageStyle}>
      <NavBar tablink={links.registerCompany} />

      <div className={classStyles.servicesBox}>
        <p className={classStyles.heading}>Register Company</p>
        <p className={classStyles.descrip}>
          Where do you wish to register your company?
        </p>

        <div className={classStyles.imagesContainer}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            countries.map((c) => (
              <CounteryCard
                key={c._id}
                image={c.image}
                counteryName={c.name}
              />
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterCompanyPage;

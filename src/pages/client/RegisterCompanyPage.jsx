import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer";
import { countries, links } from "../../utils/paths";
import CounteryCard from "../../components/cards/CounteryCard";
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
  return (
    <div className={classStyles.pageStyle}>
      <NavBar tablink={links.registerCompany} />

      <div className={classStyles.servicesBox}>
        <p className={classStyles.heading}>Register Company</p>
        <p className={classStyles.descrip}>
          Where do you wish to register your company?
        </p>
        <div className={classStyles.imagesContainer}>
          {countries.map((c) => (
            <CounteryCard image={c.image} counteryName={c.name} />
          ))}
        </div>
        {/* <div className="flex-3 bg-blue-100 w-full rounded-2xl">s</div> */}
      </div>
      <Footer />
    </div>
  );
};

export default RegisterCompanyPage;

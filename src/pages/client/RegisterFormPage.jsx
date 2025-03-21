import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer";
import { links } from "../../utils/paths";
const classStyles = {
  pageStyle: "flex flex-col justify-between min-h-screen",
  listStyle: "flex flex-wrap justify-center gap-5 w-full mx-auto",
};
const RegisterFormPage = () => {
  return (
    <div className={classStyles.pageStyle}>
      <NavBar tablink={links.registerCompany} />
      <Footer />
    </div>
  );
};

export default RegisterFormPage;

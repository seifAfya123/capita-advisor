import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer";
import ContactUsForm from "../../components/inputs/ContactUsForm";
import { htmlText, links } from "../../utils/paths";


const classStyles = {
  ServiceContainer:
    "rounded-2xl bg-white mx-[16px] md:mx-[8rem] mt-[2rem] overflow-hidden",
  serviceImage: "w-full max-h-[20rem] object-cover rounded-2xl",
  serviceTitle:
    "text-xl font-semibold w-full item-center text-center mt-[1rem] px-[1rem]",
  ServiceDescription: "text-md px-[1rem] lg:px-[3rem] py-[1rem]",
};


const BlogDetailsPage = () => {
  return (
    <div className="lg:min-h-screen flex flex-col justify-between">
      <NavBar tablink={links.blogs} />
      <div className={classStyles.ServiceContainer}>
        <img
          className={classStyles.serviceImage}
          src="callcenter.png"
          alt="Service image"
        />
        <p className={classStyles.serviceTitle}>
          The Essence of Service: Why It Matters in Every Industry
        </p>
        <div
          className={classStyles.ServiceDescription}
          dangerouslySetInnerHTML={{ __html:htmlText }}
        ></div>
      </div>
      <Footer
        child={
          <div className="w-full lg:w-[50%] flex flex-col items-center justify-center gap-3 px-[16px] ">
            <p className="mt-4 font-semibold">
              Contact Us if you need this service
            </p>
            <ContactUsForm serviceID={"serviceid"} />
          </div>
        }
      />
    </div>
  );
};

export default BlogDetailsPage;

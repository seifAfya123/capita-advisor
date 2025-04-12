import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer";
import { backendDomainName, homeService, links } from "../../utils/paths";
import ContactUsForm from "../../components/inputs/ContactUsForm";

const classStyles = {
  pageStyle: "flex flex-col justify-between lg:min-h-screen",
  container:
    "flex flex-col lg:flex-row px-[16px] lg:px-16 lg:px-20 py-[16px] lg:py-12 gap-8 mt-3 bg-white rounded-2xl mx-[16px] lg:mx-[8rem] justify-between items-center",
  contactInfo: "flex flex-col gap-4",
  heading: "text-3xl font-bold ",
  description: "text-lg font-medium text-[#191970]-700",
  infoItem: "flex items-center gap-3 text-[#191970]-600",
  formContainer: "gap-3",
  input:
    "w-full lg:max-w-[50%] p-3 rounded-md border border-[#191970]-300 focus:outline-none focus:ring-2 my-1",
  button:
    "w-full lg:max-w-[50%] p-3 bg-[#191970]-600 text-white font-semibold rounded-md transition my-1",
};

const ContactUsPage = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    address: "",
    googleMapSrc: "",
  });

  useEffect(() => {
    // Fetch the contact info from the API
    fetch(`${backendDomainName}/api/metadata/`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the contact data is returned within the metadata object

        // Adjust this according to your API response structure
        setContactInfo({
          email: data.contact_email || "advisor@capitaadvisors.me",
          phone: data.contact_phone || "+971 55 185 5799",
          address:
            data.locationDescription ||
            "Office 2414, Level 24, The Burjuman Business Tower, Dubai, United Arab Emirates",
          googleMapSrc:
            data.locationMapLink ||
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12338.338371647355!2d55.3003263!3d25.2547491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d89592206d3%3A0x82bc297fcfeea797!2sThe%20Place%20-%20Dubai%20Chambers!5e1!3m2!1sen!2seg!4v1742646173722!5m2!1sen!2seg",
        });
      })
      .catch((error) => {
        console.error("Error fetching contact info:", error);
      });
  }, []);

  return (
    <div className={classStyles.pageStyle}>
      <NavBar tablink={links.contactUs} />
      <div className={classStyles.container}>
        {/* Contact Info Section */}
        <div className={classStyles.contactInfo}>
          <h2 className={classStyles.heading}>Contact Us</h2>
          <p className={classStyles.description}>
            Leave your information, and we will contact you soon. You can also
            reach out to us directly.
          </p>

          <div className={classStyles.infoItem}>📧 {contactInfo.email}</div>
          <div className={classStyles.infoItem}>📞 {contactInfo.phone}</div>
          <div className={classStyles.infoItem}>📍 {contactInfo.address}</div>

          {/* Google Map Placeholder */}
          <iframe
            className="w-full h-48 rounded-xl"
            src={contactInfo.googleMapSrc}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <ContactUsForm
          serviceList={["Select Service"].concat(homeService)}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;

// <div className={classStyles.contactInfo}>
//   <h2 className={classStyles.heading}>Contact Us</h2>
//   <p className={classStyles.description}>
//     Leave your information, and we will contact you soon. You can also
//     reach out to us directly.
//   </p>

//   <div className={classStyles.infoItem}>
//     📧 advisor@capitaadvisors.me

//   </div>
//   <div className={classStyles.infoItem}>📞 + 971 55 185 5799</div>
//   <div className={classStyles.infoItem}>
//     📍 Office 2414, Level 24, The Burjuman Business Tower, Dubai, United Arab Emirates
//   </div>
//   {/* Google Map Placeholder */}
//   <iframe
//     className="w-full h-48 rounded-xl"
//     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12338.338371647355!2d55.3003263!3d25.2547491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d89592206d3%3A0x82bc297fcfeea797!2sThe%20Place%20-%20Dubai%20Chambers!5e1!3m2!1sen!2seg!4v1742646173722!5m2!1sen!2seg"
//     allowFullScreen
//     loading="lazy"
//   ></iframe>
// </div>

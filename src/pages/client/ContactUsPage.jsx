import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer";
import { corporateFriendlyCountries, links } from "../../utils/paths";
import { FaPhone } from "react-icons/fa6";
import ContactUsForm from "../../components/inputs/ContactUsForm";

const classStyles = {
  pageStyle: "flex flex-col justify-between lg:min-h-screen",
  container:
    "flex flex-col lg:flex-row px-[16px] lg:px-16 lg:px-20 py-[16px] lg:py-12 gap-8 mt-3 bg-white rounded-2xl mx-[16px] lg:mx-[8rem] justify-between items-center",
  contactInfo: "flex flex-col gap-4",
  heading: "text-3xl font-bold ",
  description: "text-lg font-medium text-gray-700",
  infoItem: "flex items-center gap-3 text-gray-600",
  formContainer: "gap-3",
  input:
    "w-full lg:max-w-[50%] p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 my-1",
  button:
    "w-full lg:max-w-[50%] p-3 bg-blue-600 text-white font-semibold rounded-md transition my-1",
};

const ContactUsPage = () => {
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

          <div className={classStyles.infoItem}>
            📧 Seif@manifestobusiness.com
          </div>
          <div className={classStyles.infoItem}>📞 +20-1012720084</div>
          <div className={classStyles.infoItem}>
            📍 Office 123, Business Tower, Sheikh Zayed Road, Dubai, UAE
          </div>
          {/* Google Map Placeholder */}
          <iframe
            className="w-full h-48 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d94054.33214742577!2d31.607062929875955!3d30.086788199459328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2seg!4v1742586266767!5m2!1sen!2seg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <ContactUsForm
          serviceList={[
            "Select Service",
            "Banking",
            "Structuring",
            "Consulting",
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;

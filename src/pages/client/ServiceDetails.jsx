const htmlText = `
    <p>
      Service is at the heart of every successful business.
      Whether it's a <strong>restaurant</strong>, a <em>software company</em>, 
      or a healthcare provider, the quality of service determines customer 
      satisfaction and loyalty.
    </p>
    <ul>
      <li><strong>Builds Trust:</strong> Reliable service encourages customers to return.</li>
      <li><strong>Increases Loyalty:</strong> A great experience keeps customers engaged.</li>
      <li><strong>Differentiates a Business:</strong> Exceptional service helps a company stand out.</li>
    </ul>
    w hna ay klam <br>
    34an ana gamed moot
  `;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer";
import { backendDomainName, links } from "../../utils/paths";
import ContactUsForm from "../../components/inputs/ContactUsForm";

const classStyles = {
  pageWrapper: "lg:min-h-screen flex flex-col justify-between",
  loading: "text-center py-8",
  error: "text-center text-red-500 py-8",
  ServiceContainer:
    "rounded-2xl bg-white mx-[16px] md:mx-[8rem] mt-[2rem] overflow-hidden",
  serviceImage: "w-full max-h-[20rem] object-cover rounded-2xl",
  serviceTitle:
    "text-xl font-semibold w-full item-center text-center mt-[1rem] px-[1rem]",
  ServiceDescription: "text-md px-[1rem] lg:px-[3rem] py-[1rem]",
  footerContainer:
    "w-full lg:w-[50%] flex flex-col items-center justify-center gap-3 px-[16px]",
  footerText: "mt-4 font-semibold",
};

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const language = localStorage.getItem("lang") || "en";

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(
          `${backendDomainName}/api/services/client/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch service");

        const data = await response.json();
        console.log(data);
        
        setService({
          image: data.image,
          title: data[`name_${language}`],
          description: data[`desc_${language}`], // Adjust if full description is needed
        });
      } catch (err) {
        console.error(err);
        setError("Could not load the service details.");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id, language]);

  return (
    <div className={classStyles.pageWrapper}>
      <NavBar tablink={links.ourService} />

      {loading ? (
        <div className={classStyles.loading}>Loading...</div>
      ) : error ? (
        <div className={classStyles.error}>{error}</div>
      ) : (
        <div className={classStyles.ServiceContainer}>
          <img
            className={classStyles.serviceImage}
            src={service?.image}
            alt="Service image"
          />
          <p className={classStyles.serviceTitle}>{service?.title}</p>
          <div
            className={classStyles.ServiceDescription}
            dangerouslySetInnerHTML={{ __html: service?.description }}
          />
        </div>
      )}

      <Footer
        child={
          <div className={classStyles.footerContainer}>
            <p className={classStyles.footerText}>
              Contact Us if you need this service
            </p>
            <ContactUsForm serviceID={id} />
          </div>
        }
      />
    </div>
  );
};

export default ServiceDetails;

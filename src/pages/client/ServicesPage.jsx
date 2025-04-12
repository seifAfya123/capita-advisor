import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/cards/ServiceCard";
import { backendDomainName, links } from "../../utils/paths";

const classStyles = {
  pageStyle: "flex flex-col justify-between lg:min-h-screen",
  listStyle:
    "mx-[16px] lg:mx-[8rem] flex flex-col lg:flex-row flex-wrap lg:grid-cols-3 justify-between gap-y-5",
};

const ServicesPage = () => {
  const [servicesList, setServicesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const language = localStorage.getItem("lang") || "en";

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${backendDomainName}/api/services/client`);

        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }

        const data = await response.json();

        const formattedData = data.map((item) => ({
          id: item._id,
          image: item.image,
          title: item[`name_${language}`],
          text: item[`brief_${language}`],
        }));

        setServicesList(formattedData);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Something went wrong while fetching services.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [language]);

  return (
    <div className={classStyles.pageStyle}>
      <NavBar tablink={links.ourService} />

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-8">{error}</div>
      ) : (
        <div className={classStyles.listStyle}>
          {servicesList.map((serviceItem) => (
            <ServiceCard
              id={serviceItem._id}
              key={serviceItem.id}
              image={serviceItem.image}
              isAdmin={false}
              text={serviceItem.text}
              title={serviceItem.title}
              topage={`${links.serviceDetails}/${serviceItem.id}`} // Optional: if needed
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ServicesPage;

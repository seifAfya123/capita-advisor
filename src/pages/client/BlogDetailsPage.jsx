import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer";
import ContactUsForm from "../../components/inputs/ContactUsForm";
import { backendDomainName, links } from "../../utils/paths";

const classStyles = {
  ServiceContainer:
    "rounded-2xl bg-white mx-[16px] md:mx-[8rem] mt-[2rem] overflow-hidden",
  serviceImage: "w-full max-h-[20rem] object-cover rounded-2xl",
  serviceTitle:
    "text-xl font-semibold w-full item-center text-center mt-[1rem] px-[1rem]",
  ServiceDescription: "text-md px-[1rem] lg:px-[3rem] py-[1rem]",
};

const BlogDetailsPage = () => {
  const { id } = useParams(); // get ID from URL
  const [service, setService] = useState(null);
  const language = localStorage.getItem("lang") || "en";

  useEffect(() => {
    console.log(id);

    const fetchService = async () => {
      try {
        const response = await fetch(
          `${backendDomainName}/api/blogs/clinet/${id}?language=${language}`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch service");
        }
        
        const data = await response.json();
        console.log(data.brief);

        const formatted = {
          id: data._id,
          title: data["title"],
          brief: data.brief,
          desc: data["description"],
          image: data.image,
        };

        setService(formatted);
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };

    if (id) {
      fetchService();
    }
  }, [id, language]);

  return (
    <div className="lg:min-h-screen flex flex-col justify-between">
      <NavBar tablink={links.blogs} />

      {service && (
        <div className={classStyles.ServiceContainer}>
          <img
            className={classStyles.serviceImage}
            src={service.image}
            alt="Service image"
          />
          <p className={classStyles.serviceTitle}>{service.title}</p>
          <div
            className={classStyles.ServiceDescription}
            dangerouslySetInnerHTML={{ __html: service.desc }}
          />
        </div>
      )}

      <Footer
        child={
          <div className="w-full lg:w-[50%] flex flex-col items-center justify-center gap-3 px-[16px] ">
            <p className="mt-4 font-semibold">
              Contact Us if you need this service
            </p>
            <ContactUsForm serviceID={service?.id || ""} />
          </div>
        }
      />
    </div>
  );
};

export default BlogDetailsPage;

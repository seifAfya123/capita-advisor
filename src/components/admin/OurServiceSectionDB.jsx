import React, { useState, useEffect } from "react";
import NewInputFeild from "../inputs/NewInputFeild";
import ServiceCard from "../cards/ServiceCard";
import MainButton from "../buttons/MainButton";
import { backendDomainName } from "../../utils/paths"; // Assuming you have the domain name in paths.js

const OurServiceSectionDB = () => {
  const [services, setServices] = useState([]); // To store services from the API
  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(""); // To track any errors
  const [search, setsearch] = useState(""); // To track any errors

  // Function to fetch services from the API
  const fetchServices = async () => {
    setLoading(true);
    setError(""); // Reset error state before fetching
    const url = `${backendDomainName}/api/services/client/?${
      search ? `search=${search}` : ""
    }`;
    try {
      const response = await fetch(url);
      console.log(url);

      if (!response.ok) {
        throw new Error("Failed to fetch services");
      }

      const data = await response.json();
      setServices(data); // Set the fetched data into the services state
    } catch (error) {
      setError(error.message); // Set error message if fetching fails
    } finally {
      setLoading(false); // Set loading to false when fetching is complete
    }
  };

  // UseEffect to fetch services when the component mounts
  useEffect(() => {
    fetchServices();
  }, [search]);

  return (
    <div className="flex flex-col w-full h-screen mx-4 mt-4">
      <div className="rounded-[16px] bg-white flex flex-col p-2">
        <p>Our Services</p>
        <div className="flex flex-row items-center justify-between">
          <div className=" min-w-[30%]">
            <NewInputFeild
              placeHolderText={"Search by service name "}
              onChangeFunction={(e) => setsearch(e.target.value)}
              value={search}
            />
          </div>
          <div className="w-[20%]">
            <MainButton bgcolor="green" text="Add Service" />
          </div>
        </div>
      </div>

      <div className="flex overflow-y-auto flex-wrap justify-between gap-2 mt-2">
        {loading ? (
          <p>Loading...</p> // Show loading state while fetching data
        ) : error ? (
          <p className="text-red-500">Error: {error}</p> // Show error if fetching fails
        ) : services.length === 0 ? (
          <p>No services available</p> // Show message if no services
        ) : (
          services.map((item) => (
            <ServiceCard
              id={item._id}
              serviceId={item._id}
              isAdmin={true}
              image={item.image}
              title={item.name_en} // Assuming you want to display the English title
              text={item.brief_en} // Assuming you want to display the English brief
              key={item._id} // Use unique _id as the key
              topage="/"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default OurServiceSectionDB;

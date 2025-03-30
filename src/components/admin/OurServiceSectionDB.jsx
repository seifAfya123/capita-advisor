import React from "react";
import NewInputFeild from "../inputs/NewInputFeild";
import ServiceCard from "../cards/ServiceCard";
import { servicesList } from "../../utils/paths";
import MainButton from "../buttons/MainButton";

const OurServiceSectionDB = () => {
  return (
    <div className="flex flex-col w-full h-screen mx-4 mt-4">
      <div className="rounded-[16px] bg-white flex flex-col p-2">
        <p>our services</p>
        <div className="flex flex-row items-center justify-between">
          <NewInputFeild placeHolderText={"Search by service name "} />
          <div className="w-[20%] ">
            <MainButton bgcolor="green" text="Add Service" />
          </div>
        </div>
      </div>

      <div className="flex overflow-y-auto flex-wrap justify-between gap-2 mt-2">
        {servicesList.map((item, index) => (
          <ServiceCard
            isAdmin={true}
            image={item.image}
            title={item.title}
            text={item.text}
            key={"index"}
            topage="/"
          />
        ))}
      </div>
    </div>
  );
};

export default OurServiceSectionDB;

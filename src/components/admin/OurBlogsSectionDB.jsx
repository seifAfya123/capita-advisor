import React from "react";
import MainButton from "../buttons/MainButton";
import ServiceCard from "../cards/ServiceCard";
import NewInputFeild from "../inputs/NewInputFeild";
import { servicesList } from "../../utils/paths";

const OurBlogsSectionDB = () => {
  return (
    <div className="flex flex-col w-full h-screen mx-4 mt-4">
      <div className="rounded-[16px] bg-white flex flex-col p-2">
        <p>our Blogs</p>
        <div className="flex flex-row items-center justify-between">
          <NewInputFeild placeHolderText={"Search by Blog name "} />
          <div className="w-[20%] ">
            <MainButton bgcolor="green" text="Add Blog" />
          </div>
        </div>
      </div>

      <div className="flex overflow-y-auto flex-wrap justify-between gap-2 mt-2">
        {servicesList.concat(servicesList).map((item, index) => (
          <ServiceCard
            isAdmin={true}
            image={item.image}
            title={"blog name"}
            text={item.text}
            key={index}
            topage="/"
          />
        ))}
      </div>
    </div>
  );
};

export default OurBlogsSectionDB;

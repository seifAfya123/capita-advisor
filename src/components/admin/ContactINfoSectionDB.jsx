import React from "react";
import NewInputFeild from "../inputs/NewInputFeild";

const ContactINfoSectionDB = () => {
  return (
    <div className="flex flex-col w-full h-screen mx-4 mt-4">
      <div className="rounded-[16px] bg-white flex flex-col p-2">
        <p>Our Contact Info</p>
        <div className="flex flex-row items-center ">
          <div className="w-full flex flex-col gap-2 m-2">
            <NewInputFeild placeHolderText={"Tiktok "} />
            <NewInputFeild placeHolderText={"Instagram "} />
            <NewInputFeild placeHolderText={"X"} />
            <NewInputFeild placeHolderText={"LinkedIn"} />
            <NewInputFeild placeHolderText={"Facebook "} />
          </div>
          <div className="w-full flex flex-col gap-2 m-2">
            <NewInputFeild placeHolderText={"Email "} />
            <NewInputFeild placeHolderText={"Phone "} />
            <NewInputFeild placeHolderText={"Wahtsapp "} />
            <NewInputFeild placeHolderText={"Locatin description "} />
            <NewInputFeild placeHolderText={"Location on map "} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactINfoSectionDB;

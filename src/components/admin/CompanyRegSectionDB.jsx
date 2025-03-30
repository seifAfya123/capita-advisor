import React from "react";
import MainButton from "../buttons/MainButton";
import NewInputFeild from "../inputs/NewInputFeild";
import CounteryCard from "../cards/CounteryCard";
import { countries } from "../../utils/paths";

const CompanyRegSectionDB = () => {
  return (
    <div className="flex flex-col w-full h-screen mx-4 mt-4">
      <div className="rounded-[16px] bg-white flex flex-col p-2">
        <p>Registeration Locations</p>
        <div className="flex flex-row items-center justify-between">
          <NewInputFeild placeHolderText={"Search by Country name "} />
          <div className="w-[20%] ">
            <MainButton bgcolor="green" text="Add Country" />
          </div>
        </div>
      </div>

      <div className="flex overflow-y-auto flex-wrap justify-between gap-2 mt-2">
        {countries.map((c) => (
          <CounteryCard image={c.image} counteryName={c.name} isAdmin={true} />
        ))}
      </div>
    </div>
  );
};

export default CompanyRegSectionDB;

import React from "react";
import RequestItem from "./RequestItem";
import NewInputFeild from "../inputs/NewInputFeild";
import NewDropDown from "../inputs/NewDropDown";
import {
  corporateFriendlyCountries,
  homeService,
} from "../../utils/paths";
import MainButton from "../buttons/MainButton";

const ContactRequests = ({ itemsList }) => {
  return (
    <div className="flex flex-col w-full h-screen mx-4 mt-4">
      <div className="rounded-[16px] bg-white flex flex-col ">
        <div className="flex flex-row p-2 items-center gap-2 ">
          <div className="flex-1">
            <NewInputFeild placeHolderText={"Search by name or email"} />
          </div>
          <div className=" flex flex-row w-full flex-2 gap-2">
            <NewDropDown itemsList={["Select Service"].concat(homeService)} />
            <NewDropDown itemsList={corporateFriendlyCountries} />
            <NewDropDown itemsList={["Select type", "Stared", "Un-Stared"]} />
          </div>
        </div>
        <div className="w-full flex flex-row justify-end p-2">
          <div className="w-[40%] flex flex-row gap-4 ">
            {" "}
            <MainButton
              bgcolor="blue"
              text="Apply filter"
              onclickfunction={() => {}}
            />
            <MainButton text="Clear filter" onclickfunction={() => {}} />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {itemsList.map((item, index) => (
          <RequestItem
            key={index}
            name={item.name}
            email={item.email}
            phone={item.phone}
            service={item.service}
            country={item.country}
            date={item.date}
            isService={false}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactRequests;

import React from "react";
import MainButton from "../../components/buttons/MainButton";
import SideMenu from "./components/SideMenu";

const ContactRequests = () => {
  return (
    <div>
      <div className="w-50% bg-green-500 flex flex-row">
        <SideMenu />
        <div>
          <MainButton
            text="Reset"
            onclickfunction={() => {
              console.log("reset");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactRequests;

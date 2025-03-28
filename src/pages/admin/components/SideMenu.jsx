import React from "react";
import MainLogo from "../../../components/MainLogo";

const SideMenu = () => {
  return (
    <div className="bg-white flex flex-col lg:w-[12%] mr-4 px-8 items-center h-screen">
      <MainLogo />
      <p>item1</p>
      <p>item2</p>
      <p>item3</p>
      <p>item4</p>
      <p>Logout</p>
    </div>
  );
};

export default SideMenu;

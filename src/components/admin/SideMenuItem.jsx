import React from "react";
import { Link } from "react-router-dom";

const stylesClass = {
  activeContainer: "bg-blue-100 px-4 py-2 rounded-[16px]",
  activeTextStyle: "text-blue text-m",
  inactiveContainer: "px-4 py-2",
  inactiveTextStyle: "text-blue text-m",
};

const SideMenuItem = ({ text, link, active }) => {
  return (
    <Link to={link}>
      <div
        className={
          active ? stylesClass.activeContainer : stylesClass.inactiveContainer
        }
      >
        <p
          className={
            active ? stylesClass.activeTextStyle : stylesClass.inactiveTextStyle
          }
        >
          {text}
        </p>
      </div>
    </Link>
  );
};

export default SideMenuItem;

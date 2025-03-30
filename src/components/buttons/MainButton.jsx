import React from "react";


const colorClasses = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500",
  // Add more colors as needed
};

const MainButton = ({
  onclickfunction,
  bgcolor = "red",
  text = "Button text",
}) => {
  const clickfunction = () => onclickfunction();
  return (
    <button
    className={`w-full text-white font-semibold py-2 rounded-lg ${
      colorClasses[bgcolor] || "bg-red-500"
    }`}
      onClick={clickfunction}
    >
      {text}
    </button>
  );
};

export default MainButton;

import React from "react";

const MainButton = ({
  onclickfunction,
  bgcolor = "red",
  text = "Button text",
}) => {
  const clickfunction = () => onclickfunction();
  return (
    <button
      className={`w-full bg-${bgcolor}-500 text-white font-semibold py-2 rounded-lg`}
      onClick={clickfunction}
    >
      {text}
    </button>
  );
};

export default MainButton;

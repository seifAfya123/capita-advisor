import React from "react";
const classStyles = {
  input:
    "w-full  p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 my-1 bg-[#F2F5FF]",
};

const NewDropDown = ({ onchangeFunction, itemsList }) => {
  return (
    <div>
      <select
        className={classStyles.input}
        onChange={(e) => onchangeFunction(e)}
      >
        {itemsList.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default NewDropDown;

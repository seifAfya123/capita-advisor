import React from "react";

const classStyles = {
  inputContainer:
    "w-full overflow-hidden px-2 py-3 rounded-lg bg-[#F2F5FF]",
  input: "w-full overflow-hidden focus:outline-none focus:ring-0 text-black",
  error: "text-red-500 ",
};
const NewInputFeild = ({
  onChangeFunction,
  placeHolderText,
  inputType,
  hasError = false,
  theKey,
  value="",
  name=""
}) => {
  // const fun = (e) => onChangeFunction(e);

  
  return (
    <div key={theKey}>
      
      <div
        className={
          hasError
            ? classStyles.inputContainer + "border-red-500"
            : classStyles.inputContainer
        }
      >
        <input
          type={inputType}
          placeholder={placeHolderText}
          onChange={(e) => onChangeFunction(e)}
          className={classStyles.input}
          value={value}
          name={name}
        />
      </div>
      {hasError && <p className={classStyles.error}>Error message goes here</p>}
    </div>
  );
};
export default NewInputFeild;

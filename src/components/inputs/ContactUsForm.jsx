import React, { useState } from "react";
import { corporateFriendlyCountries } from "../../utils/paths";
import NewInputFeild from "./NewInputFeild";
import NewDropDown from "./NewDropDown";
const classStyles = {
  formContainer: "gap-1 flex flex-col w-full lg:max-w-[50%]",
  button:
    "w-full lg:max-w-[100%] p-3 bg-blue-600 text-white font-semibold rounded-md transition my-1",
};

const ContactUsForm = ({ serviceList = [], serviceID = "" }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [countery, setcountery] = useState("");
  const [service, setservice] = useState("No service");

  const handelSubmit = () => {
    // hena aked fe 3ak
    const requestData = { name, email, phone, service, countery };
    if (serviceID) {
      const requestData = { name, email, phone, service: serviceID, countery };
    }
    console.log(requestData);
  };
  return (
    <div className={classStyles.formContainer}>
      <NewInputFeild
        theKey={"Name"}
        placeHolderText="Name"
        inputType="text"
        hasError={false}
        onChangeFunction={(e) => {
          setname(e.target.value);
          console.log(e.target.value);
        }}
      />
      <NewInputFeild
        theKey={"Email"}
        placeHolderText="Email"
        inputType="email"
        hasError={false}
        onChangeFunction={(e) => {
          setemail(e.target.value);
          console.log(e.target.value);
        }}
      />
      <NewInputFeild
        theKey={"Phone"}
        placeHolderText="Phone"
        inputType="tel"
        hasError={false}
        onChangeFunction={(e) => {
          setphone(e.target.value);
          console.log(e.target.value);
        }}
      />
      {serviceList.length > 0 && (
        <NewDropDown
          itemsList={serviceList}
          onchangeFunction={(e) => setservice(e.target.value)}
        />
      )}
      <NewDropDown
        itemsList={corporateFriendlyCountries}
        onchangeFunction={(e) => setcountery(e.target.value)}
      />
      <button className={classStyles.button} onClick={handelSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ContactUsForm;

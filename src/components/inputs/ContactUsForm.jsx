import React, { useState } from "react";
import {
  backendDomainName,
  corporateFriendlyCountries,
} from "../../utils/paths";
import NewInputFeild from "./NewInputFeild";
import NewDropDown from "./NewDropDown";
const classStyles = {
  formContainer: "gap-1 flex flex-col w-full lg:max-w-[50%] ",
  button:
    "w-full lg:max-w-[100%] p-3 bg-blue-600 text-white font-semibold rounded-md transition my-1",
};

const ContactUsForm = ({ serviceList = [], commingFromServiceName }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [country, setcountry] = useState("");
  const [service, setservice] = useState("No service");
  const [requestData, setrequestData] = useState({});

  const handelSubmit = async (e) => {
    // hena aked fe 3ak
   
    e.preventDefault();
    if (commingFromServiceName) {
      setrequestData({
        name,
        email,
        phone,
        service: commingFromServiceName,
        country,
      });
    } else {
      setrequestData({ name, email, phone, service, country });
    }
    console.log(requestData);
    const URL = `${backendDomainName}/api/contact/`;

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      console.log(response.message);
      setemail("")
      setname("")
      setcountry("Select country")
      setphone("")
      setservice("Select Service")
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  };
  return (
    <div className={classStyles.formContainer}>
      <form className="gap-1 flex flex-col" onSubmit={handelSubmit}>
        <NewInputFeild
          theKey={"Name"}
          placeHolderText="Name"
          inputType="text"
          hasError={false}
          value={name}
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
          value={email}
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
          value={phone}
          onChangeFunction={(e) => {
            setphone(e.target.value);
            console.log(e.target.value);
          }}
        />
        {serviceList.length > 0 && (
          <NewDropDown
            itemsList={serviceList}
            value={service}
            onchangeFunction={(e) => setservice(e.target.value)}
          />
        )}
        <NewDropDown
          itemsList={corporateFriendlyCountries}
          value={country}
          onchangeFunction={(e) => setcountry(e.target.value)}
        />
        <button className={classStyles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;

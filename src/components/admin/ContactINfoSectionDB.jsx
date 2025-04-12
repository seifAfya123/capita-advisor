import React, { useState, useEffect } from "react";
import NewInputFeild from "../inputs/NewInputFeild";

const ContactINfoSectionDB = ({ contactInfo, handleUpdate }) => {
  const [formData, setFormData] = useState({
    tiktok: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    facebook: "",
    email: "",
    phone: "",
    whatsapp: "",
    locationDescription: "",
    locationOnMap: "",
  });
console.log("the info are ");
console.log(contactInfo);

  useEffect(() => {
    if (contactInfo) {      
      setFormData({
        tiktok: contactInfo.tiktok || "",
        instagram: contactInfo.instagram || "",
        x: contactInfo.twitter || "",
        linkedin: contactInfo.linkedin || "",
        facebook: contactInfo.facebook || "",
        email: contactInfo.email || "",
        phone: contactInfo.phone || "",
        whatsapp: contactInfo.whatsapp || "",
        locationDescription: contactInfo.locationDescription || "",
        locationOnMap: contactInfo.locationMapLink || "",
      });
    }
  }, [contactInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("data are "+e.target.value);
    console.log("name is  "+name);
    console.log("value  "+value);
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData); // This function will handle the submission to the API
  };

  return (
    <div className="flex flex-col w-full h-screen mx-4 mt-4">
      <div className="rounded-[16px] bg-white flex flex-col p-2">
        <p>Our Contact Info</p>
        <form onSubmit={handleSubmit} >
          <div className="flex flex-row items-center">
          <div className="w-full flex flex-col gap-2 m-2">
            <NewInputFeild
              placeHolderText={"Tiktok"}
              value={formData.tiktok}
              name="tiktok"
              onChangeFunction={handleChange}
            />
            <NewInputFeild
              placeHolderText={"Instagram"}
              value={formData.instagram}
              name="instagram"
              onChangeFunction={handleChange}
            />
            <NewInputFeild
              placeHolderText={"X"}
              value={formData.x}
              name="x"
              onChangeFunction={handleChange}
            />
            <NewInputFeild
              placeHolderText={"LinkedIn"}
              value={formData.linkedin}
              name="linkedin"
              onChangeFunction={handleChange}
            />
            <NewInputFeild
              placeHolderText={"Facebook"}
              value={formData.facebook}
              name="facebook"
              onChangeFunction={handleChange}
            />
          </div>
          <div className="w-full flex flex-col gap-2 m-2">
            <NewInputFeild
              placeHolderText={"Email"}
              value={formData.email}
              name="email"
              onChangeFunction={handleChange}
            />
            <NewInputFeild
              placeHolderText={"Phone"}
              value={formData.phone}
              name="phone"
              onChangeFunction={handleChange}
            />
            <NewInputFeild
              placeHolderText={"Whatsapp"}
              value={formData.whatsapp}
              name="whatsapp"
              onChangeFunction={handleChange}
            />
            <NewInputFeild
              placeHolderText={"Location description"}
              value={formData.locationDescription}
              name="locationDescription"
              onChangeFunction={handleChange}
            />
            <NewInputFeild
              placeHolderText={"Location on map"}
              value={formData.locationOnMap}
              name="locationOnMap"
              onChangeFunction={handleChange}
            />
          </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Update Info
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactINfoSectionDB;

import React, { useState } from "react";
import { HiMiniUser } from "react-icons/hi2";
import { MdEmail, MdOutlineDateRange } from "react-icons/md";
import { FaPhone, FaStar, FaRegStar, FaCopy } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { SiSmartthings } from "react-icons/si";
import { RiDownload2Line } from "react-icons/ri";
import { backendDomainName } from "../../utils/paths";

const stylesClass = {
  container:
    "w-full flex flex-row bg-white border border-gray-200 rounded-[16px] p-[16px] justify-between my-2 shadow-sm",
  infoContainer: "flex flex-row gap-8 w-full",
  column: "flex flex-col justify-between",
  text: "text-gray-700",
  actionIcon:
    "flex flex-row items-center gap-2 my-0.5 cursor-pointer hover:text-blue-500 transition-colors",
};

const InternalInfo = ({ name, children }) => (
  <div className="flex flex-row items-center gap-2 my-0.5">
    {children}
    <p className={stylesClass.text}>{name}</p>
  </div>
);

const ActionsIcons = ({ children, funcClick }) => (
  <div className={stylesClass.actionIcon} onClick={funcClick}>
    {children}
  </div>
);

const handleCopy = (text) => {
  navigator.clipboard.writeText(text);
  alert("Copied to clipboard: " + text);
};

const RequestItem = ({
  id,
  name,
  email,
  phone,
  service,
  country,
  date,
  isform = false,
  isFavorite = false,
}) => {
  const [favorite, setFavorite] = useState(isFavorite);
  const copyText = `${name}\n${email}\n${phone}\n${service}\n${date}\n${country}`;

  const toggleFavorite = async () => {
    const token = localStorage.getItem("token");
    console.log(id);

    try {
      const response = await fetch(
        `${backendDomainName}/api/contact/${id}/star`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name, email, favorite: !favorite }),
        }
      );
      setFavorite(!favorite);
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  };

  return (
    <div className={stylesClass.container}>
      <div className={stylesClass.infoContainer}>
        <div className={`${stylesClass.column} w-[30%]`}>
          <InternalInfo name={name}>
            <HiMiniUser />
          </InternalInfo>
          <InternalInfo name={email}>
            <MdEmail />
          </InternalInfo>
          <InternalInfo name={phone}>
            <FaPhone />
          </InternalInfo>
        </div>
        <div className={stylesClass.column}>
          <InternalInfo name={service}>
            <SiSmartthings />
          </InternalInfo>
          <InternalInfo name={country}>
            <IoLocationSharp />
          </InternalInfo>
          <InternalInfo name={date}>
            <MdOutlineDateRange />
          </InternalInfo>
        </div>
      </div>
      <div className={stylesClass.column}>
        <ActionsIcons funcClick={toggleFavorite}>
          {favorite ? <FaStar /> : <FaRegStar />}
        </ActionsIcons>
        <ActionsIcons funcClick={() => handleCopy(copyText)}>
          <FaCopy />
        </ActionsIcons>
        {isform && (
          <ActionsIcons
            funcClick={() => {
              console.log("Downloading .....");
            }}
          >
            <RiDownload2Line />
          </ActionsIcons>
        )}
      </div>
    </div>
  );
};

export default RequestItem;

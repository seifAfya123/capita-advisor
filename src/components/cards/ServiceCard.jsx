import { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../../utils/paths";

const classStyles = {
  container:
    " w-full lg:max-w-[32%] rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer ",
  image: "w-full h-48 object-cover",
  content: "p-5",
  title: "text-xl font-bold mb-2",
  text: "text-gray-600",
  link: "text-blue-600 font-semibold mt-3 inline-flex items-center",
  buttonGreen: "w-full bg-green-500 text-white font-semibold py-2 rounded-lg",
  buttonRed: "w-full bg-red-500 text-white font-semibold py-2 rounded-lg",
  popup:
    "fixed inset-0 flex items-center justify-center bg-black bg-opacity-40",
  popupContent: "bg-white p-6 rounded-lg shadow-lg max-w-sm",
  popupButton: "mt-4 px-4 py-2 rounded-lg font-semibold",
  popupButtonRed: "bg-red-500 text-white",
  popupButtonGray: "bg-gray-300 text-black",
};

export default function ServiceCard({
  isAdmin,
  title,
  text,
  image,
  serviceId,
  topage=links.serviceDetails
}) {
  const [showPopup, setShowPopup] = useState(false);

  const handleRemoveClick = () => {
    setShowPopup(true);
  };

  const handleConfirmRemove = () => {
    console.log("Service removed", serviceId);
    setShowPopup(false);
  };

  const handleCancelRemove = () => {
    setShowPopup(false);
  };

  const handleEditClick = () => {
    console.log("Open details for service ID:", serviceId);
  };

  return (
    <div className={classStyles.container}>
      <img className={classStyles.image} src={image} alt="Service" />
      <div className={classStyles.content}>
        <h2 className={classStyles.title}>{title}</h2>
        <p className={classStyles.text}>{text}</p>
        {isAdmin ? (
          <div className="mt-4 space-y-2">
            <button
              className={classStyles.buttonGreen}
              onClick={handleEditClick}
            >
              Edit Service
            </button>
            <button
              className={classStyles.buttonRed}
              onClick={handleRemoveClick}
            >
              Remove Service
            </button>
          </div>
        ) : (
          <Link to={topage} className={classStyles.link}>
            Get to know more →
          </Link>
        )}
      </div>

      {showPopup && (
        <div className={classStyles.popup}>
          <div className={classStyles.popupContent}>
            <p>Are you sure you want to remove this service?</p>
            <div className="flex justify-between mt-4">
              <button
                className={`${classStyles.popupButton} ${classStyles.popupButtonRed}`}
                onClick={handleConfirmRemove}
              >
                Remove
              </button>
              <button
                className={`${classStyles.popupButton} ${classStyles.popupButtonGray}`}
                onClick={handleCancelRemove}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

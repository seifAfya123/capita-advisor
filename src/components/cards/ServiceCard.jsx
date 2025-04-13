import { useState } from "react";
import { Link } from "react-router-dom";
import { backendDomainName, links } from "../../utils/paths";
import { useNavigate } from "react-router-dom";

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
    "fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 absolute",
  popupContent: "bg-white p-6 rounded-lg shadow-lg max-w-sm",
  popupButton: "mt-4 px-4 py-2 rounded-lg font-semibold",
  popupButtonRed: "bg-red-500 text-white",
  popupButtonGray: "bg-gray-300 text-black",
};

export default function ServiceCard({
  id,
  isAdmin,
  title,
  text,
  image,
  topage = links.serviceDetails,
  isblog = false,
}) {
  const [showPopup, setShowPopup] = useState(false);

  const handleRemoveClick = () => {
    setShowPopup(true);
  };

  const handleConfirmRemove = () => {
    // const { id } = useParams(); // get ID from URL

    const token = localStorage.getItem("token");
    const url = `${backendDomainName}/api/${
      isblog ? "blogs" : "services"
    }/${id}`;
    console.log(url);

    const ress = fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())

      .catch((error) => console.error("Error updating contact info:", error));
    if (ress) {
      console.log("Service removed", id);
      setShowPopup(false);
    }
  };

  const handleCancelRemove = () => {
    setShowPopup(false);
  };

  const handleEditClick = () => {
    console.log("Open details for service ID:", id);
  };
  const navigate = useNavigate();

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
              onClick={() => {
                // Navigate to edit screen and pass the ID
                console.log(`is blog ${isblog} `);

                navigate(
                  isblog
                    ? `${links.dashboard_blog_details}/${id}`
                    : `${links.dashboard_serivce_details}/${id}`
                );
              }}
            >
              Edit {isblog ? "Blog" : "Service"}
            </button>
            <button
              className={classStyles.buttonRed}
              onClick={handleRemoveClick}
            >
              Remove {isblog ? "Blog" : "Service"}
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

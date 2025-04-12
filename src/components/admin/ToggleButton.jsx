import React, { useState } from "react";
import { backendDomainName } from "../../utils/paths";

const ToggleButton = ({ onToggle, url }) => {
  const [isToggled, setIsToggled] = useState(false);

  // Function to handle the toggle action
  // const handleToggle = () => {
  //   setIsToggled((prevState) => !prevState);
  //   onToggle(!isToggled); // Call the passed in function with the new toggle state
  // };
  const handleToggle = async (id, updateData) => {
    const token = localStorage.getItem("token"); // adjust key if needed

    if (!token) {
      console.error("No token found in localStorage.");
      return;
    }

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
      });

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(errorData.message || "Failed to update company.");
      }

      setIsToggled((prevState) => !prevState);
    } catch (error) {
      console.error("Error updating company:", error.message);
      return null;
    }
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        padding: "5px 10px",
        backgroundColor: isToggled ? "green" : "red",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "12px",
      }}
    >
      {isToggled ? "ON" : "OFF"}
    </button>
  );
};

export default ToggleButton;

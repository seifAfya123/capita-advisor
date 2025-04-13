import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import NewInputFeild from "../inputs/NewInputFeild";
import MainButton from "../buttons/MainButton";
import { backendDomainName } from "../../utils/paths";

const styles = {
  container: "flex flex-col w-full h-screen mx-4 mt-4 bg-white",
  inputsRow: "w-full px-[16px] flex flex-row gap-3 my-[16px]",
  textareaInput: "h-[120px]",
  inputStyle: "w-full overflow-hidden px-2 py-3 rounded-lg bg-[#F2F5FF] ",
};

const CreateOrServiceDB = () => {
  const { id } = useParams();
  const isUpdate = id && id !== "create";

  const [titlear, settitlear] = useState("");
  const [titleen, settitleen] = useState("");
  const [breifar, setbreifar] = useState("");
  const [breifen, setbreifen] = useState("");
  const [descriptionar, setdescriptionar] = useState("");
  const [descriptionen, setdescriptionen] = useState("");

  useEffect(() => {
    if (isUpdate) {
      const fetchService = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(
            `${backendDomainName}/api/services/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          settitlear(data.name_ar || "");
          settitleen(data.name_en || "");
          setbreifar(data.brief_ar || "");
          setbreifen(data.brief_en || "");
          setdescriptionar(data.desc_ar || "");
          setdescriptionen(data.desc_en || "");
        } catch (error) {
          console.error("Error fetching service:", error);
        }
      };
      fetchService();
    }
  }, [id, isUpdate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const payload = {
      name_ar: titlear,
      name_en: titleen,
      brief_ar: breifar,
      brief_en: breifen,
      desc_ar: descriptionar,
      desc_en: descriptionen,
      image:"https://example.com/image.jpg",
      
    };

    const url = isUpdate
      ? `${backendDomainName}/api/services/${id}`
      : `${backendDomainName}/api/services`;

    const method = isUpdate ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.message || "Something went wrong");
      alert(isUpdate ? "Service updated!" : "Service created!");
    } catch (error) {
      console.error("Error submitting service:", error);
      alert("An error occurred. Please check the console.");
    }
  };

  return (
    <div className={styles.container}>
      <p className="p-[16px] text-lg font-semibold">
        {isUpdate ? "Update Service" : "Create Service"}
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputsRow}>
          <input
            className={styles.inputStyle}
            type="text"
            onChange={(e) => settitleen(e.target.value)}
            placeholder="Enter English title"
            name="titleen"
            value={titleen}
          />
          <input
            multiline
            className={styles.inputStyle + "text-right "}
            type="text"
            onChange={(e) => settitlear(e.target.value)}
            placeholder="Enter Arabic title"
            name="titlear"
            value={titlear}
          />
          {/* <NewInputFeild
            inputType="text"
            onChangeFunction={(e) => settitlear(e.target.value)}
            placeHolderText="Enter Arabic title"
            name="titlear"
            value={titlear}
          /> */}
        </div>
        <div className={styles.inputsRow}>
          <input
            multiline
            className={styles.inputStyle}
            type="text"
            onChange={(e) => setbreifen(e.target.value)}
            placeholder="Enter English brief"
            name="breifen"
            value={breifen}
          />
          <input
            multiline
            className={styles.inputStyle + "text-right "}
            type="text"
            onChange={(e) => setbreifar(e.target.value)}
            placeholder="Enter Arabic brief"
            name="breifar"
            value={breifar}
          />
        </div>
        <div className={styles.inputsRow}>
          <input
            multiline
            className={styles.inputStyle + "h-[25rem]"}
            type="text"
            onChange={(e) => setdescriptionen(e.target.value)}
            placeholder="Enter English description"
            name="descriptionen"
            value={descriptionen}
          />
          <input
            multiline
            className={styles.inputStyle + "text-right "}
            type="text"
            onChange={(e) => setdescriptionar(e.target.value)}
            placeholder="Enter Arabic description"
            name="descriptionar"
            value={descriptionar}
          />
        </div>
        <div className="px-[16px]">
          <MainButton
            onclickfunction={handleSubmit}
            bgcolor="blue"
            text={isUpdate ? "Update Service" : "Create Service"}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateOrServiceDB;

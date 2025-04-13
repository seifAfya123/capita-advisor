
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

const CreateOrEditBlogDB = () => {
  const { id } = useParams();
  const isUpdate = id && id !== "create";

  const [titlear, settitlear] = useState("");
  const [titleen, settitleen] = useState("");
  const [briefar, setbriefar] = useState("");
  const [briefen, setbriefen] = useState("");
  const [descriptionar, setdescriptionar] = useState("");
  const [descriptionen, setdescriptionen] = useState("");
  useEffect(() => {
    if (isUpdate) {
      const fetchBlog = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(`${backendDomainName}/api/blogs/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
  
          const data = await response.json();
  
          settitleen(data.title?.en || "");
          settitlear(data.title?.ar || "");
          setbriefen(data.brief?.en || "");
          setbriefar(data.brief?.ar || "");
          setdescriptionen(data.description?.en || "");
          setdescriptionar(data.description?.ar || "");
  
          // Optional: handle image if needed
          // setImageUrl(data.image || "");
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
      };
  
      fetchBlog();
    }
  }, [id, isUpdate]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
  
    const payload = {
      title: {
        en: titleen,
        ar: titlear,
      },
      brief: {
        en: briefen,
        ar: briefar,
      },
      description: {
        en: descriptionen,
        ar: descriptionar,
      },
      image: "https://example.com/image.jpg", // Optional - replace if dynamic
    };
  
    const url = isUpdate
      ? `${backendDomainName}/api/blogs/${id}`
      : `${backendDomainName}/api/blogs`;
  
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
      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }
      alert(isUpdate ? "Blog updated!" : "Blog created!");
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("An error occurred. Please check the console.");
    }
  };
  
  return (
    <div className={styles.container}>
      <p className="p-[16px] text-lg font-semibold">
        {isUpdate ? "Update blog" : "Create blog"}
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
            onChange={(e) => setbriefen(e.target.value)}
            placeholder="Enter English brief"
            name="briefen"
            value={briefen}
          />
          <input
            multiline
            className={styles.inputStyle + "text-right "}
            type="text"
            onChange={(e) => setbriefar(e.target.value)}
            placeholder="Enter Arabic brief"
            name="briefar"
            value={briefar}
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
            text={isUpdate ? "Update blog" : "Create blog"}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateOrEditBlogDB;

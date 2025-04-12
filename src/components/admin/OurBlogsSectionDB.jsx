import React, { useEffect, useState } from "react";
import MainButton from "../buttons/MainButton";
import ServiceCard from "../cards/ServiceCard";
import NewInputFeild from "../inputs/NewInputFeild";
import { backendDomainName } from "../../utils/paths";

const OurBlogsSectionDB = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem("token"); // Get token from local storage
      const query = searchText ? `?search=${searchText}` : "";
  
      const response = await fetch(`${backendDomainName}/api/blogs${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in headers
        },
      });
  
      if (!response.ok) throw new Error("Network response was not ok");
  
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };
  
  useEffect(() => {
    fetchBlogs();
  }, [searchText]);

  const styleClass = {
    container: "flex flex-col w-full h-screen mx-4 mt-4",
    headerBox: "rounded-[16px] bg-white flex flex-col p-2",
    headerText: "text-lg font-semibold",
    topRow: "flex flex-row items-center justify-between ",
    addButtonWrapper: "w-[20%]",
    cardsContainer: "flex overflow-y-auto flex-wrap justify-between gap-2 mt-2",
  };

  return (
    <div className={styleClass.container}>
      <div className={styleClass.headerBox}>
        <p className={styleClass.headerText}>Our Blogs</p>
        <div className={styleClass.topRow}>
          <div className="min-w-[35%]">
          <NewInputFeild
            placeHolderText="Search by Blog name"
            value={searchText}
            onChangeFunction={(e) => setSearchText(e.target.value)}
          />
          </div>
          <div className={styleClass.addButtonWrapper}>
            <MainButton bgcolor="green" text="Add Blog" />
          </div>
        </div>
      </div>

      <div className={styleClass.cardsContainer}>
        {blogs.map((item) => (
          <ServiceCard
            key={item._id}
            id={item._id}
            isblog={true}
            isAdmin={true}
            image={item.image}
            title={item.title.en}
            text={item.brief.en}
            topage={`/blog/${item._id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OurBlogsSectionDB;

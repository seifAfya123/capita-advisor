import React, { useEffect, useState } from "react";
import MainButton from "../buttons/MainButton";
import ServiceCard from "../cards/ServiceCard";
import NewInputFeild from "../inputs/NewInputFeild";
import { backendDomainName, links } from "../../utils/paths";
import { useNavigate } from "react-router-dom";
const OurBlogsSectionDB = () => {
  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchBlogs = async () => {
    setLoading(true);
    setError("");
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
      setError(error.message);
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching is complete
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
  const navigate = useNavigate();
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
            <MainButton
              bgcolor="green"
              text="Add Blog"
              onclickfunction={() => {
                const id = "create";
                navigate(links.dashboard_blog_details + "/" + id);
              }}
            />
          </div>
        </div>
      </div>

      <div className={styleClass.cardsContainer}>
        {loading ? (
          <p>Loading...</p> // Show loading state while fetching data
        ) : error ? (
          <p className="text-red-500">Error: {error}</p> // Show error if fetching fails
        ) : blogs.length === 0 ? (
          <p>No Blog available</p> // Show message if no services
        ) : (
          blogs.map((item) => (
            <ServiceCard
              isblog={true}
              id={item._id}
              serviceId={item._id}
              isAdmin={true}
              image={item.image}
              title={item.title.en} 
              text={item.brief.en} 
              key={item._id} 
              topage="/"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default OurBlogsSectionDB;

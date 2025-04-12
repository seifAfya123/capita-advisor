import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/cards/ServiceCard";
import { backendDomainName, links } from "../../utils/paths";

const classStyles = {
  pageStyle: "flex flex-col justify-between lg:min-h-screen",
  listStyle:
    "mx-[16px] lg:mx-[8rem] flex flex-col lg:flex-row flex-wrap lg:grid-cols-3 justify-between gap-y-5",
};

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const language = localStorage.getItem("lang") || "en";
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${backendDomainName}/api/blogs/clinet/?language=${language}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        console.log(data);
        
        setBlogs(data); // Assuming the response is an array of blog objects
      } catch (err) {
        setError("Could not load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className={classStyles.pageStyle}>
      <NavBar tablink={links.blogs} />
      <div className={classStyles.listStyle}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          blogs.map((blog) => (
            <ServiceCard
            id={blog._id}
              image={blog.image} // Assuming your blog object contains an image property
              isAdmin={false} // Set this based on your requirement
              text={blog.description[language]} // Assuming `title` property in your blog object
              title={blog.title[language]} // Assuming `brief` property in your blog object
              key={blog._id}
              topage={`${links.blogDetails}/${blog._id}`} // Link to individual blog details page
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;

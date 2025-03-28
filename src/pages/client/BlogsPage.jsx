import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/cards/ServiceCard";
import { links, servicesList } from "../../utils/paths";

const classStyles = {
  pageStyle: "flex flex-col justify-between lg:min-h-screen",
  listStyle: " mx-[16px] lg:mx-[8rem] flex flex-col lg:flex-row flex-wrap lg:grid-cols-3 justify-between gap-y-5",
};

const BlogsPage = () => {
  return (
    <div className={classStyles.pageStyle}>
      <NavBar tablink={links.blogs} />
      <div className={classStyles.listStyle}>
        {servicesList.map((serviceItem) => (
          <ServiceCard
            image={serviceItem.image}
            isAdmin={serviceItem.isAdmin}
            text={"blog title"}
            title={"blog breif"}
            key={serviceItem.key}
            topage={links.blogDetails}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;

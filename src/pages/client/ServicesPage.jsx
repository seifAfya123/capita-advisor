import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/cards/ServiceCard";
import { links } from "../../utils/paths";

const servicesList = [
  {
    image: "callcenter.png",
    isAdmin: false,
    text: "lorem lorem lorem lorem lorem loerm lokre dksja d ai jhgdl aas;d ns;dj k;d asad",
    title: "title here",
    key: "1",
  },
  {
    image: "callcenter.png",
    isAdmin: false,
    text: "lorem lorem lorem lorem lorem loerm lokre dksja d ai jhgdl aas;d ns;dj k;d asad",
    title: "title here",
    key: "2",
  },
  {
    image: "callcenter.png",
    isAdmin: false,
    text: "lorem lorem lorem lorem lorem loerm lokre dksja d ai jhgdl aas;d ns;dj k;d asad",
    title: "title here",
    key: "3",
  },
  {
    image: "callcenter.png",
    isAdmin: false,
    text: "lorem lorem lorem lorem lorem loerm lokre dksja d ai jhgdl aas;d ns;dj k;d asad",
    title: "title here",
    key: "4",
  },
  {
    image: "callcenter.png",
    isAdmin: false,
    text: "lorem lorem lorem lorem lorem loerm lokre dksja d ai jhgdl aas;d ns;dj k;d asad",
    title: "title here",
    key: "5",
  },
  {
    image: "callcenter.png",
    isAdmin: false,
    text: "lorem lorem lorem lorem lorem loerm lokre dksja d ai jhgdl aas;d ns;dj k;d asad",
    title: "title here",
    key: "6",
  },
];

const classStyles = {
  pageStyle: "flex flex-col justify-between lg:min-h-screen",
  listStyle: "flex flex-col lg:flex-row flex-wrap gap-4 mx-[16px] lg:mx-[8rem]",
};

const ServicesPage = () => {
  return (
    <div className={classStyles.pageStyle}>
      <NavBar tablink={links.ourService} />
      <div className={classStyles.listStyle}>
        {servicesList.map((serviceItem) => (
          <ServiceCard
            image={serviceItem.image}
            isAdmin={serviceItem.isAdmin}
            text={serviceItem.text}
            title={serviceItem.title}
            key={serviceItem.key}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;

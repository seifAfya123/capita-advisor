// import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/navbar/NavBar";
import { backendDomainName, homeService, links, servicesList } from "../../utils/paths";
import VideoPlayer from "../../components/cards/VideoPlayer";
import YouTubePlayer from "../../components/cards/YouTubePlayer ";
import HomeServiceCard from "../../components/cards/HomeServiceCard";
import ServiceCard from "../../components/cards/ServiceCard";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const classStyles = {
  bodyStyle: "mx-[16px] md:mx-[8rem] flex flex-col md:flex-wrap",
  imageStyle: "w-full h-[45rem] lg:h-[70%] object-cover",
  seemore: "text-sm ",
};

const Home = () => {
  const language = localStorage.getItem("language") || "en";
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = `${backendDomainName}/api/blogs/client?language=${language}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
        
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col justify-between absolute">
      <NavBar tablink={links.home} />
      <div>
        {/* <img
          className={classStyles.imageStyle}
          src="/callcenter.png"
          alt="home-page"
        /> */}
        {/* <YouTubePlayer videoId={"GsPwb82IjAE"}/> */}
        <VideoPlayer />
        <div className="bg-white flex flex-col lg:flex-row px-[16px] lg:px-[8rem] justify-between py-[4rem] gap-9">
          <div className="bg-amber- lg:max-w-[70%]">
            <h1 className="font-semibold text-2xl">Why Partner with Us?</h1>
            <br />
            <p className="">
              We thrive to elevate your journey as being a partner to you rather
              than simply being a service provider, thus bringing our value
              added contribution to the core which is tailored to your specific
              requirements and expectations. We do not believe in one product
              fits all!
            </p>
            <br />
            <p>
              Are you considering to start or re-structure your business,
              ring-fence your assets & grow your generational wealth, plan your
              investments or succession, relocate your residency, Capita
              Advisors is your bona fide expert.
            </p>
            <br />
            <p>
              Our seasoned experts provides solutions tailored to your
              requirements covering:
            </p>
            <br />
            <div className="flex flex-wrap gap-2">
              {homeService.map((serviceName,index) => (
                <HomeServiceCard text={serviceName} key={index}/>
              ))}
            </div>
          </div>
          <div className="  flex mt-5">
            <img
              src="/aboutus.png"
              alt="service"
              className="object-cover lg:w-[100%] rounded-xl "
            />
          </div>
        </div>
      </div>
      <div className=" px-[16px] lg:px-[8rem] justify-between pt-[3rem]">
        <div className=" flex flex-col">
          <h1 className="font-semibold text-2xl flex flex-row justify-between items-end">
            Our Blogs
            <Link className={classStyles.seemore} to={links.blogs}>
              see More
            </Link>
          </h1>
          <br />
          <div className="flex flex-col lg:flex-row flex-wrap lg:grid-cols-4 justify-between gap-y-6">
            {blogs.map((serviceItem) => (
              <ServiceCard
                image={serviceItem.image}
                isAdmin={serviceItem.isAdmin}
                text={serviceItem.brief.en}
                title={serviceItem.title.en}
                key={serviceItem.key}
                topage={links.blogDetails}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

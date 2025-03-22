import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/navbar/NavBar";
import { homeService, links, servicesList } from "../../utils/paths";
import VideoPlayer from "../../components/cards/VideoPlayer";
import YouTubePlayer from "../../components/cards/YouTubePlayer ";
import HomeServiceCard from "../../components/cards/HomeServiceCard";
import ServiceCard from "../../components/cards/ServiceCard";

const classStyles = {
  bodyStyle: "mx-[16px] md:mx-[8rem] flex flex-col md:flex-wrap",
  imageStyle: "w-full h-[45rem] lg:h-[70%] object-cover",
  card1: "rounded-2xl w-full h-[5rem] hidden md:w-[5rem] md:h-[5rem] ",
  card2: "rounded-2xl w-full h-[5rem] hidden md:w-[5rem] md:h-[5rem] ",
  card3: "rounded-2xl w-full h-[5rem] hidden md:w-[5rem] md:h-[5rem] ",
  card4: "rounded-2xl w-full h-[5rem] hidden md:w-[5rem] md:h-[5rem] ",
  card5: "rounded-2xl w-full h-[5rem] hidden md:w-[5rem] md:h-[5rem] ",
  card6: "rounded-2xl w-full h-[5rem] hidden md:w-[5rem] md:h-[5rem] ",
};
const Home = () => {
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
              {homeService.map((serviceName) => (
                <HomeServiceCard text={serviceName} />
              ))}
            </div>
          </div>
          <div className="  flex mt-5">
            <img
              src="/callcenter.png"
              alt="service"
              className="object-cover lg:w-[100%] rounded-xl "
            />
          </div>
        </div>
      </div>
      <div className=" px-[16px] lg:px-[8rem] justify-between pt-[3rem]">
        <div className=" flex flex-col">
          <h1 className="font-semibold text-2xl ">Our Blogs</h1>
          <br />
          <div className="flex flex-col lg:flex-row flex-wrap gap-4">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/navbar/NavBar";
import { links } from "../../utils/paths";
import VideoPlayer from "../../components/cards/VideoPlayer";
import YouTubePlayer from "../../components/cards/YouTubePlayer ";

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
      </div>
      <div className=" bg-red-300 w-full h-[5rem]"></div>
      <div className=" bg-blue-300 w-full h-[5rem]"></div>
      <div className=" bg-red-300 w-full h-[5rem]"></div>
      <div className=" bg-blue-300 w-full h-[5rem]"></div>
      <div className=" bg-red-300 w-full h-[5rem]"></div>
      <div className=" bg-blue-300 w-full h-[5rem]"></div>
      <div className=" bg-red-300 w-full h-[5rem]"></div>
      <div className=" bg-blue-300 w-full h-[5rem]"></div>
      <div className=" bg-red-300 w-full h-[5rem]"></div>

      <div className={classStyles.bodyStyle}>cards here</div>
      <Footer />
    </div>
  );
};

export default Home;

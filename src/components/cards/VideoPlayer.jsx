import React, { useState } from "react";

const VideoPlayer = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-[50vh] flex justify-center items-center bg-black">
      {/* Video Player */}
      <video
        className="w-full h-full object-cover"
        src="https://ak.picdn.net/shutterstock/videos/3640410097/preview/stock-footage-.mp4"
        autoPlay
        loop
        muted
        onLoadedData={() => setIsLoading(false)}
      />

      {/* Overlay Text */}
      <div className="absolute text-white text-start px-4 w-full h-[100%] bg-black-100 flex flex-col justify-center p-[16px] lg:p-[8rem]">
        <h1 className="text-2xl font-bold">Start a free consultation today!</h1>
        <p className="text-lg">
          Tailored Corporate Structuring Advisory, Business Set-up & Banking
          Solutions and Offshore Company Formation.
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;

import React, { useState } from "react";

const VideoPlayer = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-[50vh] flex justify-center items-center bg-black relative">
      {/* Placeholder Image */}
      {isLoading && (
        <img
          src="https://www.shutterstock.com/shutterstock/videos/3640410097/thumb/1.jpg?ip=x480"
          alt="Video Placeholder"
          className="absolute w-full h-full object-cover"
        />
      )}

      {/* Video Player */}
      <video
        className="w-full h-full object-cover"
        src="https://ak.picdn.net/shutterstock/videos/3640410097/preview/stock-footage-.mp4"
        autoPlay
        loop
        muted
        onLoadedData={() => setIsLoading(false)}
        style={{
          pointerEvents: "none", // Prevents interaction
          userSelect: "none", // Disables selection
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

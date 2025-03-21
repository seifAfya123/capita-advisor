import React from "react";

const YouTubePlayer = ({ videoId }) => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center bg-black">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0`}
        title="YouTube Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;

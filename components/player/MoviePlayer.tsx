"use client";
import React from "react";

type props = {
  videoKey: string;
};

function MoviePlayer({ videoKey }: props) {
  if (!videoKey) return <p>No trailer found.</p>;
  return (
    <div>
      <div className="w-[100%] bg-gray-500 aspect-video rounded-lg overflow-hidden ">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoKey}`}
          title="YouTube Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default MoviePlayer;

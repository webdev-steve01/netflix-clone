import MoviePlayer from "@/components/player/MoviePlayer";
import React from "react";

type TrailerProps = {
  trailer: any[];
};

function Trailers({ trailer }: TrailerProps) {
  console.log(trailer);
  return (
    <div className="text-white flex flex-col gap-8 py-6">
      {trailer.map((item, index) => {
        return (
          <div key={index}>
            <MoviePlayer videoKey={item.key} />
          </div>
        );
      })}
    </div>
  );
}

export default Trailers;

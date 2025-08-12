import MoviePlayer from "@/components/player/MoviePlayer";
import React from "react";

type TrailerProps = {
  trailer: any[];
};

function Trailers({ trailer }: TrailerProps) {
  return (
    <div className="text-white flex flex-col gap-8 py-4">
      {/* <h1 className="text-white text-2xl">All trailers</h1> */}
      {trailer.length > 0 ? (
        trailer.map((item, index) => {
          return (
            <div key={index}>
              <MoviePlayer videoKey={item.key} />
            </div>
          );
        })
      ) : (
        <p className="text-white text-center">No Trailers For This Title</p>
      )}
    </div>
  );
}

export default Trailers;

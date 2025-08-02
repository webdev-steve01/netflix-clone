"use client";
import { useState } from "react";
import Cast from "./Cast";
import Reviews from "./Reviews";
import Similarities from "./Similarities";
import { Results } from "@/utils/interfaces";
import Trailers from "./Trailers";

type props = {
  cast: any[];
  reviews: any[];
  films: Results[];
  trailer: any[];
};
function InfoNav({ cast, reviews, films, trailer }: props) {
  const [page, setPage] = useState<
    "Cast" | "Reviews" | "Trailers" | "Similarities"
  >("Cast");
  return (
    <div className="px-4">
      <div className="text-white font-semibold text-[0.8em] *:p-2 border border-[#911710 ] w-full items-center flex lg:w-[700px] m-auto text-center gap-0 rounded-lg overflow-hidden">
        <p
          className={` lg:p-2 w-full hover:bg-[#911710] transition-all duration-300 ${
            page === "Cast" && "bg-[#911710]"
          }`}
          onClick={() => setPage("Cast")}
        >
          Cast
        </p>
        <p
          className={` lg:p-2 w-full hover:bg-[#911710] transition-all duration-300 ${
            page === "Reviews" && "bg-[#911710]"
          }`}
          onClick={() => setPage("Reviews")}
        >
          Reviews
        </p>
        <p
          className={` lg:p-2 w-full hover:bg-[#911710] transition-all duration-300 ${
            page === "Trailers" && "bg-[#911710 ]"
          }`}
          onClick={() => setPage("Trailers")}
        >
          Trailers
        </p>
        <p
          className={` lg:p-2  w-full hover:bg-[#911710] transition-all duration-300 ${
            page === "Similarities" && "bg-[#911710 ]"
          }`}
          onClick={() => setPage("Similarities")}
        >
          Similars
        </p>
      </div>

      {page === "Cast" ? (
        <Cast cast={cast} />
      ) : page === "Reviews" ? (
        <Reviews reviews={reviews} />
      ) : page === "Similarities" ? (
        <Similarities film={films} />
      ) : (
        <Trailers trailer={trailer} />
      )}
    </div>
  );
}

export default InfoNav;

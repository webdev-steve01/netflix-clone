"use client";
import { useState } from "react";
import Cast from "./Cast";
import Reviews from "./Reviews";
import Similarities from "./Similarities";
import { Results } from "@/utils/interfaces";

type props = {
    cast: any[]
    reviews: any[]
    films: Results[]
}
function InfoNav({cast, reviews, films}: props) {
    const [page, setPage] = useState<"Cast" | "Reviews" | "Trailers" | "Similarities">("Cast")
  return (
    <div className="px-4">
        <div className="text-white border flex lg:w-[700px] m-auto text-center gap-0 rounded-lg overflow-hidden">
            <p className={` lg:p-2 w-full hover:bg-gray-600 transition-all duration-300 ${page === "Cast" && "bg-gray-800"}`} onClick={() => setPage("Cast")}>Cast</p>
            <p className={` lg:p-2 w-full hover:bg-gray-600 transition-all duration-300 ${page === "Reviews" && "bg-gray-800"}`} onClick={() => setPage("Reviews")}>Reviews</p>
            <p className={` lg:p-2 w-full hover:bg-gray-600 transition-all duration-300 ${page === "Trailers" && "bg-gray-800"}`} onClick={() => setPage("Trailers")}>Trailers</p>
            <p className={` lg:p-2  w-full hover:bg-gray-600 transition-all duration-300 ${page === "Similarities" && "bg-gray-800"}`} onClick={() => setPage("Similarities")}>More like this</p>
        </div>

        {
            page === "Cast" ? <Cast cast={cast} /> : page === "Reviews" ? <Reviews reviews={reviews} />: page === "Similarities" ? <Similarities film={films} /> : ""
        }
    </div>
  )
}

export default InfoNav
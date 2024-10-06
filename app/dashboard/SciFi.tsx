"use client";
import Image from "next/image";
import next from "@/public/caret-right-sm-svgrepo-com.svg";
import back from "@/public/caret-left-sm-svgrepo-com.svg";
import { useEffect, useState } from "react";

async function SciFi() {
  const [page, setPage] = useState(1);
  type results = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: 137;
  };
  // const [slides, setSlides] = useState(0);
  // const setSlidesPerview = () => {
  //   setSlides(
  //     window.innerWidth <= 550
  //       ? 3
  //       : window.innerWidth <= 720
  //       ? 3
  //       : window.innerWidth <= 1100
  //       ? 4
  //       : window.innerWidth > 1100
  //       ? 7
  //       : 0
  //   );
  // };
  // useEffect(() => {
  //   //Initially set the amount of slides on page load
  //   setSlidesPerview();
  //   // Add the event listner on component mount
  //   window.addEventListener("resize", setSlidesPerview);

  //   // Remove the listner when component unmounts
  //   return () => {
  //     window.removeEventListener("resize", setSlidesPerview);
  //   };
  // }, []);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTU2M2ZmYTM0NjJiMThmMzViNjJlYTQ2ZmM5M2FkNCIsIm5iZiI6MTcyNjIxNTcxNS4xOTQ1NjgsInN1YiI6IjY2ZDY0NjhiNmM0MjFkZGMzNDZhYzFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Za6gRawWvOOs7GtHkRdWEG9Ava6m3Iv7oE0oi7w_zQ`,
    },
  };

  const holder =
    "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc";

  let data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    options
  );
  let posts = await data.json();
  const array: Array<any> = await posts.results;
  const actionMovies = array.filter((i) => i.genre_ids.includes(878));
  const totalItems = actionMovies.length;
  const element = actionMovies.map((element: results, i: any) => {
    return (
      <div key={i}>
        <section className="">
          <section className="rounded">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${element.poster_path})`}
              alt=""
              height={200}
              width={150}
              className="children-poster skeleton min-w-[120px] rounded-lg"
            />
          </section>
        </section>
      </div>
    );
  });
  return (
    <>
      <section className="text-white py-4">
        <p className="py-2">Sci-Fi</p>
        <div className="relative">
          <div
            // onClick={handleRight}
            className="left absolute left-0 h-[50px] top-1/3 b flex items-center bg-white rounded border"
          >
            <Image src={back} alt="" width={20} height={20} />
          </div>
          <div className="overflow-hidden relative rounded back">
            <div
              className="flex flex-shrink-0 overflow-auto gap-0 carousel"
              id="carousel"
            >
              {element}
            </div>
          </div>
          <div
            // onClick={(e) => handleLeft(e)}
            className="next absolute h-[50px] top-1/3 bg-white rounded flex items-center   border right-0 next"
          >
            <Image src={next} height={20} width={20} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default SciFi;

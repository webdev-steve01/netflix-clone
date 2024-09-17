"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Suspense } from "react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css/effect-fade";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

function DashboardNav() {
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
  const [array, setArray] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTU2M2ZmYTM0NjJiMThmMzViNjJlYTQ2ZmM5M2FkNCIsIm5iZiI6MTcyNjIxNTcxNS4xOTQ1NjgsInN1YiI6IjY2ZDY0NjhiNmM0MjFkZGMzNDZhYzFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Za6gRawWvOOs7GtHkRdWEG9Ava6m3Iv7oE0oi7w_zQ`,
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        options
      );
      let post = await data.json();
      let movies = post.results;
      setArray(movies);
      console.log(movies);
    };
    fetchData();
  }, []);
  console.log("hey");
  const test = array.map((test: results, i) => {
    return (
      <SwiperSlide key={i}>
        <section
          className="w-full h-[100vh]  bg-purple-500"
          style={{
            background: `url(https://image.tmdb.org/t/p/w1280/${test.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full netflix-overlay flex items-end">
            <div className=" py-6 px-4 flex">
              <Suspense fallback={<div className="h-150 w-200 skeleton"></div>}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${test.poster_path}`}
                  alt={test.title}
                  width={700}
                  height={700}
                  className="poster rounded  w-full"
                />
              </Suspense>
              <article className="article max-w-[500px] max-h-[200px] overflow-hidden self-end py-4 flex flex-col gap-2">
                <h1 className="text-[20px]">{test.title}</h1>
                <p className="article">{test.overview}</p>
              </article>
            </div>
          </div>
        </section>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      modules={[Autoplay, EffectFade, Mousewheel]}
      autoplay={{delay: 5000}}
      loop
      effect="fade"
      speed={300}
      // preventInteractionOnTransition
    >
      <div className="border border-solid border-red text-white test">
        {test}
      </div>
    </Swiper>
  );
}

export default DashboardNav;

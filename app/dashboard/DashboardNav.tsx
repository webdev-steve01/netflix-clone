"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// import Movies from '../Movies';

function DashboardNav() {
  type result = {
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
  const test = array.map((test: result, i) => {
    return (
      <SwiperSlide key={i}>
        <section
          className="w-full h-[100vh]  bg-purple-500"
          style={{
            background: `url(https://image.tmdb.org/t/p/w1280/${test.poster_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full netflix-overlay flex items-end">
            <div className=" py-6 px-4 flex">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${test.poster_path}`}
                alt={test.title}
                width={700}
                height={700}
                className="poster  w-full"
              />
              <article className="text-xs max-w-[700px] max-h-[100px] flex flex-col gap-2 py-2">
                <h1 className="text-[20px]">
                  {test.title}
                </h1>
                <p>{test.overview}</p>
              </article>
            </div>
          </div>
        </section>
      </SwiperSlide>
    );
  });
  console.log(array);

  // console.log(random);

  return (
    <Swiper autoplay>
      <div className="border border-solid border-red text-white test">
        {test}
      </div>
    </Swiper>
  );
}

export default DashboardNav;

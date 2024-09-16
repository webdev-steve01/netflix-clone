"use client";
import { useEffect, useState } from 'react';
import React from 'react';
import Image from 'next/image';
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
  }
  const [array, setArray] = useState([])
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
       setArray(movies)
      //  setResponse(filtered_movies);
     };
     fetchData();
   }, []);
  const test = array.map((test: result, i) => {
    return (
      <SwiperSlide>
        <Image
          key={i}
          src={`https://image.tmdb.org/t/p/w1280/${test.poster_path}`}
            alt={test.title}
            width={100}
            height={700}
            className="poster"
          />
      </SwiperSlide>
    );
  })
  
  
  // console.log(random);
  
  return (
    <Swiper
      slidesPerView={1}
      className="border border-solid border-red text-white test"
    >
      {test}
    </Swiper>
  );
}

export default DashboardNav;

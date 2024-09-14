"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import next from "@/public/caret-right-sm-svgrepo-com.svg";
import back from "@/public/caret-left-sm-svgrepo-com.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// import styles bundle
import "swiper/css/bundle";
import Script from "next/script";
function Movies() {
  const [film, setFilm] = useState("movie");
  const [response, setResponse] = useState([]);
  const [slides, setSlides] = useState(0);
  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 550
        ? 2
        : window.innerWidth <= 720
        ? 3
        : window.innerWidth <= 1100
        ? 4
        : window.innerWidth > 1100
        ? 5
        : 0
    );
  };
  useEffect(() => {
    //Initially set the amount of slides on page load
    setSlidesPerview();
    // Add the event listner on component mount
    window.addEventListener("resize", setSlidesPerview);

    // Remove the listner when component unmounts
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);
  const handleClick = (e: any) => {
    setFilm(e.target.value);
  };
  type Moviedata = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<Number>;
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
    vote_count: number;
  };
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTU2M2ZmYTM0NjJiMThmMzViNjJlYTQ2ZmM5M2FkNCIsIm5iZiI6MTcyNjIxNTcxNS4xOTQ1NjgsInN1YiI6IjY2ZDY0NjhiNmM0MjFkZGMzNDZhYzFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Za6gRawWvOOs7GtHkRdWEG9Ava6m3Iv7oE0oi7w_zQ",
    },
  };
  useEffect(() => {
    const fetchData = async (film: string) => {
      let data = await fetch(
        `https://api.themoviedb.org/3/discover/${film}?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        options
      );
      let post = await data.json();
      let movies = post.results;
      const filtered_movies = movies.slice(0, 10);
      setResponse(filtered_movies);
    };
    fetchData(film);
  }, [film]);
  const innerHtml = response.map((movie: Moviedata, id: number) => {
    return (
      <div key={movie.id} className="poster-holder skeleton">
        <SwiperSlide>
          <Image
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt={movie.title}
            width={400}
            height={300}
            className="poster swiper-slide"
          />
        </SwiperSlide>
      </div>
    );
  });

  return (
    <>
      <section className="dropdown-flex flex flex-col gap-4">
        <section className="input-filter text-black flex-grow flex-shrink-0">
          <section className="caret">
            <select
              className="dropdown px-3 py-4 rounded-lg"
              title="country"
              name="country"
              id="country"
            >
              <option value="Nigeria">Nigeria</option>
              <option value="Global">Global</option>
            </select>
          </section>
        </section>
        <section className="input-filter text-black flex-grow flex-shrink-0">
          <section className="caret">
            <select
              className="dropdown px-3 py-4 rounded-lg"
              title="film"
              name="film"
              id="film"
              onChange={handleClick}
            >
              <option value="movie">Movies</option>
              <option value="tv">Tv series</option>
            </select>
          </section>
        </section>
      </section>
      <section className="image-list py-4 my-2">
        <section className="">
          <section className="media-group m-[auto] relative">
            <p className="switchLeft absolute left-[5px] bottom-[50%] rounded-full p-2 bg-white">
              <Image src={back} alt="" width={25} />
            </p>
            <Swiper
              className="movie-holder swiper-wrapper overflow-auto bg-black]"
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={16}
              slidesPerView={slides}
              // pagination
              // loop
              navigation={{
                nextEl: ".switchRight",
                prevEl: ".switchLeft",
              }}
              onSwiper={(swipe: any) => console.log(swipe)}
              onSlideChange={() => console.log("slide change")}
            >
              {innerHtml}
            </Swiper>
            <p className="switchRight absolute right-[5px] bottom-[50%] rounded-full p-2 bg-white">
              <Image src={next} alt="" width={25} />
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default Movies;

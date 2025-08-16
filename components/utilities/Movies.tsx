"use client";
import React, { cache, useEffect, useState } from "react";
import Image from "next/image";
import next from "@/public/caret-right-sm-svgrepo-com.svg";
import back from "@/public/caret-left-sm-svgrepo-com.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { options } from "@/utils/auth";
// Import Swiper styles
import "swiper/css";

// import styles bundle
import "swiper/css/bundle";
import { Results } from "@/utils/interfaces";
function Movies() {
  const [film, setFilm] = useState("movie");
  const [response, setResponse] = useState<Results[]>([]);
  // const [slides, setSlides] = useState(0);
  const handleClick = (e: any) => {
    setFilm(e.target.value);
  };
  useEffect(() => {
    const fetchData = async (film: string) => {
      let data = await fetch(
        `https://api.themoviedb.org/3/discover/${film}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        options
      );
      let post = await data.json();
      let movies: Results[] = post.results;
      const filtered_movies: Results[] = movies?.slice(0, 15);
      setResponse(filtered_movies);
    };
    fetchData(film);
  }, [film]);

  const skeletonSlides = Array.from({ length: 15 }, (_, index) => (
    <SwiperSlide
      className="skeleton"
      key={index}
      style={{ width: "120px", height: "180px" }}
    >
      <div className="lg:w-[200px] lg:h-[260px animate-pulse rounded-lg" />
    </SwiperSlide>
  ));

  const innerHtml =
    response?.length === 0
      ? skeletonSlides
      : response?.map((movie: Results) => (
          <div
            key={movie.id}
            className="poster-holder film- skeleton min-h-[184.5px] md:min-h-[200px] "
          >
            <SwiperSlide
              style={{ width: "120px", height: "180px" }}
              className="rounded-lg overflow-hidden "
            >
              <Image
                src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                alt={movie.title || movie.name || "poster"}
                width={400}
                height={300}
                className=" rounded-lg skeleton swiper-slide bg-gray-600"
              />
            </SwiperSlide>
          </div>
        ));

  return (
    <>
      <section className="dropdown-flex flex flex-col gap-4">
        <section className="max-w-[700px] text-black flex-grow flex-shrink-0">
          <section className="caret">
            <select
              className="dropdown px-3 py-4 rounded-lg focus-within:outline-none"
              title="film"
              name="film"
              id="film"
              onChange={handleClick}
            >
              <option value="movie">Movies</option>
              <option value="tv">Tv shows</option>
            </select>
          </section>
        </section>
      </section>
      <section className="image-list py-4 my-2">
        <section className="">
          <section className="media-group m-[auto] relative">
            <p className="switchLeft absolute left-[5px] bottom-[50%] hidden lg:block rounded-full p-2 bg-white">
              <Image src={back} alt="" width={25} />
            </p>
            <Swiper
              className="movie-holder swiper-wrapper overflow-auto bg-black]"
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={15}
              slidesPerGroup={1}
              slidesPerView={"auto"}
              freeMode={false}
              //         breakpoints={{
              //   320: {
              //     slidesPerView: 2,
              //     spaceBetween: 8,
              //   },

              //   375: {
              //     slidesPerView: 3,
              //     spaceBetween: 12,
              //   },
              //   700: {
              //     slidesPerView: 4,
              //     spaceBetween: 14,
              //   },
              //   768: {
              //     slidesPerView: 5,
              //     spaceBetween: 16,
              //   },
              //   1024: {
              //     slidesPerView: 7,
              //     spaceBetween: 20,
              //   },
              //   1280: {
              //     slidesPerView: 9,
              //     spaceBetween: 24,
              //   },
              //   1440: {
              //     slidesPerView: 9,
              //     spaceBetween: 28,
              //   },
              //   1600: {
              //     slidesPerView:9,
              //     spaceBetween: 32,
              //   },
              // }}
              // pagination
              // loop
              navigation={{
                nextEl: ".switchRight",
                prevEl: ".switchLeft",
              }}
              // onSwiper={(swipe: any) => console.log(swipe)}
              // onSlideChange={() => console.log("slide change")}
            >
              {innerHtml}
            </Swiper>
            <p className="switchRight absolute right-[5px] hidden lg:block bottom-[50%] rounded-full p-2 bg-white">
              <Image src={next} alt="" width={25} />
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default Movies;

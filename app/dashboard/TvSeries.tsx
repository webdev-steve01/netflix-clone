"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import next from "@/public/caret-right-sm-svgrepo-com.svg";
import back from "@/public/caret-left-sm-svgrepo-com.svg";
import Image from "next/image";
import "swiper/css";
function TvSeries() {
  const [array, setArray] = useState([]);
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
        ? 7
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
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTU2M2ZmYTM0NjJiMThmMzViNjJlYTQ2ZmM5M2FkNCIsIm5iZiI6MTcyNjIxNTcxNS4xOTQ1NjgsInN1YiI6IjY2ZDY0NjhiNmM0MjFkZGMzNDZhYzFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Za6gRawWvOOs7GtHkRdWEG9Ava6m3Iv7oE0oi7w_zQ`,
    },
  };
  useEffect(() => {
    const number: number = Math.floor(Math.random() * 10);
    const fetchData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
        options
      ).then((res) => res.json()).then(res => setArray(res.results))
      // console.log(movies);
    };
    fetchData();
  }, []);
  const element = array.map((element: results, i) => {
    return (
      <SwiperSlide key={i}>
        <section className="">
          <section
            style={{
              // background: `url(https://image.tmdb.org/t/p/w500/${element.poster_path})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className=""
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500/${element.poster_path})`}
              alt=""
              height={200}
              width={150}
            />
          </section>
        </section>
      </SwiperSlide>
    );
  });
  return (
    <>
      <section className="text-white py-4">
        <p className="py-2">Tv shows</p>
        <div className="relative">
          <div className="left absolute left-0 h-[100px] bottom-[60px] flex items-center bg-white rounded border">
            <Image src={back} alt="" width={20} height={20} />
          </div>
          <div className="overflow-hidden relative rounded back">
            <Swiper
              slidesPerView={slides}
              modules={[Navigation]}
              spaceBetween={0}
              className="max-w-[1200px] mx-auto"
              navigation={{
                nextEl: '.next',
                prevEl: '.left'
              }}
              preventInteractionOnTransition={false}
            >
              {element}
            </Swiper>
          </div>
          <div className="next absolute h-[100px] bottom-[60px] bg-white rounded flex items-center   border right-0 next">
            <Image src={next} height={20} width={20} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default TvSeries;

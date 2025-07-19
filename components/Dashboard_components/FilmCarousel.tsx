"use client";
import React from "react";
import Image from "next/image";
import next from "@/public/caret-right-sm-svgrepo-com.svg";
import back from "@/public/caret-left-sm-svgrepo-com.svg";
import MovieCard from "./MovieCard";
import { Results } from "@/utils/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

type prop = {
  movies: Results[];
  type: string;
  uid: number
};

function FilmCarousel({ movies, type, uid }: prop) {
  return (
    <div className="relative">
      <div id={`back-${uid}`} className={` absolute front left h-[50px] w-[50px] top-1/3 flex items-center justify-center bg-[#C9CEBD]/90 rounded-full z-0`}>
        <Image src={back} alt="" width={20} height={20} />
      </div>
      <div className="overflow-x-hidden w-full relative rounded back">
        <Swiper
          className="flex flex-shrink-0 overflow-auto gap-0 carousel"
          id="carousel"
          modules={[Navigation]}
          navigation={{
            nextEl: `.next-${uid}`,
            prevEl: `#back-${uid}`
          }}
          slidesPerView={"auto"}
          spaceBetween={15}
          slidesPerGroup={1}
          freeMode={false}
          // autoplay={{delay: 2500}}
          // spaceBetween={3}
          // breakpoints={{
          //   320: {
          //     slidesPerView: 3,
          //     spaceBetween: 8,
          //   },
            
          //   400: {
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
          //     slidesPerView: 10,
          //     spaceBetween: 28,
          //   },
          //   1600: {
          //     slidesPerView: 12,
          //     spaceBetween: 32,
          //   },
          // }}
        >
          {movies.map((movie, i) => (
            <SwiperSlide className="w-[120px]" style={{width: "120px"}} key={i}>
              <MovieCard movie={movie} type={type} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={`next-${uid} next absolute z-10 h-[50px] top-1/3 bg-[#C9CEBD]/75 w-[50px] flex items-center justify-center rounded-full right-0`}>
        <Image src={next} height={20} width={20} alt="" />
      </div>
    </div>
  );
}

export default FilmCarousel;

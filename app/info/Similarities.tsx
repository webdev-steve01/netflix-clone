"use client";
import React from "react";
import { Results } from "@/utils/interfaces";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import next from "@/public/caret-right-sm-svgrepo-com.svg";
import back from "@/public/caret-left-sm-svgrepo-com.svg";

type Props = {
  film: Results[];
};

function Similarities({ film }: Props) {
  if (!film || film.length === 0) return <p>No related movies</p>;
  return (
    <section className="py-6">
      <h2 className="text-white text-2xl font-semibold mb-4">More Like This</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation={{
          nextEl: `.next`,
          prevEl: `.back`,
        }}
        className="w-full"
      >
        <div
          id={`back`}
          className={` absolute front left h-[50px] w-[50px] top-1/3 flex items-center justify-center bg-[#C9CEBD]/90 rounded-full z-0`}
        >
          <Image src={back} alt="" width={20} height={20} />
        </div>
        {film.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "120px" }}
            className="bg-[#111] rounded-lg overflow-hidden group cursor-pointer"
          >
            <Link
              href={`/info/${item.name ? "tv" : "movie"}/${item.id}`}
              className="block"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name || "poster"}
                width={100}
                height={100}
                className="w-[150px] h-[180px] transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-2 text-white text-sm hidden lg:block">
                <p className="font-medium line-clamp-1">
                  {item.title || item.name}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <div
          className={`next next absolute z-10 h-[50px] top-1/3 bg-[#C9CEBD]/75 w-[50px] flex items-center justify-center rounded-full right-0`}
        >
          <Image src={next} height={20} width={20} alt="" />
        </div>
      </Swiper>
    </section>
  );
}

export default Similarities;

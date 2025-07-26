"use client";
import React from "react";
import { Results } from "@/utils/interfaces";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

type Props = {
  film: Results[];
};

function Similarities({ film }: Props) {
  if (!film || film.length === 0) return <p>No related movies</p>;
  return (
    <section className="px-4 py-6">
      <h2 className="text-white text-2xl font-semibold mb-4">More Like This</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation
        className="w-full"
      >
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
              <div className="p-2 text-white text-sm">
                <p className="font-medium line-clamp-1">
                  {item.title || item.name}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Similarities;

"use client";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import type { Results } from "@/utils/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Swiper core styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

interface Prop {
  array: Results[];
}

export default function HomeDash({ array }: Prop) {
  const swiperRef = useRef<SwiperType | null>(null);

  const body = array.map((test: Results, index: number) => {
    const mediaType =
      (test as any)?.media_type ?? (test as any)?.first_air_date
        ? "tv"
        : "movie";

    return (
      <SwiperSlide key={test.id ?? index} className="p-0 m-0">
        <section
          className="w-[100vw] h-screen "
          style={{
            background: `url(https://image.tmdb.org/t/p/w1280/${test.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="h-full fylm-overlay px-4 py-[2em] flex gap-[4em] items-end">
            <div className="flex gap-6 flex-col py-2 m-0">
              {test.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w1280/${test.poster_path}`}
                  alt={test.title || test.name || "poster"}
                  width={200}
                  height={50}
                  className="rounded-lg w-[150px] hidden lg:block"
                  priority={index < 2} // preload the first couple for snappier UX
                />
              ) : null}

              <Link
                href={`/info/${mediaType}/${test.id}`}
                className="rounded-lg bg-[#B1070F] md:text-[1.2em] font-serif text-white transition-all duration-300 max-w-[150px] py-2 flex justify-center"
                onClick={() => {
                  // optional: stop autoplay right before navigation to avoid any race with unmount
                  swiperRef.current?.autoplay?.stop();
                }}
              >
                <p>More Info</p>
              </Link>

              <article className="max-w-[700px] max-h-[200px] lg:text-[1.2em] m-0 overflow-hidden gap-2">
                <h1 className="text-[1.2em] m-0 font-semibold">
                  {test.title || test.name}
                </h1>
                <p className="text-ellipsis text-[0.9em]/5 lg:text-[0.9em]/8 w-[90%] line-clamp-4">
                  {test.overview}
                </p>
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
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop
      speed={600}
      autoplay={{
        delay: 9000,
        disableOnInteraction: false, // keep autoplay after any user interaction
        pauseOnMouseEnter: true, // handy for reading descriptions
      }}
      mousewheel={{
        forceToAxis: true, // only react to intended axis
        releaseOnEdges: true, // let normal scroll happen at edges
      }}
      // touchStartPreventDefault={false} // let clicks behave naturally even after slight movement
    >
      {body}
    </Swiper>
  );
}

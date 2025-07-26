"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Results } from "@/utils/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

interface prop {
  array: Results[];
}

export default function HomeDash({ array }: prop) {
  const [isChanging, setIsChanging] = useState(true);
  // const router = useRouter();
  const body = array.map((test: Results, index: number) => {
    return (
      <SwiperSlide key={index} className="p-0 m-0">
        <section
          key={index}
          className="w-[100vw] h-[80vh] "
          style={{
            background: `url(https://image.tmdb.org/t/p/w1280/${test.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="h-full newflicks-overlay px-4  flex gap-[4em] items-end">
            <div className="flex gap-6 flex-col py-2 m-0">
              <Image
                src={`https://image.tmdb.org/t/p/w1280/${test.poster_path}`}
                alt={test.title || test.name || "poster"}
                width={200}
                height={50}
                className="rounded-lg w-[150px] hidden lg:block 0px]"
              />

              <Link
                className="rounded-lg bg-[#B1070F] md:text-[1.2em] font-serif text-white transition-all duration-300 hover:bg-[#0E6BA8] hover:text-white max-w-[150px] py-2 flex justify-center"
                href={`/info/${test.media_type === "movie" ? "movie" : "tv"}/${
                  test.id
                }`}
                onClick={() => setIsChanging(false)}
              >
                <p>More Info </p>{" "}
              </Link>
              <article className="max-w-[700px] max-h-[200px] lg:text-[1.2em] m-0 overflow-hidden gap-2">
                <h1 className="text-[1.2em] m-0  font-semibold">
                  {test.title || test.name}
                </h1>
                <p className="text-ellipsis text-[0.9em]/5 lg:text-[0.9em]/8 w-[90%] line-clamp-3 ">
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
      autoplay={isChanging ? { delay: 9000 } : false}
      loop
      effect="fade"
      speed={500}
    >
      {body}
    </Swiper>
  );
}

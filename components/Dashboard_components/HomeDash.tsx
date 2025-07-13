"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
    const router = useRouter(); 
  const test = array.map((test: Results, i: number) => {
    return (
      <SwiperSlide key={i} className="p-0 m-0">
        <section
          className="w-[100vw] h-[80vh] "

          style={{
            background: `url(https://image.tmdb.org/t/p/w1280/${test.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="h-full netflix-overlay px-4 py-2 flex gap-[4em] items-end">
            <div className=" py-2 m-0">
              <Image
                src={`https://image.tmdb.org/t/p/w1280/${test.poster_path}`}
                alt={test.title}
                width={200}
                height={50}
                className="rounded poster hidden lg:block  w-full m-0"
              />
              <Link className="rounded-lg bg-[#F7DAD9] text-black transition-all duration-300 hover:bg-black hover:text-white my-5 px-4 py-2" href={`./${test.id}`}>More Info  </Link>
              <article className="article max-w-[500px] max-h-[200px] m-0 overflow-hidden py-2 gap-2">
                <h1 className="text-[1.5em] py-2 font-semibold">{test.title || test.name}</h1>
                <p className="article line-clamp-4">{test.overview}</p>
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
      autoplay={{ delay: 9000 }}
      loop
      effect="fade"
      speed={500}
    >
      {test}
    </Swiper>
  );
}

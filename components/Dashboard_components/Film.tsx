"use client";
import { Results } from "@/utils/interfaces";
import Image from "next/image";
import moreMovies from "@/public/next-white-svgrepo-com.svg";
import FilmCarousel from "./FilmCarousel";
import { useRouter } from "next/navigation";
import Link from "next/link";
type Prop = {
  genre: number;
  genre_title: string;
  type: string;
  adult?: boolean;
  items: Results[];
};

export default async function Film({
  genre,
  genre_title,
  type,
  items: movies = [],
}: Prop) {
  return (
    <section className="text-white py-2 no-select">
      <div className="py-2 text-[1.2em] md:text-[1.5em] flex items-center justify-between font-semibold">
        <p>{genre_title}</p>
        <Link
          href={`/genre/${type}/${genre}`}
          className="flex cursor-pointer gap-2 items-center"
        >
          <p className="m-0">More</p>
          <Image
            src={moreMovies}
            width={20}
            height={20}
            alt="more movies for this genre"
          />
        </Link>
      </div>
      <FilmCarousel movies={movies} type={type} uid={genre} />
    </section>
  );
}

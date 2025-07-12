// app/components/Film.tsx
import Image from "next/image";
import next from "@/public/caret-right-sm-svgrepo-com.svg";
import back from "@/public/caret-left-sm-svgrepo-com.svg";
import { Results } from "@/utils/interfaces";
import dynamic from "next/dynamic";
const MovieCard = dynamic(() => import("./MovieCard"), { ssr: false });
type Prop = {
  genre: number;
  genre_title: string;
  type: string;
  adult?: boolean;
};

export default async function Film({
  genre,
  genre_title,
  type,
  adult = false,
}: Prop) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/${type}?include_adult=${adult}&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTU2M2ZmYTM0NjJiMThmMzViNjJlYTQ2ZmM5M2FkNCIsIm5iZiI6MTcyNjIxNTcxNS4xOTQ1NjgsInN1YiI6IjY2ZDY0NjhiNmM0MjFkZGMzNDZhYzFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Za6gRawWvOOs7GtHkRdWEG9Ava6m3Iv7oE0oi7w_zQ`,
      },
    }
  );

  const data = await res.json();
  const movies: Results[] = data.results;

  return (
    <section className="text-white py-4 no-select">
      <p className="py-2 text-[1.2em] font-semibold">{genre_title}</p>
      <div className="relative">
        <div className="left absolute left-0 h-[50px] w-[50px] top-1/3 flex items-center justify-center bg-[#C9CEBD]/90 rounded-full z-0">
          <Image src={back} alt="" width={20} height={20} />
        </div>
        <div className="overflow-hidden relative rounded back">
          <div
            className="flex flex-shrink-0 overflow-auto gap-0 carousel"
            id="carousel"
          >
            {movies.map((movie, i) => (
              <div key={i}>
                <MovieCard movie={movie} type={type} />
              </div>
            ))}
          </div>
        </div>
        <div className="next absolute z-10 h-[50px] top-1/3 bg-[#C9CEBD]/75 w-[50px] flex items-center justify-center rounded-full right-0">
          <Image src={next} height={20} width={20} alt="" />
        </div>
      </div>
    </section>
  );
}

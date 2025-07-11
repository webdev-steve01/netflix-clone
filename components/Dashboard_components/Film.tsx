// app/components/Film.tsx
import Image from "next/image";
import next from "@/public/caret-right-sm-svgrepo-com.svg";
import back from "@/public/caret-left-sm-svgrepo-com.svg";

type Prop = {
  genre: number;
  genre_title: string;
};

type Results = {
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
  vote_count: number;
};

export default async function Film({ genre, genre_title }: Prop) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTU2M2ZmYTM0NjJiMThmMzViNjJlYTQ2ZmM5M2FkNCIsIm5iZiI6MTcyNjIxNTcxNS4xOTQ1NjgsInN1YiI6IjY2ZDY0NjhiNmM0MjFkZGMzNDZhYzFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Za6gRawWvOOs7GtHkRdWEG9Ava6m3Iv7oE0oi7w_zQ`,
      },
      cache: "no-store", // optional
    }
  );

  const data = await res.json();
  const movies: Results[] = data.results;

  return (
    <section className="text-white py-4">
      <p className="py-2">{genre_title}</p>
      <div className="relative">
        <div className="left absolute left-0 h-[50px] top-1/3 flex items-center bg-white rounded border">
          <Image src={back} alt="" width={20} height={20} />
        </div>
        <div className="overflow-hidden relative rounded back">
          <div className="flex flex-shrink-0 overflow-auto gap-0 carousel" id="carousel">
            {movies.map((movie, i) => (
              <div key={i}>
                <section className="rounded">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                    height={200}
                    width={150}
                    className="children-poster skeleton min-w-[120px] rounded-lg"
                  />
                </section>
              </div>
            ))}
          </div>
        </div>
        <div className="next absolute h-[50px] top-1/3 bg-white rounded flex items-center border right-0">
          <Image src={next} height={20} width={20} alt="" />
        </div>
      </div>
    </section>
  );
}

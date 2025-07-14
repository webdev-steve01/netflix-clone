import { Results } from "@/utils/interfaces";
import FilmCarousel from "./FilmCarousel";
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
    <section className="text-white  no-select">
      <p className="py-2 text-[1.2em] md:text-[1.5em]  font-semibold">
        {genre_title}
      </p>
      <FilmCarousel movies={movies} type={type} uid={genre} />
    </section>
  );
}

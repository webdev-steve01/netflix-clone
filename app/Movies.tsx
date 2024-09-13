
import React, { useEffect, useState } from "react";
import Image from "next/image";

async function Movies() {
  type Moviedata = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<Number>;
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
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTU2M2ZmYTM0NjJiMThmMzViNjJlYTQ2ZmM5M2FkNCIsIm5iZiI6MTcyNjIxNTcxNS4xOTQ1NjgsInN1YiI6IjY2ZDY0NjhiNmM0MjFkZGMzNDZhYzFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Za6gRawWvOOs7GtHkRdWEG9Ava6m3Iv7oE0oi7w_zQ",
    },
  };

  let data = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );
  let post = await data.json();
  let movies = post.results;
  const filtered_movies = movies.slice(0, 10);
  const innerHtml = filtered_movies.map((movie: Moviedata, id: number) => {
    return (
        <div key={id} className="skeleton">
          <Image src={movie.poster_path} alt={movie.title} width={200} height={300} />
      </div>
    )
  })

  return (
    <>
      <section className="image-list py-4 my-2">
        <section className="media-group skeleton">
          <div className="flex overflow-auto bg-black">
            {innerHtml}
          </div>
        </section>
      </section>
    </>
  );
}

export default Movies;

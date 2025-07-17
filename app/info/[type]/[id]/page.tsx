"use client";
import { useParams } from "next/navigation";
import MovieInfo from "./MovieInfo";

function MoviePage() {
  const params = useParams();

  return (
    <div>
      <MovieInfo type={String(params.type)} param={String(params.id)} />
    </div>
  );
}

export default MoviePage;

import RenderThisPage from "./RenderThisPage";
// app/[type]/[id]/page.tsx

import { options } from "@/utils/auth";

export async function generateStaticParams() {
  // Fetch trending movies and TV shows
  const [movieRes, tvRes] = await Promise.all([
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      options
    ),
    fetch(
      "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
      options
    ),
  ]);

  const [movieData, tvData] = await Promise.all([
    movieRes.json(),
    tvRes.json(),
  ]);

  const movieParams = (movieData.results || []).map((movie: any) => ({
    type: "movie",
    id: movie.id.toString(),
  }));

  const tvParams = (tvData.results || []).map((tv: any) => ({
    type: "tv",
    id: tv.id.toString(),
  }));

  // Combine both arrays
  return [...movieParams, ...tvParams];
}

function MoviePage({ params }: { params: { type: string; id: string } }) {
  return (
    <div>
      <RenderThisPage type={params.type} id={params.id} />
    </div>
  );
}

export default MoviePage;

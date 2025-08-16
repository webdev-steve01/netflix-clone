import { options } from "@/utils/auth";
import Image from "next/image";
import InfoNav from "../../InfoNav";
import back from "@/public/list-back.svg";
import AddToListButton from "./AddToListButton";
import my_list from "@/public/list-heart-svgrepo-com.svg";
import Link from "next/link";

type Props = {
  param: string;
  type: string;
};

async function safeFetch(url: string) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error(`Error fetching: ${url}`, err);
    return null;
  }
}

async function MovieInfo({ param, type }: Props) {
  const baseUrl = `https://api.themoviedb.org/3/${type}/${param}`;

  // Fetch all in parallel
  const [json, result, similar, newData, Cast] = await Promise.all([
    safeFetch(`${baseUrl}?language=en-US`),
    safeFetch(`${baseUrl}/reviews?language=en-US&page=1`),
    safeFetch(`${baseUrl}/similar?language=en-US&page=1`),
    safeFetch(`${baseUrl}/videos?language=en-US`),
    safeFetch(`${baseUrl}/credits?language=en-US`),
  ]);

  // If main data is missing, show error
  if (!json) {
    return <div className="text-red-500">No data found.</div>;
  }

  // Extract trailers if videos fetched successfully
  const trailers =
    newData?.results?.filter(
      (video: any) => video.type === "Trailer" && video.site === "YouTube"
    ) || [];

  const data = {
    id: json.id,
    title: json.title || json.name,
    poster_path: json.poster_path,
    type: type,
    isAdding: (boolean: boolean) => {
      console.log("Adding state:", boolean);
    },
  };

  return (
    <section className="bg-[#000000]">
      {/* Top Nav */}
      <div className="text-white bg-transparent flex justify-between absolute w-full items-center p-2">
        <Link href={"/dashboard"}>
          <Image src={back} width={50} height={30} alt="back" />
        </Link>
        <div className="rounded-full p-2 bg-[#0C0502]" aria-label="my list">
          <Image src={my_list} width={30} height={30} alt="my-list" />
        </div>
      </div>

      {/* Banner */}
      <section
        className="text-white w-screen h-[60vh]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${json.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="fylm-overlay h-full w-full flex items-end px-4">
          {json.poster_path && (
            <Image
              src={`https://image.tmdb.org/t/p/w1280/${json.poster_path}`}
              alt={json.title || json.name || "poster"}
              width={200}
              height={50}
              className="rounded-lg skeleton w-[120px]"
            />
          )}
          <div>
            <h1 className="font-bold text-[1.4em]">
              {json.name || json.title}
            </h1>
            {json.number_of_seasons && (
              <p className="text-gray-400 text-[0.8em]">
                ({json.number_of_seasons} seasons)
              </p>
            )}
            <AddToListButton
              movie={data}
              baseText="Add to List"
              resultingText="In List"
            />
          </div>
        </section>
      </section>

      {/* Details */}
      <section className="p-4 text-white max-w-[1200px] flex flex-col gap-4">
        {json.overview && (
          <p className="font-light mb-2 text-[0.9em] lg:text-[0.95em]">
            {json.overview}
          </p>
        )}
        <ul className="space-y-1 text-[0.em]">
          {json.release_date && <li>Release Date: {json.release_date}</li>}
          {json.first_air_date && (
            <li>First Air Date: {json.first_air_date}</li>
          )}
          {json.last_air_date && <li>Last Air Date: {json.last_air_date}</li>}
          {json.status && <li>Status: {json.status}</li>}
          {json.runtime && <li>Runtime: {json.runtime} mins</li>}
          {json.episode_run_time?.[0] && (
            <li>Avg Episode Runtime: {json.episode_run_time[0]} mins</li>
          )}
          {json.number_of_episodes && (
            <li>Total Episodes: {json.number_of_episodes}</li>
          )}
          {json.spoken_languages?.length > 0 && (
            <li>
              Languages:{" "}
              {json.spoken_languages
                .map((lang: any) => lang.english_name)
                .join(", ")}
            </li>
          )}
          {json.genres?.length > 0 && (
            <li>Genres: {json.genres.map((g: any) => g.name).join(", ")}</li>
          )}
          <li>Rating: {json.vote_average} / 10</li>
        </ul>
      </section>

      <InfoNav
        cast={Cast?.cast || []}
        reviews={result?.results || []}
        films={similar?.results || []}
        trailer={trailers}
      />
    </section>
  );
}

export default MovieInfo;

import { options } from "@/utils/auth";
import Image from "next/image";
import InfoNav from "../../InfoNav";
import DashNav from "@/components/Dashboard_components/DashNav";
import AddToListButton from "./AddToListButton";

type Props = {
  param: string;
  type: string;
};

async function MovieInfo({ param, type }: Props) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${param}?language=en-US`,
    options
  );
  const rev = await fetch(
    `https://api.themoviedb.org/3/${type}/${param}/reviews?language=en-US&page=1`,
    options
  );
  const sim = await fetch(
    `https://api.themoviedb.org/3/${type}/${param}/similar?language=en-US&page=1`,
    options
  );
  const json = await res.json();
  const result = await rev.json();
  const similar = await sim.json();
  const cast = await fetch(
    `https://api.themoviedb.org/3/${type}/${param}/credits?language=en-US`,
    options
  );
  const Cast = await cast.json();

  if (!json) return <div className="text-red-500">No data found.</div>;
  const data = {
    id: json.id,
    title: json.title || json.name,
    poster_path: json.poster_path,
    type: type,
    isAdding: (boolean: boolean) => {
      // This function can be used to handle adding state if needed
      console.log("Adding state:", boolean);
    },
  };

  return (
    <section className="bg-[#000000]">
      <div className="text-white">
        <DashNav />
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
        <section className="netflix-overlay h-full w-full flex items-end px-4">
          <Image
            src={`https://image.tmdb.org/t/p/w1280/${json.poster_path}`}
            alt={json?.title || json?.name || "poster"}
            width={200}
            height={50}
            className="rounded-lg skeleton w-[120px]"
          />
          <div>
            <h1 className="font-bold text-[1.4em]">
              {json.name || json.title}{" "}
              {json.number_of_seasons && (
                <span className="text-gray-400 text-[0.8em]">
                  ({json.number_of_seasons} seasons)
                </span>
              )}
            </h1>
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
        <p className="font-light mb-2 text-[0.9em] lg:text-[0.95em]">
          {json.overview}
        </p>

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
          <li>
            Rating: {json.vote_average} / 10 &nbsp;
            <span className="inline-flex items-center">
              {/* {ratingArray.map((_, i) => (
                <Image key={i} src={star} alt="star" width={16} height={16} />
              ))} */}
            </span>
          </li>
        </ul>
      </section>

      <InfoNav
        cast={Cast.cast}
        reviews={result.results}
        films={similar.results}
      />
    </section>
  );
}

export default MovieInfo;

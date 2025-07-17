"use client";
import React, { useEffect, useState } from "react";
import { options } from "@/utils/auth";
import { Results } from "@/utils/interfaces";
import Image from "next/image";
import star from "@/public/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  param: string;
  type: string;
};

function MovieInfo({ param, type }: Props) {
  const [data, setData] = useState<Results>();
  const [reviews, setReviews] = useState<any>();
  const [cast, setCast] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/${param}?language=en-US`,
          options
        );
        const rev = await fetch(
          `https://api.themoviedb.org/3/${type}/${param}/reviews?language=en-US&page=1`,
          options
        );
        const json = await res.json();
        const result = await rev.json();
        const cast = await fetch(
          `https://api.themoviedb.org/3/${type}/${param}/credits?language=en-US`,
          options
        );
        const Cast = await cast.json();
        console.log(Cast.cast); // ← This is your cast list
        setCast(Cast.cast);

        setData(json);
        setReviews(result);
        console.log(json);
        console.log(result.results);
      } catch (error) {
        console.error("Failed to fetch movie info:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [param, type]);

  if (loading) return <div className="text-white">Loading...</div>;

  if (!data) return <div className="text-red-500">No data found.</div>;

  const rating = Math.ceil(data.vote_average / 2);
  const ratingArray = Array(rating).fill(0);

  return (
    <section>
      {/* Banner */}
      <section
        className="text-white w-screen h-[60vh]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${data.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="netflix-overlay h-full w-full flex items-end px-4">
          <Image
            src={`https://image.tmdb.org/t/p/w1280/${data.poster_path}`}
            alt={data?.title || data?.name || "poster"}
            width={200}
            height={50}
            className="rounded-lg w-[150px]"
          />
        </section>
      </section>

      {/* Details */}
      <section className="p-4 text-white max-w-[1200px] flex flex-col gap-4">
        <h1 className="font-bold text-[1.4em]">
          {data.name || data.title}{" "}
          {data.number_of_seasons && (
            <span className="text-gray-400 text-[0.8em]">
              ({data.number_of_seasons} seasons)
            </span>
          )}
        </h1>

        <p className="font-light mb-2">{data.overview}</p>

        <ul className="space-y-1 text-[0.95em]">
          {data.release_date && <li>Release Date: {data.release_date}</li>}
          {data.first_air_date && (
            <li>First Air Date: {data.first_air_date}</li>
          )}
          {data.last_air_date && <li>Last Air Date: {data.last_air_date}</li>}
          {data.status && <li>Status: {data.status}</li>}
          {data.runtime && <li>Runtime: {data.runtime} mins</li>}
          {data.episode_run_time?.[0] && (
            <li>Avg Episode Runtime: {data.episode_run_time[0]} mins</li>
          )}
          {data.number_of_episodes && (
            <li>Total Episodes: {data.number_of_episodes}</li>
          )}
          {data.spoken_languages?.length > 0 && (
            <li>
              Languages:{" "}
              {data.spoken_languages
                .map((lang) => lang.english_name)
                .join(", ")}
            </li>
          )}
          {data.genres?.length > 0 && (
            <li>Genres: {data.genres.map((g) => g.name).join(", ")}</li>
          )}
          <li>
            PG Rating:{" "}
            <span
              className={`inline-block px-2 py-0.5 rounded text-sm font-semibold ${
                data.adult ? "bg-red-600" : "bg-green-600"
              }`}
            >
              {data.adult ? "18+" : "FAM"}
            </span>
          </li>
          <li>
            Rating: {data.vote_average} / 10 &nbsp;
            <span className="inline-flex items-center">
              {ratingArray.map((_, i) => (
                <Image key={i} src={star} alt="star" width={16} height={16} />
              ))}
            </span>
          </li>
        </ul>
      </section>

   {/* Cast Carousel */}
<section className="p-4 text-white max-w-[1200px] mt-10">
  <h2 className="text-xl font-semibold mb-4">Cast</h2>
  {cast?.length > 0 ? (
    <Swiper
      spaceBetween={15}
      slidesPerView={"auto"}
      className="!overflow-visible"
    >
      {cast.map((member: any, index: number) => (
        <SwiperSlide
          key={index}
          className="!w-[120px] bg-[#1c1c1c] rounded-lg text-center text-sm p-2"
        >
          <Image
            src={
              member.profile_path
                ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                : "/no-image.png"
            }
            alt={member.name}
            width={100}
            height={150}
            className="rounded-lg mx-auto mb-2 object-cover h-[150px] w-[100px]"
          />
          <p className="font-semibold">{member.name}</p>
          <p className="text-xs text-gray-400">{member.character}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <p className="text-sm text-gray-400">No cast information available.</p>
  )}
</section>


      {/* Reviews */}
      <section className="p-4 text-white max-w-[1200px] mt-10">
        <h2 className="text-xl font-semibold mb-4">User Reviews</h2>
        {reviews?.results?.length > 0 ? (
          <ul className="space-y-6">
            {reviews.results.map((review: any) => (
              <li
                key={review.id}
                className="bg-[#1c1c1c] p-4 rounded-lg shadow-md"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-gray-300 font-semibold">
                    {review.author}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(review.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-100">
                  {review.content.length > 500
                    ? review.content.slice(0, 500) + "..."
                    : review.content}
                </p>
                <a
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xs mt-2 inline-block hover:underline"
                >
                  Read Full Review
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400">No reviews yet.</p>
        )}
      </section>
    </section>
  );
}

export default MovieInfo;

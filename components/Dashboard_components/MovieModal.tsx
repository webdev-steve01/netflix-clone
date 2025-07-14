"use client";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import MovieButton from "./MovieButton";
import { useRouter } from "next/navigation";

export default function MovieModal({
  movieId,
  onClose,
  type,
}: {
  movieId: number;
  onClose: () => void;
  type: string;
}) {
  const [details, setDetails] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${movieId}?language=en-US`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTU2M2ZmYTM0NjJiMThmMzViNjJlYTQ2ZmM5M2FkNCIsIm5iZiI6MTcyNjIxNTcxNS4xOTQ1NjgsInN1YiI6IjY2ZDY0NjhiNmM0MjFkZGMzNDZhYzFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Za6gRawWvOOs7GtHkRdWEG9Ava6m3Iv7oE0oi7w_zQ`,
          },
        }
      );
      const data = await res.json();
      setDetails(data);
    };

    fetchMovieDetails();
  }, [movieId, type]);

  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = "hidden";

    // Re-enable scroll on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const modalContent = !details ? (
    <div className="fixed inset- text-[1.2em] md:text-[1.5em] lg:text-[1.9em] bg-black/50 flex justify-center items-center z-[9999] select-none">
      <p className="text-white">Loading...</p>
    </div>
  ) : (
    <div className="fixed text-[1.4em] inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      <div className="bg-[#0C0502] text-[white] rounded-lg overflow-hidden w-[90%] max-w-md max-h-[500px] relative">
        <button
          className="absolute top-2 right-2 text-red-500"
          onClick={onClose}
        >
          X
        </button>
        <section
          className="w-full h-[270px]"
          style={{
            background: `${
              details.backdrop_path
                ? `url(https://image.tmdb.org/t/p/w1280/${details.backdrop_path})`
                : "url(https://dummyimage.com/200x300/2c2c2c/ffffff&text=No+Image)"
            }`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <section className="flex flex-col justify-center max-w-[250px] px-2 py-4">
            <MovieButton
              text="Add to watchlist"
              isAvailable
              onClick={() => alert("added!")}
            />
            <MovieButton
              text="More Info"
              isAvailable
              onClick={() => router.push(`./${details.id}`)}
            />
            <MovieButton
              text="Official Website"
              isAvailable={details.homepage !== ""}
              onClick={() => window.open(details.homepage, "_blank")}
            />
            <MovieButton text="Watch Now" isAvailable={false} />
          </section>
        </section>
        <section className="p-4">
          <h2 className="text-xl font-bold mb-2">
            {details.title || details.name}
          </h2>
          <p className="text-[0.8em] line-clamp-4">{details.overview}</p>
        </section>
      </div>
    </div>
  );

  return typeof window !== "undefined"
    ? ReactDOM.createPortal(modalContent, document.body)
    : null;
}

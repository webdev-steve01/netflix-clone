"use client";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import MovieButton from "./MovieButton";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { options } from "@/utils/auth";
import { Results } from "@/utils/interfaces";
import { addToList } from "@/utils/AddToList";

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
  const [loading, setLoading] = useState(true);
  const [routing, setRouting] = useState(false);
  const [isInList, setIsInList] = useState(false);

  // const [data, setData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${movieId}?language=en-US`,
        options
      );
      const data = await res.json();
      console.log(data);
      setDetails(data);
      setLoading(false);
    };

    fetchMovieDetails();
  }, [movieId, type]);

  useEffect(() => {
    const checkIfInList = async () => {
      const user = auth.currentUser;
      if (!user || !details?.id) return;

      const ref = doc(db, `users/${user.uid}/list/${details.id}`);
      const snap = await getDoc(ref);
      setIsInList(snap.exists());
    };

    checkIfInList();
  }, [details]);

  const handleRoute = (details: Results) => {
    setRouting(true);
    router.push(`./info/${details.name ? "tv" : "movie"}/${details.id}`);
  };

  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = "hidden";

    // Re-enable scroll on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const modalContent =
    !details || loading ? (
      <div className="loader animate-spin w-10 h-10 border-4 border-white border-t-transparent rounded-full"></div>
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
                text={isInList ? "Already in list" : "Add to list"}
                isAvailable={!isInList}
                onClick={async () => {
                  const result = await addToList({
                    id: details.id,
                    title: details.title || details.name,
                    poster_path: details.poster_path,
                    type: type,
                    isAdding: setRouting,
                  });

                  if (result === "added") {
                    setIsInList(true);
                  }
                }}
              />

              <MovieButton
                text="More Info"
                isAvailable
                onClick={() => handleRoute(details)}
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

        {routing && (
          <div className="absolute inset-0 z-50 bg-black/50 h-screen w-screen flex items-center justify-center">
            <div className="loader">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
              <div className="bar4"></div>
              <div className="bar5"></div>
              <div className="bar6"></div>
              <div className="bar7"></div>
              <div className="bar8"></div>
              <div className="bar9"></div>
              <div className="bar10"></div>
              <div className="bar11"></div>
              <div className="bar12"></div>
            </div>
          </div>
        )}
      </div>
    );

  return typeof window !== "undefined"
    ? ReactDOM.createPortal(modalContent, document.body)
    : null;
}

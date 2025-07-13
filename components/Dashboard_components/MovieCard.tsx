// app/components/MovieCard.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MovieModal from "./MovieModal";
import { Results } from "@/utils/interfaces";

export default function MovieCard({ movie, type }: { movie: Results, type: string }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)} className="cursor-pointer  film-card">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          height={40}
          width={800}
          className="children-poster skeleton min-w-[120px] rounded-lg"
        />
      </div>

      {showModal && (
        <MovieModal type={type} movieId={movie.id} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

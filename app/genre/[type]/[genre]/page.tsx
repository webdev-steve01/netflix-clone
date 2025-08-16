// app/genre/[genre]/page.tsx
import React from "react";

export async function generateStaticParams() {
  const types = ["movie", "tv"];
  let allParams: { type: string; genre: string }[] = [];

  for (const type of types) {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch ${type} genres`);
    }

    const data = await res.json();

    const paramsForType = data.genres.map(
      (genre: { id: number; name: string }) => ({
        type,
        genre: genre.id.toString(),
      })
    );

    allParams = [...allParams, ...paramsForType];
  }

  return allParams;
}

export default function Page({
  params,
}: {
  params: { type: string; genre: string };
}) {
  return (
    <div className="text-white">
      Genre ID: {params.genre}
      type: {params.type}
    </div>
  );
}

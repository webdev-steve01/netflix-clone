// route for aggregating all genres
import { NextResponse } from "next/server";
import { options } from "@/utils/auth";
import { genres } from "@/utils/genres";

export async function GET() {
  try {
    const promises = genres.map(({ genre, type }) =>
      fetch(
        `https://api.themoviedb.org/3/discover/${type}?with_genres=${genre}&language=en-US&sort_by=popularity.desc`,
        {
          ...options,
          next: { revalidate: 86400 }, // Revalidate every 24 hours
        }
      ).then((res) => res.json())
    );

    const results = await Promise.all(promises);

    const genreData = genres.map((meta, index) => ({
      ...meta,
      results: results[index].results || [],
    }));

    return NextResponse.json(genreData);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch TMDB genres" },
      { status: 500 }
    );
  }
}

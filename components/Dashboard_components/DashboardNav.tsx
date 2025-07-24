import Film from "./Film";
import DashNav from "./DashNav";
import HomeDash from "./HomeDash";
import { options } from "@/utils/auth";

async function DashboardNav() {
  let filtered: any[] = [];
  let allGenres: any[] = [];

  try {
    const trending = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?language=en-US",
      options
    );
    const data = await trending.json();
    // console.log("TMDB response:", data);

    filtered = data.results.filter(
      (item: any) => item.media_type === "movie" || item.media_type === "tv"
    );

    const genreFetch = await fetch("http://localhost:3000/api/movies", {
      next: { revalidate: 3600 },
    });
    allGenres = await genreFetch.json();
  } catch (error) {
    console.error("❌ Failed to fetch dashboard content:", error);
  }

  return (
    <>
      <DashNav />
      <section className="header h-[80vh]">
        <div className="backdrop overflow-auto">
          <div className=" text-white test flex flex-shrink-0">
            <HomeDash array={filtered} />
          </div>
        </div>
      </section>

      <section className="px-4 bg-[#000000]">
        {allGenres.map((genre, idx) => (
          <Film
            key={idx}
            genre={genre.genre}
            genre_title={genre.genre_title}
            type={genre.type}
            items={genre.results}
            adult={genre.adult}
          />
        ))}
      </section>
    </>
  );
}

export default DashboardNav;

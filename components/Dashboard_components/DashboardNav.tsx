import Film from "./Film";
import DashNav from "./DashNav";
import HomeDash from "./HomeDash";
import { options } from "@/utils/auth";

async function DashboardNav() {
  let data = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?language=en-US",
    options
  );
  let posts = await data.json();
  const filtered = posts.results.filter(
    (item: any) => item.media_type === "movie" || item.media_type === "tv"
  );

  // console.log(filtered);

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

      <section className="px-4">
        {/* <TvSeries /> */}
        <Film genre={28} genre_title="No-Brakes Action" type="movie" />
        <Film genre={16} genre_title="Something for the Kids" type="tv" />
        <Film genre={35} genre_title="Comedy One-Watches" type="movie" />
        <Film genre={12} genre_title="Adventure Escapes" type="movie" />
        <Film
          genre={80}
          genre_title="Criminal Minds & Street Codes"
          type="tv"
        />
        <Film genre={99} genre_title="Docs That Hit Hard" type="movie" />
        <Film genre={18} genre_title="Real Life Drama & Feels" type="movie" />
        <Film genre={10751} genre_title="Family Binges" type="tv" />
        <Film genre={14} genre_title="Magic, Myths & Madness" type="movie" />
        <Film genre={36} genre_title="Blast from the Past" type="movie" />
        <Film
          genre={27}
          genre_title="Nightmare Fuel & Screams"
          type="movie"
          adult={true}
        />
        <Film
          genre={10402}
          genre_title="Feel-Good Musical Moments"
          type="movie"
        />
        <Film genre={9648} genre_title="Mysteries Worth Solving" type="tv" />
        <Film genre={10749} genre_title="Love, Lust & Laughs" type="movie" />
        <Film genre={878} genre_title="Sci-Fi Brainmelters" type="movie" />
        <Film genre={10770} genre_title="Weekend TV Movie Feels" type="movie" />
        <Film genre={53} genre_title="Edge-of-Seat Thrillers" type="movie" />
        <Film genre={10752} genre_title="Gritty & War-Centered" type="movie" />
        <Film genre={37} genre_title="Old West & Gunfights" type="movie" />
        <Film genre={10759} genre_title="TV That Punches" type="tv" />
        <Film
          genre={10762}
          genre_title="Cartoons for the Little Ones"
          type="tv"
        />
        <Film genre={10763} genre_title="News, Now & Next" type="tv" />
        <Film genre={10764} genre_title="Reality & Wild Lives" type="tv" />
        <Film
          genre={10765}
          genre_title="Weird Worlds & Space Stuff"
          type="tv"
        />
        <Film genre={10766} genre_title="Soap, Secrets & Sass" type="tv" />
        <Film genre={10767} genre_title="Talk Shows & Hot Takes" type="tv" />
        <Film
          genre={10768}
          genre_title="Politics, Power & Propaganda"
          type="tv"
        />
        <Film
          genre={10749}
          genre_title="Spicy Romance & Steamy Vibes"
          type="movie"
          adult={true}
        />
        <Film
          genre={9648}
          genre_title="Adult Thrillers & Noir"
          type="movie"
          adult={true}
        />
        <Film
          genre={80}
          genre_title="Gritty Crime & Adult Drama"
          type="movie"
          adult={true}
        />
      </section>
    </>
  );
}

export default DashboardNav;

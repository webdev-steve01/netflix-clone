import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Film from "./Film";
import DashNav from "./DashNav";
const token = process.env.TMDB_BEARER_TOKEN;

async function DashboardNav() {
  type results = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: 137;
  };
  // setArray([])
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  let data = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=3&sort_by=popularity.desc",
    options
  );
  let posts = await data.json();
  const array = await posts.results;
  const test = array.map((test: results, i: number) => {
    return (
      <div key={i}>
        <section
          className="w-[100vw] h-[80vh]  "
          style={{
            background: `url(https://image.tmdb.org/t/p/w1280/${test.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full netflix-overlay border border-black px-4 py-2 flex items-end">
            <div className=" py-2 m-0">
              <Image
                src={`https://image.tmdb.org/t/p/original/${test.poster_path}`}
                alt={test.title}
                width={50}
                height={50}
                className="rounded poster  w-full m-0"
              />
              <article className="article max-w-[500px] max-h-[200px] m-0 overflow-hidden py-4 gap-2">
                <h1 className="text-[20px]">{test.title}</h1>
                <p className="article line-clamp-5">{test.overview}</p>
              </article>
            </div>
          </div>
        </section>
      </div>
    );
  });

  return (
    <>
      <DashNav />
      <section className="header h-[80vh] skeleton">
        <div
          // modules={[Autoplay, EffectFade, Mousewheel]}
          // autoplay={{ delay: 5000 }}
          // loop
          // effect="fade"
          // speed={300}
          // preventInteractionOnTransition
          className="backdrop overflow-auto"
        >
          <div className="border border-solid border-red text-white test flex flex-shrink-0">
            {test}
          </div>
        </div>
      </section>

      <section className="px-4">
        {/* <TvSeries /> */}
        <Film genre={28} genre_title="No-Brakes Action" type="movie" />
        <Film genre={12} genre_title="Adventure Escapes" type="movie" />
        <Film genre={16} genre_title="Something for the Kids" type="tv" />
        <Film genre={35} genre_title="Comedy One-Watches" type="movie" />
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
        <Film genre={10759} genre_title="TV That Punches (Action)" type="tv" />
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

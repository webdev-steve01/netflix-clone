import Image from "next/image";
// import { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import TvSeries from "./TvSeries";
import Action from "./Action";
import SciFi from "./SciFi";

async function DashboardNav() {
  // const [array, setArray] = useState([]);
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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTU2M2ZmYTM0NjJiMThmMzViNjJlYTQ2ZmM5M2FkNCIsIm5iZiI6MTcyNjIxNTcxNS4xOTQ1NjgsInN1YiI6IjY2ZDY0NjhiNmM0MjFkZGMzNDZhYzFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Za6gRawWvOOs7GtHkRdWEG9Ava6m3Iv7oE0oi7w_zQ`,
    },
  };
  // useEffect(() => {
  //   const number: number = Math.floor(Math.random() * 5);
  //   const fetchData = async () => {
  //     await fetch(
  //       `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${number}&sort_by=popularity.desc`,
  //       options
  //     )
  //       .then((res) => res.json())
  //       .then((res) => setArray(res.results));
  //   };
  //   fetchData();
  // }, []);
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
          className="w-[100vw] h-[80vh]  bg-purple-500"
          style={{
            background: `url(https://image.tmdb.org/t/p/w1280/${test.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full netflix-overlay border border-black flex items-end">
            <div className=" py-6 px-4 m-0">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${test.poster_path}`}
                alt={test.title}
                width={50}
                height={50}
                className="rounded poster  w-full m-0"
              />
              <article className="article max-w-[500px] max-h-[200px] m-0 overflow-hidden py-4 gap-2">
                <h1 className="text-[20px]">{test.title}</h1>
                <p className="article">{test.overview}</p>
              </article>
            </div>
          </div>
        </section>
      </div>
    );
  });

  return (
    <>
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
      <section className="">
        <section className="row-one text-white">
          <section className="rows px-6">
            <TvSeries />
          </section>
        </section>
      </section>
      <section className="">
        <section className="row-one text-white">
          <section className="rows px-6">
            <Action />
          </section>
        </section>
      </section>
      <section className="">
        <section className="row-one text-white">
          <section className="rows px-6">
            <SciFi />
          </section>
        </section>
      </section>
    </>
  );
}

export default DashboardNav;

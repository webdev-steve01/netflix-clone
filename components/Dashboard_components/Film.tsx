import { Results } from "@/utils/interfaces";
import FilmCarousel from "./FilmCarousel";
type Prop = {
  genre: number;
  genre_title: string;
  type: string;
  adult?: boolean;
  items: Results[];
};

export default async function Film({
  genre,
  genre_title,
  type,
  adult = false,
  items: movies = [],
}: Prop) {
  return (
    <section className="text-white py-2 no-select">
      <p className="py-2 text-[1.2em] md:text-[1.5em]  font-semibold">
        {genre_title}
      </p>
      <FilmCarousel movies={movies} type={type} uid={genre} />
    </section>
  );
}

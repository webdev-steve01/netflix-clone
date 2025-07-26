import dynamic from "next/dynamic";
// import { Movie } from "@/types"; // or define locally
type Movie = {
  id: number;
  title: string;
  poster_path?: string;
  type: string;
};

const ClientList = dynamic(() => import("./ClientList"), { ssr: false });

type ListProps = {
  movies: Movie[];
};

export default function List({ movies }: ListProps) {
  return (
    <section className="text-white">
      <ClientList movies={movies} />
    </section>
  );
}

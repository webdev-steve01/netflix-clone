"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import search from "@/public/search-svgrepo-com.svg";
import { useDebounce } from "@/hooks/UseDebounce";
import { Results } from "@/utils/interfaces";
import Link from "next/link";
// import { p } from "framer-motion/client"

function SearchBar() {
  const [searchItem, setSearchItem] = useState("");
  const [results, setResults] = useState<Results[]>();
  const debounce = useDebounce(searchItem, 300);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchFunction = async () => {
      if (!debounce) return;
      if (!debounce.trim()) {
        setResults([]);
        return;
      }

      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?query=${debounce}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTU2M2ZmYTM0NjJiMThmMzViNjJlYTQ2ZmM5M2FkNCIsIm5iZiI6MTcyNjIxNTcxNS4xOTQ1NjgsInN1YiI6IjY2ZDY0NjhiNmM0MjFkZGMzNDZhYzFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Za6gRawWvOOs7GtHkRdWEG9Ava6m3Iv7oE0oi7w_zQ`,
            },
            cache: "no-store", //
            signal,
          }
        );
        const data = await res.json();
        setResults(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("search error:", error);
      }
    };

    fetchFunction();

    // return controller.abort();/
  }, [debounce]);
  return (
    <div className="flex  items-center border gap-0 p-0 w-full max-w-[600px] rounded-lg px-2 mx-4 relative">
      <input
        type="text"
        onChange={(e) => setSearchItem(e.target.value)}
        value={searchItem}
        placeholder="search..."
        name=""
        id=""
        className="p-0 w-full bg-transparent focus-within:outline-none"
      />
      <div>
        <Image src={search} alt="search" width={50} height={50} />
      </div>

      {searchItem && (
        <div className="no-scroll max-w-[576px] absolute flex flex-col gap-2 top-full mt-2 w-full bg-[#0C0502] p-2 rounded-xl z-50 max-h-[500px] overflow-y-auto">
          {results && results.length > 0 ? results
            ?.filter(
              (value) => value.poster_path && (value.title || value.name)
            ) // 👈 filter valid entries
            .map((value: Results, index: number) => (
              <Link key={index} href={`./${value.id}`}>
                <div className="flex">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`}
                    width={100}
                    height={100}
                    alt={value.name || value.title}
                    className="rounded-lg"
                  />
                  <p>{value.title || value.name}</p>
                </div>
              </Link>
            )): <p className="text-center text-[1.5em]">Title Not Found</p>}
        </div>
      )}
    </div>
  );
}

export default SearchBar;

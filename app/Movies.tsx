"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Moviedata {
  albumId: string;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

let array: Array<Moviedata> = [];

function Movies() {
  const [movies, setMovies] = useState([]);
  // let arrays: any;
  // const getData = fetch("https://freetestapi.com/api/v1/movies", {
  //   method: "GET",
  // });
  // const res = (await getData).json()
  // const holder;
  useEffect(() => {
    fetch("https://via.placeholder.com/600/77179", {
      method: "GET"
      // headers: {
      //   "x-rapidapi-key": "f4f3078597msh7d473156cbe39d8p17bf60jsnf468aa2a5965",
      //   "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
      // },
    })
      .then((res) => res.json())
      .then((movie) => setMovies(movie))
      .catch((error) => console.error("error fetchig data", error));
  }, []);




  const groupOne = Array(movies).slice(0, 5)
  const groupTwo = Array(movies).slice(6, 11)
  console.log(groupOne[0]);
  
  const imageOne = groupOne.map((i) => (
    <Image
      className="item"
      key=""
      src=""
      alt="test"
      width={90}
      height={89}
      loading="lazy"
    />
  ));
  const imageTwo = groupTwo.map((i) => (
    <Image
      className="item"
      key= ""
      src=""
      alt="test"
      width={90}
      height={89}
      loading="lazy"
    />
  ));

  return (
    <>
      <section className="image-list skeleton py-4 my-2">
        <section className="media-group">
          {/* {imageOne} */}
        </section>
        <section className="media-group">
          {imageTwo}
        </section>
      </section>
    </>
  );
}

export default Movies;

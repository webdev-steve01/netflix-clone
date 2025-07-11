// "use client";
import { useState } from "react";
import { use } from "react";
import Dropdown from "../utilities/Dropdown";
import Movies from "../utilities/Movies";

function SectionTwo() {
    // const [film, setFilm] = useState("movies");
  return (
    <>
      <section className="second-section bg-black text-white p-5">

        <section className="filter">
          <h1 className="title">Trending Now</h1>
            <Movies />
        </section>
      </section>
    </>
  );
}

export default SectionTwo;

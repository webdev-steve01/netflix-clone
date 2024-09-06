import React from "react";
import Dropdown from "./Dropdown";
import Movies from "./Movies";

function SectionTwo() {
  return (
    <>
      <section className="second-section bg-black text-white p-5">

        <section className="filter">
          <h1 className="title">Trending Now</h1>
          <section className="dropdown-flex flex flex-col gap-4">
            <Dropdown optionOne="Nigeria" optionTwo="Global" />
            <Dropdown optionOne="Movies" optionTwo="TV shows" />
          </section>
            <Movies />
        </section>
      </section>
    </>
  );
}

export default SectionTwo;

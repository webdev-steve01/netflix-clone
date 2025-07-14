
import React, {useEffect} from "react";
import Image from "next/image";
import next from "../public/right-arrow-svgrepo-com.svg";
import ReadyToWatch from "../utilities/ReadyToWatch";
export default function FirstSection() {

  return (
    <>
      <section className="hero-text text-white flex flex-col">
        <h1 className="font-extrabold text-[1.7em] md:text-[2.3em] lg:text-[3em]">Unlimited movies, Tv shows and more</h1>
        <p className="hero-writing">starts at #2,200</p>
        <ReadyToWatch
        />
      </section>
    </>
  );
}

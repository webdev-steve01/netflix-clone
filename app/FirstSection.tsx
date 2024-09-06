
import React, {useEffect} from "react";
import Image from "next/image";
import next from "./assets/right-arrow-svgrepo-com.svg";
import ReadyToWatch from "./ReadyToWatch";
export default function FirstSection() {
  const handleClick = () => {
    const text = document.getElementById("email");
    // text.activated
  };
  return (
    <>
      <section className="hero-text text-white flex flex-col">
        <h1 className="hero-header">Unlimited movies, Tv shows and more</h1>
        <p className="hero-writing">starts at #2,200</p>
        <ReadyToWatch
        />
      </section>
    </>
  );
}

"use client";
import React from "react";
import logo from "@/public/movie.svg";
import Image from "next/image";
import SignUpHero from "./SignUpHero";
import SignInFooter from "./SignInFooter";

function page() {
  return (
    <section className="h-screen bg-black">
      <section className="signup-hero">
        <section className="signup px-5">
          <div className="">
            <section className="p-2">
              <Image src={logo} width={50} alt="" />
            </section>
            <section className="h-[90vh] grid items-center">
              <SignUpHero />
            </section>
          </div>
        </section>
      </section>
      <SignInFooter />
    </section>
  );
}

export default page;

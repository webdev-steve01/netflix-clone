"use client";
import React from "react";

import Image from "next/image";
import SignUpHero from "./SignUpHero";
import SignInFooter from "./SignInFooter";
import Footer from "@/components/sections/Footer";

function Main() {
  return (
    <section className="h-full ">
      <section className="signup-hero">
        <section className="signup px-5">
          <div className="">
            <section className="px-2"></section>
            <SignUpHero />
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
}

export default Main;

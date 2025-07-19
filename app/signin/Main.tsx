"use client";
import React from "react";
import logo from "@/public/netflix-2-logo-svgrepo-com.svg";
import Image from "next/image";
import SignUpHero from "./SignUpHero";
import SignInFooter from "./SignInFooter";
import Footer from "@/components/sections/Footer";

function Main() {
  return (
    <section className="h-full bg-black">
      <section className="signup-hero">
        <section className="signup px-5">
          <div className="">
            <section className="px-2">
              <Image src={logo} width={100} alt="" />
            </section>
            <SignUpHero />
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
}

export default Main;

"use client";
import React from "react";
import logo from "@/public/netflix-2-logo-svgrepo-com.svg";
import Image from "next/image";
import SignUpHero from "./SignUpHero";
import SignInFooter from "./SignInFooter";

function page() {
  return (
      <section className="h-full">
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
        <SignInFooter />
      </section>
  );
}

export default page;

"use client";
import React, { useState } from "react";
import hero from "@/public/hero.jpg";
import InputForm from "../InputForm";
import Button from "../Button";
import Link from "next/link";
import Form from "./Form";

const SignUpHero = () => {
  const [code, setCode] = useState(false);
  const [prevUser, setPrevUser] = useState(true);
  const handleClick = () => {
    if (code) {
      setCode(false);
    } else {
      setCode(true);
    }
  };
  const handleUser = () => {
    if (prevUser) {
      setPrevUser(false);
    } else {
      setPrevUser(true);
    }
  };
  return (
    <div className="grid gap-5 px-2 max-w-[500px] mx-auto bg-[hsla(0,0%,0%,0.8)] py-4 rounded-lg">
      <h1 className="text-white font-bold text-2xl">Sign In</h1>
      <Form />
      <section className="link">
        <p className="text-[#b3b3b3]">
          New to netflix?{" "}
          <Link href="/" className="text-white font-bold">
            Sign up now
          </Link>
        </p>
      </section>
    </div>
  );
};

export default SignUpHero;

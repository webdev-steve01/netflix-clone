"use client";
import React, { useState } from "react";
import Form from "./Form";
import SignUpForm from "./SignUpForm";

const SignUpHero = () => {
  const [prevUser, setPrevUser] = useState(true);
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
      {prevUser? <Form />: <SignUpForm />}
      <section className="link">
        <p className="text-[#b3b3b3]">
          {prevUser ? "New to netflix?": "Already have an account?"}
          <span onClick={handleUser} className="text-white font-bold cursor-pointer px-1">
            {prevUser? "sign up now":"Sign in"}
          </span>
        </p>
      </section>
    </div>
  );
};

export default SignUpHero;

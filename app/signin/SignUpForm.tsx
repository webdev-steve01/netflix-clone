"use client";
import { useState } from "react";
import React from "react";
import InputForm from "../InputForm";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { redirect } from "next/navigation";

function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      router.push('../')
    }).catch((err) => console.log(err))
  }
  return (
    <>
      <form action="" className="flex flex-col gap-1">
        <input
          className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-white rounded-md m-0"
          type="text"
          name="first name"
          id="First name"
          placeholder="First name"
          // onChange={}
        />
        <input
          className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-white rounded-md m-0"
          type="text"
          id="signInLastName"
          name="last name"
          placeholder="input last name"
        />
        <input
          className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-white rounded-md m-0"
          type="email"
          id="signInEmail"
          name="email"
          placeholder="input email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-white rounded-md m-0"
          type="password"
          id="signInPassword"
          name="password"
          placeholder="input password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="button rounded-[5px] py-1"
          type="button"
          onClick={signUp}
        >
          <p className=" m-auto">sign Up</p>
        </button>
        <p className="text-white text-center">forgot password?</p>
        <div className="flex">
          <input
            className="accent-[#b3b3b3] scale-x-150 scale-y-150"
            type="checkbox"
            name="Remember me"
            id="remember me"
          />
          <label htmlFor="remember me" className="text-white">
            Remember me
          </label>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;

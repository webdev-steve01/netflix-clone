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
  const [error, setError] = useState('')
  const router = useRouter();
  const signUp = (e: any) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      router.push('../')
    }).catch((err) => {
      console.log(err);
      const error: any = document.getElementById("error")
      if (err == "FirebaseError: Firebase: Error (auth/missing-password).") {
        setError("Password required")
      }
      if (
        err == "FirebaseError: Firebase: Error (auth/email-already-in-use)."
      ) {
        setError("email already registered")
      }
      if (err == "FirebaseError: Firebase: Error (auth/invalid-email).") {
        setError("invalid email");
      }
      if (err == "FirebaseError: Firebase: Password should be at least 6") {
        error.innerText = "password must be at least 6 characters long";
      }
    })
  }
  return (
    <>
      <form action="" className="flex flex-col gap-1">
        <p id="error" className="my-[-10px] text-red-700">
          {error}
        </p>
        <input
          className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-white rounded-md m-0"
          type="text"
          name="first name"
          id="First name"
          placeholder="First name"
          required
          // onChange={}
        />
        <input
          className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-white rounded-md m-0"
          type="text"
          id="signInLastName"
          name="last name"
          required
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
          placeholder="input password (must be over 6 characters long)"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="button rounded-[5px] py-1"
          type="submit"
          onClick={(e) => signUp(e)}
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

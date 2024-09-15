"use client";
import { useState } from "react";
import React from 'react';
import InputForm from "../InputForm";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";


function Form() {
  const [code, setCode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
    const handleClick = () => {
      if (code) {
        setCode(false);
      } else {
        setCode(true);
      }
  };
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      router.push('../dashboard')
    }).catch(err => {
      console.log(err);
      if (err == "FirebaseError: Firebase: Error (auth/invalid-credential).") {
        setError("invalid email/password");
      }
      
    })
  }
  return (
    <>
      <form action="" className="flex flex-col gap-1">
        <p className="text-red-700 my-[-10px]">
          {error}
        </p>
        <input
          className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-white rounded-md m-0"
          type="text"
          id="signInEmail"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder={
            code
              ? "input email to get code(currently unavailable)"
              : "input email"
          }
        />
        {code ? (
          <></>
        ) : (
          <input
            className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-white rounded-md m-0"
            type="password"
            id="signInPassword"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="input password"
          />
        )}
        <button
          onClick={signIn}
          disabled={!email || !password}
          className="button rounded-[5px] py-1"
          type="button"
        >
          <p className=" m-auto">{code ? "sign in with code" : "sign in"}</p>
        </button>
        <p className="text-[#b8b8b9] text-center">OR</p>
        <button
          type="button"
          className="bg-[hsla(340,8%,23%,0.8)] py-[5px] rounded-[5px] text-white"
          onClick={handleClick}
        >
          {code ? "use password" : "use code"}
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

export default Form;

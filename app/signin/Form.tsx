"use client";
import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/utils/auth";

function Form() {
  // const [code, setCode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
      localStorage.clear();
    }
  }, []);

  return (
    <>
      <form action="" className="flex flex-col gap-1">
        <p className="text-red-700 my-[-10px]">{error}</p>
        <input
          className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-none rounded-md m-0 text-white"
          type="text"
          id="signInEmail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="input email"
        />

        <input
          className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-none rounded-md m-0 text-white"
          type="password"
          id="signInPassword"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="input password"
        />

        <button
          onClick={() => signIn(email, password, setLoading, setError, router)}
          disabled={!email || !password}
          className="button rounded-[5px] py-1"
          type="button"
        >
          <p className=" m-auto">{loading ? "Loading..." : "Sign in"}</p>
        </button>
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

      {loading && (
        <div className="absolute inset-0 z-50 bg-black/50 h-screen w-screen flex items-center justify-center">
          <div className="loader">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            <div className="bar4"></div>
            <div className="bar5"></div>
            <div className="bar6"></div>
            <div className="bar7"></div>
            <div className="bar8"></div>
            <div className="bar9"></div>
            <div className="bar10"></div>
            <div className="bar11"></div>
            <div className="bar12"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;

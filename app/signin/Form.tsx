"use client";
import { useState, useEffect } from "react";
import React from "react";
import InputForm from "../../components/utilities/InputForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/navigation";
import Footer from "@/components/sections/Footer";

function Form() {
  const [code, setCode] = useState(false);
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

  const signIn = () => {
    if (email === null || password === null) {
      alert("email or password can not be empty");
      return;
    }

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("../dashboard");
      })
      .catch((err) => {
        console.log(err);
        const errorCode = err.code;

        switch (errorCode) {
          case "auth/invalid-email":
            setError("Invalid email format.");
            break;
          case "auth/user-disabled":
            setError("This user account has been disabled.");
            break;
          case "auth/user-not-found":
            setError("No user found with this email.");
            break;
          case "auth/wrong-password":
            setError("Incorrect password.");
            break;
          case "auth/invalid-credential":
            setError("Invalid email or password.");
            break;
          case "auth/too-many-requests":
            setError("Too many failed attempts. Please try again later.");
            break;
          case "auth/network-request-failed":
            setError("Network error. Check your internet connection.");
            break;
          default:
            setError("An unexpected error occurred. Please try again.");
        }

        setLoading(false);
      });
  };

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
            className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-none rounded-md m-0 text-white"
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
          <p className=" m-auto">{loading ? "Loading..." : "Sign in"}</p>
        </button>
        {/* <p className="text-white text-center">forgot password?</p> */}
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

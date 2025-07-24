"use client";
import { useState } from "react";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import {
  addDoc,
  collection,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
type props = {
  setPrevUser: Function;
};
function SignUpForm(props: props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    try {
      const user = getAuth().currentUser;
      if (!user) throw new Error("User not authenticated");

      await setDoc(
        doc(db, "users", user.uid),
        {
          name: username,
          email,
          createdAt: serverTimestamp(),
        },
        { merge: true }
      );

      console.log("✅ User document created or merged");
    } catch (error) {
      console.error("🔥 Error setting user document:", error);
      setLoading(false);
    }
  };

  const signUp = async (e: any) => {
    e.preventDefault();
    if (!email || !username || !password) {
      alert("Fill all fields please");
      return;
    }
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        {
          props.setPrevUser(true);
          handleAdd();
        }
      })
      .catch((err) => {
        setLoading(false);
        switch (err.code) {
          case "auth/missing-password":
            setError("Password required");
            setPasswordError(true);
            setEmailError(false);
            break;

          case "auth/email-already-in-use":
            setError("Email already registered");
            setEmailError(true);
            setPasswordError(false);
            break;

          case "auth/invalid-email":
            setError("Invalid email");
            setPasswordError(false);
            setEmailError(true);
            break;

          case "auth/weak-password":
            setError("Password should be at least 6 characters");
            setPasswordError(true);
            setEmailError(false);
            break;

          default:
            setError("An unknown error occurred");
            console.error(err); // helpful for debugging
            break;
        }
      });
  };
  return (
    <>
      <form action="" className="flex flex-col gap-1">
        <p id="error" className="my-[-10px] text-red-700">
          {error}
        </p>
        <input
          className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-none rounded-md m-0 text-white"
          type="text"
          id="username"
          name="username"
          placeholder="Stephen Paul"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={`bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-none rounded-md m-0 text-white ${
            emailError ? "border-red-600 border" : ""
          }`}
          type="email"
          id="signInEmail"
          name="email"
          placeholder="sylv****@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={`bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-none rounded-md m-0 text-white ${
            passwordError ? "border border-red-600" : "border-none"
          }`}
          type="password"
          id="signInPassword"
          name="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="button rounded-[5px] py-1"
          type="submit"
          onClick={(e) => signUp(e)}
        >
          <p className=" m-auto">{loading ? "Loading..." : "Sign up"}</p>
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

export default SignUpForm;

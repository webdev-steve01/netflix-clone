"use client";
import { useState } from "react";
import React from "react";
import InputForm from "../../components/utilities/InputForm";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import { redirect } from "next/navigation";
type props = {
  setPrevUser: Function;
};
function SignUpForm(props: props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleAdd = async () => {
    try {
      await addDoc(collection(db, "users"), {
        name: username,
        email,
        createdAt: new Date(),
      });
      console.log("document added successfully")
    } catch (error) {
      console.error("error adding document",error);
    }
  };

  const signUp = async (e: any) => {
    e.preventDefault();
    if(!email || !username || !password){
      alert("Fill all fields please")
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        {
          props.setPrevUser(true);
          handleAdd()
        }
      })
      .catch((err) => {
        console.log(err);
        const error: any = document.getElementById("error");
        if (err == "FirebaseError: Firebase: Error (auth/missing-password).") {
          setError("Password required");
        }
        if (
          err == "FirebaseError: Firebase: Error (auth/email-already-in-use)."
        ) {
          setError("email already registered");
        }
        if (err == "FirebaseError: Firebase: Error (auth/invalid-email).") {
          setError("invalid email");
        }
        if (err == "FirebaseError: Firebase: Password should be at least 6") {
          error.innerText = "password must be at least 6 characters long";
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
          className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-white rounded-md m-0 text-white"
          type="text"
          id="username"
          name="username"
          placeholder="Stephen Paul"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-white rounded-md m-0 text-white"
          type="email"
          id="signInEmail"
          name="email"
          placeholder="sylv****@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-white rounded-md m-0 text-white"
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

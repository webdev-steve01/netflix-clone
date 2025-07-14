"use client";
import React, { useState } from "react";
import Image from "next/image";
import next from "@/public/right-arrow-svgrepo-com.svg";
import { useRouter } from "next/navigation";
function ReadyToWatch() {
  const [email, setEmail] = useState("");
  const router = useRouter()
  const handleRoute = (e: React.FormEvent, text: string) => {
    e.preventDefault()
    if (!text) {
      alert("input email");
      return;
    }
    sessionStorage.setItem("email", text);
    router.push("./signin")
  };
  return (
    <>
      <p className="soft-text">
        Ready to watch? enter your email to create or restart your membership
      </p>
      <form action="" onSubmit={e => handleRoute(e, email)} className="form form-flex flex flex-col">
        <section className="input flex flex-col gap-0">
          <input
            className="field bg-transparent border-red border-solid border m-0 py-2"
            title="email"
            type="email"
            name=""
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="input email"
          />
        </section>
        <section className="button-section">
          <button type="submit" className="flex justify- bg-[#e50914] hover:bg-[#e60a15d9] px-5 py-3 text-[18px] items-center rounded-md">
            <p>Get started{" "}</p>
            <span className="next w-5">
              <Image className="img"  src={next} alt="" priority />
            </span>
          </button>
        </section>
      </form>
    </>
  );
}

export default ReadyToWatch;

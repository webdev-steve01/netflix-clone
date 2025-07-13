"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; 
import { useRouter } from 'next/navigation';
import next from '@/public/right-arrow-svgrepo-com.svg'


function LastSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() =>{
    if(email){
      sessionStorage.setItem("email", email)
    }
  })

  const handleClick = () =>{
    setLoading(true)
    router.push("./signin")
  }
  return (
    <section className="last-section bg-black text-white px-4 py-8">
      <p className="">
        Ready to watch? enter your email to create or restart your membership
      </p>
      <form action="" className="form flex flex-col py-4">
        
          <input
            className="p-2 focus-within:outline-none bg-transparent border-red border-solid border m-0 max-w-[600px] rounded-lg "
            title="email"
            type="email"
            name=""
            id="email"
            placeholder='sylv***@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
          />
        <section className="">
          <button type="button" onClick={handleClick} className="red-button flex items-center px-3 py-3 rounded-lg">
            {loading ? "Loading..." : "Get Started"}
            <span className="next w-5 h-full flex items-center">
              <Image className="img" src={next} alt="" priority />
            </span>
          </button>
        </section>
      </form>
    </section>
  );
}

export default LastSection;

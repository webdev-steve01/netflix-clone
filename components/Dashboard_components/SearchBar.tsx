"use client"
import Image from "next/image"
import { useState } from "react"
import search from "@/public/search-svgrepo-com.svg"

function SearchBar() {
  return (
    <div className="flex  items-center border gap-0 p-0 w-full max-w-[600px] rounded-lg px-2">
        <input type="text" placeholder='search...' name="" id="" className="p-0 w-full bg-transparent focus-within:outline-none" />
        <div>
            <Image src={search} alt="search"  width={50} height={50}/>
        </div>
    </div>
  )
}

export default SearchBar

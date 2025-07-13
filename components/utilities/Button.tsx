"use client";
import React, { useState } from "react";
import Link from "next/link";
// import TransitionLink from './components/TransitionLink';
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  text: string;
}

function Button(props: Props) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div onClick={() => setIsClicked(true)}>
          <Link
            href="/signin"
            className="button px-2 flex justify-center items-center py-1 rounded-lg min-w-[100px]"
          >
            {isClicked ? <p>loading...</p> : props.text}
          </Link>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Button;

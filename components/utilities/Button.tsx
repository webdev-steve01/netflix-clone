"use client";
import React, {useState} from 'react';
import Link from 'next/link';
// import TransitionLink from './components/TransitionLink';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  text: string
}

function Button(props: Props) {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <>
      <AnimatePresence mode='wait'>
        <motion.div onClick={() => setIsClicked(true)}>
          <Link href="/signin" className='button px-2 flex justify-center items-center py-1 rounded-lg min-w-[100px]'>{isClicked ?
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
</div> : props.text}</Link>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Button;


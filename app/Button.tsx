"use client";
import React from 'react';
import Link from 'next/link';
// import TransitionLink from './components/TransitionLink';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  text: string
}

function Button(props: Props) {
  return (
    <>
      <AnimatePresence mode='wait'>
        <motion.div>
          <Link href="/signin" className='button px-2 py-1 rounded-lg'>{props.text}</Link>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Button;


import React from 'react';
import Link from 'next/link';

interface Props {
  text: string
}

function Button(props: Props) {
  return (
    <>
      <Link href="/signin" className='button px-2 py-1 rounded-lg'>{props.text}</Link>
    </>
  );
}

export default Button;


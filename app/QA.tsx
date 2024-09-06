import React, { useState } from "react";
import cancel from './assets/cancel-close-cross-svgrepo-com.svg'
import Image from "next/image";
import open from './assets/plus-svgrepo-com.svg'
// import { close } from "inspector/promises";

type props = {
  question: string;
  answer: string;
};

function QA(props: props) {
  const [showQA, setShow] = useState(false)
  return (
    <div>
      <button className="closed flex py-3 justify-between w-full" onClick={() => setShow(!showQA)}>
        <span>{props.question}</span>
        <span>
          <Image width={20} height={20} alt="" src={showQA ? cancel : open}/>
        </span>
      </button>
      {showQA ? <p className="closed slide py-3">{props.answer}</p>: <p></p>}
    </div>
  );
}

export default QA;

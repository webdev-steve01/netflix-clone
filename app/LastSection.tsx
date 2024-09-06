import React from 'react';
import ReadyToWatch from './ReadyToWatch';
import Image from 'next/image'; 
import next from './assets/right-arrow-svgrepo-com.svg'


function LastSection() {
  return (
    <section className="last-section bg-black text-white px-4 py-8">
      <p className="">
        Ready to watch? enter your email to create or restart your membership
      </p>
      <form action="" className="form flex flex-col py-4">
        <section className="input non flex flex-col gap-0">
          <span className="label m-0 p-0">email address</span>
          <input
            className="field bg-transparent border-red border-solid border m-0"
            title="email"
            type="email"
            name=""
            id="email"
          />
        </section>
        <section className="">
          <button type="button" className="red-button flex items-center px-3 py-3 rounded-lg">
            Get started{" "}
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

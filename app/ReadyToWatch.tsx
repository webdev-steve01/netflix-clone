import React from "react";
import Image from "next/image";
import next from "../public/right-arrow-svgrepo-com.svg";

function ReadyToWatch() {
  return (
    <>
      <p className="soft-text">
        Ready to watch? enter your email to create or restart your membership
      </p>
      <form action="" className="form form-flex flex flex-col">
        <section className="input flex flex-col gap-0">
          <input
            className="field bg-transparent border-red border-solid border m-0 py-2"
            title="email"
            type="email"
            name=""
            id="email"
            placeholder="input email"
          />
        </section>
        <section className="button-section">
          <button type="button" className="button px-5 py-3 rounded-md">
            Get started{" "}
            <span className="next w-5 h-5">
              <Image className="img" src={next} alt="" priority />
            </span>
          </button>
        </section>
      </form>
    </>
  );
}

export default ReadyToWatch;

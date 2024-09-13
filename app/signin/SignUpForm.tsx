import { useState } from "react";
import React from "react";
import InputForm from "../InputForm";

function Form() {
  return (
    <>
      <form action="" className="flex flex-col gap-1">
        <InputForm
          type="text"
          label="signInEmail"
          name="email"
          placeholder="input email"
        />
          <InputForm
            type="password"
            label="signInPassword"
            name="password"
            placeholder="input password"
          />
        <button className="button rounded-[5px] py-1" type="button">
          <p className=" m-auto">"sign in"</p>
        </button>

        <p className="text-white text-center">forgot password?</p>
        <div className="flex">
          <input
            className="accent-[#b3b3b3] scale-x-150 scale-y-150"
            type="checkbox"
            name="Remember me"
            id="remember me"
          />
          <label htmlFor="remember me" className="text-white">
            Remember me
          </label>
        </div>
      </form>
    </>
  );
}

export default Form;

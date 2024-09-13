import { useState } from "react";
import React from 'react';
import InputForm from "../InputForm";

function Form() {
    const [code, setCode] = useState(false);
    const [prevUser, setPrevUser] = useState(true);
    const handleClick = () => {
      if (code) {
        setCode(false);
      } else {
        setCode(true);
      }
    };
  return (
    <>
      <form action="" className="flex flex-col gap-1">
        <InputForm
          type="text"
          label="signInEmail"
          name="email"
          placeholder={
            code
              ? "input email to get code(currently unavailable)"
              : "input email"
          }
        />
        {code ? (
          <></>
        ) : (
          <InputForm
            type="password"
            label="signInPassword"
            name="password"
            placeholder="input password"
          />
        )}
        <button className="button rounded-[5px] py-1" type="button">
          <p className=" m-auto">{code ? "sign in with code" : "sign in"}</p>
        </button>
        <p className="text-[#b8b8b9] text-center">OR</p>
        <button
          type="button"
          className="bg-[hsla(340,8%,23%,0.8)] py-[5px] rounded-[5px] text-white"
          onClick={handleClick}
        >
          {code ? "use password" : "use code"}
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

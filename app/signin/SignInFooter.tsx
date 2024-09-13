import React from "react";

function SignInFooter() {
  const footer = [
    "FAQ",
    "Terms of Use",
    "Help center",
    "Privacy.",
    "Cookie Preference",
    "Corporate Information",
  ];
  const footerElement = footer.map((footer, i) => {
    return (
      <p key={i} className="footer-link">
        {footer}
      </p>
    );
  });
  return (
    <section className="px-5">
      {/* <section className="footer text-[#a8b0b3] py-5 max-w-[1100px] m-auto">
      <p className="text-white text-[10px] py-2">
        This page is protected by Google reCAPTCHA to ensure you're not a bot. 
        <span className="underline text-blue-600 cursor-pointer px-1">
          Learn more.
        </span>
      </p>
        <p className="underline">Questions? contact us.</p>
        <section className="py-1 flex flex-wrap underline">{footerElement}</section>
      <section className="select my-4">
        <select
          title="lang"
          name="lang"
          id="lang"
          className="dropdown dropdown-mini w-15 px-2 py-2 rounded-lg"
        >
          <option value="English">English</option>
        </select>
      </section>
      </section> */}
      I just wan test something
    </section>
  );
}

export default SignInFooter;

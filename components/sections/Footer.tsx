import React from "react";

function Footer() {
  const footerList = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];

  const list = footerList.map((list, i) => {
    return (
      <li className="list" key={i}>
        {list}
      </li>
    );
  });

  return (
    <>
      <section className="footer bg-black text-gray-400 underline px-4">
        <p className="list py-4">Questions? contact us</p>
        <section className="footer-list flex flex-wrap py-4">
            <p className="footer-link">FAQ</p>
            <p className="footer-link">Investor relations</p>
            <p className="footer-link">Privacy</p>
            <p className="footer-link">Speed test</p>

            <p className="footer-link">Help centers</p>
            <p className="footer-link">Jobs</p>
            <p className="footer-link">Cookie Preference</p>
            <p className="footer-link">Legal Notice</p>

            <p className="footer-link">Account</p>
            <p className="footer-link">Ways to watch</p>
            <p className="footer-link">Corporate Information</p>
            <p className="footer-link">Only on netflix</p>
            <p className="footer-link">Media Center</p>
            <p className="footer-link">Terms of use</p>
            <p className="footer-link">Contact Us</p>

        </section>
      </section>
      <section className="final px-4 py-4 bg-black text-white">
        <section className="select">
          <select title="lang" name="lang" id="lang" className="dropdown dropdown-mini w-15 px-2 py-2 rounded-lg">
            <option value="English">English</option>
          </select>
        </section>
        <p className="credit py-6 text-sm">Not Netflix Nigeria</p>
      </section>
      <section className="cta-holder py-2">
        <button type="button" className="floating-cta rounded-lg py-2">
          Get started
        </button>
      </section>
    </>
  );
}

export default Footer;

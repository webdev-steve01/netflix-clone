import Logo from "@/public/netflix-2-logo-svgrepo-com.svg";
import Image from "next/image";
import Button from "../utilities/Button";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="nav bottom-1 py-[2em]">
        <section className="nav-image">
          <Image className="img" src={Logo} alt="netflix" />
        </section>
        <section className="nav-button">
          <Button text="sign up" />
        </section>
      </nav>
    </>
  );
}

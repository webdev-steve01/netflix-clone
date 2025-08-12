import Logo from "@/public/movie.svg";
import Image from "next/image";
import Button from "../utilities/Button";

export default function Nav() {
  return (
    <>
      <nav className="nav bottom-1 py-[2em]">
        <section className="w-50">
          <Image className="" width={50} height={50} src={Logo} alt="fylm" />
        </section>
        <section className="nav-button">
          <Button text="Sign up" />
        </section>
      </nav>
    </>
  );
}

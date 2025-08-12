import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import my_list from "@/public/list-heart-svgrepo-com.svg";
function DashNav() {
  return (
    <nav className="absolute top-10px w-screen p-2">
      {" "}
      <section className="flex justify-between px-2 items- z-50 relative ">
        <Link href={"/list"}>
          <div className="rounded-full px-3 bg-[#0C0502]" aria-label="my list">
            <Image
              src={my_list}
              width={40}
              height={40}
              alt="my-list"
              className=" top-[50px] left-[10px]"
            />
          </div>
        </Link>
        <SearchBar />
      </section>
    </nav>
  );
}

export default DashNav;

import Image from "next/image";
import not_found from "@/public/404.svg";

function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src={not_found} alt="not found" width={500} height={500} />
      <p className="text-white">
        Looks like we don't have the page you're looking for
      </p>
    </div>
  );
}

export default notFound;

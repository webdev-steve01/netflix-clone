"use client";
import { useState } from "react";

function MovieButton({
  text,
  isAvailable,
  onClick,
}: {
  text: string;
  isAvailable: boolean;
  onClick?: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles =
    "rounded-md text-start px-4 py-1 transition-all duration-200 ease-in-out bg-gradient-to-r";

  const gradient = isAvailable
    ? isHovered
      ? "from-[#911710] to-transparent"
      : "from-[rgba(145,23,16,0.5)] to-transparent"
    : "from-gray-500 to-transparent";

  const interaction = isAvailable
    ? "hover:shadow-lg hover:scale-105 cursor-pointer select-auto"
    : "cursor-not-allowed select-none pointer-events-none";

  return (
    <button
      onClick={isAvailable ? onClick : undefined}
      onMouseEnter={() => isAvailable && setIsHovered(true)}
      onMouseLeave={() => isAvailable && setIsHovered(false)}
      disabled={!isAvailable}
      className={`${baseStyles} ${gradient} ${interaction}`}
    >
      {text}
    </button>
  );
}

export default MovieButton;

"use client";
import { useState } from "react";
import Image from "next/image";
import back from "@/public/list-back.svg";
import trash from "@/public/trash-alt-svgrepo-com.svg";
import edit from "@/public/write-svgrepo-com.svg";
import cancel from "@/public/x.svg";
import Link from "next/link";
import { deleteItemFromList } from "@/utils/AddToList";
import { AnimatePresence, motion } from "framer-motion";

type Movie = {
  id: number;
  title: string;
  poster_path?: string;
  type: string;
};

type Props = {
  movies: Movie[];
};

export default function ClientList({ movies }: Props) {
  const [deleteMode, setDeleteMode] = useState(false);
  const [list, setList] = useState<Movie[]>(movies); // 🔥 use local state to manage UI

  const handleDelete = async (id: number) => {
    const originalList = [...list];
    setList(list.filter((movie) => movie.id !== id)); // instantly remove from UI

    try {
      await deleteItemFromList(id);
    } catch (error) {
      console.error("Delete failed:", error);
      setList(originalList); // rollback if Firestore fails
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between p-4  bg-black/70 backdrop-blur">
        <div className="flex items-center gap-4">
          <Image src={back} alt="back" width={30} height={30} />
          <h1 className="text-xl font-bold">My List</h1>
        </div>
        <button onClick={() => setDeleteMode((prev) => !prev)}>
          <AnimatePresence mode="wait" initial={false}>
            {deleteMode ? (
              <motion.div
                key="cancel"
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="rounded-full bg-[#911710]"
              >
                <Image src={cancel} alt="cancel" width={30} height={30} />
              </motion.div>
            ) : (
              <motion.div
                key="edit"
                initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={edit} alt="edit" width={30} height={30} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      <div className="flex flex-wrap gap-4 p-4">
        {list.length > 0 ? (
          list.map((movie) => (
            <div key={movie.id} className="flex flex-col gap-1 justify-between">
              <Link href={`/info/${movie.type}/${movie.id}`}>
                <div className="flex items-center gap-4 overflow-hidden rounded-lg">
                  <Image
                    src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                    alt={movie.title}
                    width={100}
                    height={150}
                    className="rounded-lg w-[100px] md:w-[150px] hover:scale-105 transition duration-300"
                  />
                  {/* <p>{movie.title}</p> */}
                </div>
              </Link>
              <AnimatePresence>
                {deleteMode && (
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleDelete(movie.id)}
                    className="text-red-500 hover:scale-105 transition flex items-center justify-center rounded-full"
                  >
                    <Image src={trash} alt="delete" width={20} height={20} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <p>No films</p>
        )}
      </div>
    </>
  );
}

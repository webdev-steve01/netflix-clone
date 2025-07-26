"use client";
import React, { useEffect, useState } from "react";
import { addToList, fetchUserList } from "@/utils/AddToList";

type MinimalMovie = {
  id: number;
  title: string;
  poster_path?: string;
  type: string;
  isAdding: (boolean: boolean) => void;
};

type Props = {
  movie: MinimalMovie;
  baseText: string;
  resultingText: string;
};

function AddToListButton({ movie, baseText, resultingText }: Props) {
  const [inList, setInList] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkIfInList = async () => {
      try {
        const userList = await fetchUserList();
        const found = userList.some((item) => item.id === movie.id);
        setInList(found);
      } catch (error) {
        console.error("Failed to fetch user list:", error);
      }
    };

    checkIfInList();
  }, [movie.id]);

  const handleClick = async () => {
    if (inList) return; // do nothing if already in list
    setLoading(true);
    // movie.isAdding(true);

    try {
      await addToList(movie);
      setInList(true);
    } catch (error) {
      console.error("Failed to add to list:", error);
    } finally {
      setLoading(false);
      // movie.isAdding(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={inList || loading}
        className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
      >
        {loading ? "Adding..." : inList ? resultingText : baseText}
      </button>
    </div>
  );
}

export default AddToListButton;

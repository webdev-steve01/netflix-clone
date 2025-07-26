"use client";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { fetchUserList } from "@/utils/AddToList";
import List from "./List";
import Loader from "../utilities/Loader";
type Movie = {
  id: number;
  title: string;
  poster_path?: string;
  type: string;
};
export default function Render() {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState<Movie[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is authenticated:", user.uid);
        fetchUserList()
          .then((list) => {
            setList(list);
            setIsLoading(false);
          })
          .catch((err) => console.log("error fetching user list", err));
      } else {
        console.log("No user is authenticated");
        router.replace("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return <>{isLoading ? <Loader /> : <List movies={list ?? []} />}</>;
}

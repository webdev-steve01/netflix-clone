import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "./firebase";
import { getDocs, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { db } from "@/lib/firebase"; // make sure this points to your initialized Firestore

export const testGetUserList = async () => {
  const user = getAuth().currentUser;

  if (!user) {
    console.error("❌ Not authenticated");
    return;
  }

  console.log("🧑 UID:", user.uid); // ✅ log early

  const listRef = collection(db, `users/${user.uid}/list`);

  try {
    const snap = await getDocs(listRef);
    console.log("✅ Docs found:", snap.size);

    if (snap.empty) {
      console.log("🕳️ No movies found in list");
    } else {
      snap.forEach((doc) => {
        console.log("🎬", doc.id, doc.data());
      });
    }
  } catch (error) {
    console.error("🔥 Firestore error:", error);
  }
};

type MinimalMovie = {
  id: number;
  title: string;
  poster_path?: string;
  type: string;
  isAdding: (boolean: boolean) => void;
};

export async function addToList({
  id,
  title,
  poster_path,
  type,
  isAdding,
}: MinimalMovie) {
  const user = auth.currentUser;
  if (!user) throw new Error("Not authenticated");
  isAdding(true);

  const ref = doc(db, `users/${user.uid}/list/${id}`);
  await setDoc(
    ref,
    {
      movieId: id,
      title: title,
      poster_path: poster_path ?? null,
      type,
      addedAt: serverTimestamp(),
    },
    { merge: true }
  )
    .catch(() => alert("error adding data, please try again"))
    .finally(() => {
      isAdding(false);
    }); // merge makes it idempotent

  return "added";
}

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import dynamic from "next/dynamic";
import Loader from "@/components/utilities/Loader";
import { useParams } from "next/navigation";

// ✅ Import Server Component safely
const MovieInfo = dynamic(() => import("../[id]/MovieInfo"), { ssr: true, loading: () => <Loader /> });

function RenderThisPage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/");
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  return loading ? (
    <p className="text-white">Checking authentication...</p>
  ) : (
    <MovieInfo type={String(params.type)} param={String(params.id)} />
  );
}

export default RenderThisPage;

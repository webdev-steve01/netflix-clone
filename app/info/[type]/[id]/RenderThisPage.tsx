"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import dynamic from "next/dynamic";
import Loader from "@/components/utilities/Loader";

type prop = {
  type: string;
  id: string;
};
const MovieInfo = dynamic(() => import("../[id]/MovieInfo"), {
  ssr: true,
  loading: () => <Loader />,
});

function RenderThisPage({ type, id }: prop) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  // const params = useParams();

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
    <MovieInfo type={String(type)} param={String(id)} />
  );
}

export default RenderThisPage;

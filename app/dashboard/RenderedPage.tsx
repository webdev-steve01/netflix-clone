"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import dynamic from "next/dynamic";
import Loader from "@/components/utilities/Loader";
import { useAuth } from "@/context/AuthContext";

// ✅ Import Server Component safely
const DashboardNav = dynamic(
  () => import("@/components/Dashboard_components/DashboardNav"),
  { ssr: false, loading: () => <Loader /> }
);

function RenderedPage() {
  const [isLoading, setLoading] = useState(true);
  // const { userId, loading } = useAuth();
  const router = useRouter();

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

  return isLoading ? (
    <p className="text-white">Checking authentication...</p>
  ) : (
    <DashboardNav />
  );
}

export default RenderedPage;

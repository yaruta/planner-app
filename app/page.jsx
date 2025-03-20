"use client";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    // Warten auf die Authentifizierung
    if (loading) return; // Wenn noch geprüft wird, nichts tun

    if (!user && !localStorage.getItem("user")) {
      router.push("/auth/login");
    } else {
      router.replace("/dashboard");
    }
  }, [user, loading, router]);

  return <></>;
}

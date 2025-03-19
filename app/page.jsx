"use client";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user && !localStorage.getItem("user")) {
      router.push("/auth/login");
    }
  }, [user]);

  return (
    <main>
      <h1>Planner App</h1>
    </main>
  );
}

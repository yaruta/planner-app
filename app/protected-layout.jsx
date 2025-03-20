"use client";
import "./globals.css";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { useEffect, useState } from "react";

export default function ProtectedLayout({ children }) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || loading) return; // Warte auf Auth-Status und Client-Side

    const storedUser =
      typeof window !== "undefined" ? localStorage.getItem("user") : null;

    if (!user && !storedUser) {
      router.replace("/auth/login"); 
    } else {
      setIsChecking(false);
    }
  }, [user, loading, isClient, router]);

  // Solange der Auth-Status geprüft wird, zeigen wir nichts
  if (isChecking) return null;

  return <>{children}</>;
}

"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AuthLayout({ children }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && localStorage.getItem("user")) {
      router.push("/dashboard");
    }
  }, [isClient, router]);

  // Solange die Auth-Seiten überprüft werden, rendern wir nichts
  if (!isClient) return null;

  return <section className="flex w-full justify-center">{children}</section>;
}

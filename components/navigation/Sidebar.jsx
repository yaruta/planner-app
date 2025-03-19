"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import MainNavigation from "./MainNavigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "@/firebase/config";

export default function Sidebar() {
  const [user] = useAuthState(auth);

  return (
    <>
      {user && (
        <aside className="w-64 bg-white text-gray-900 h-11/12 p-6 m-6 rounded-lg shadow-md">
          <MainNavigation />
        </aside>
      )}
    </>
  );
}

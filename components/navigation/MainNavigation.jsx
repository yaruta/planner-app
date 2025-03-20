"use client";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config.js";
import { redirect } from "next/navigation";

export default function MainNavigation() {
  return (
    <nav>
      <ul className="space-y-2">
        <li>
          <Link
            href="/dashboard"
            className="block p-2 hover:bg-gray-200 rounded"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/tasks" className="block p-2 hover:bg-gray-200 rounded">
            Tasks
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="block p-2 hover:bg-gray-200 rounded"
          >
            Settings
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              signOut(auth);
              localStorage.removeItem("user");
              redirect("/auth/login");
            }}
            className="block p-2 hover:bg-gray-200 rounded w-full text-left"
          >
            Log out
          </button>
        </li>
      </ul>
    </nav>
  );
}

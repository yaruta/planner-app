"use client";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config.js";
import { useAuthState } from "react-firebase-hooks/auth";

export default function MainNavigation() {
  const [user] = useAuthState(auth);
  console.log({ user });
  return (
    <nav>
      <ul>
        <li>
          <Link href="/auth">Auth</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/tasks">Tasks</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
        <li>
          <button onClick={() => signOut(auth)}>Log out</button>
        </li>
      </ul>
    </nav>
  );
}

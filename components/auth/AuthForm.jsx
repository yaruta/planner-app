"use client";
import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config.js";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const AuthForm = ({ formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const router = useRouter();
  const pathname = usePathname();
  const isLogin = pathname === "/auth/login";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let res;
      if (formType === "login") {
        res = await signInWithEmailAndPassword(email, password);
        console.log({ res });
      } else {
        res = await createUserWithEmailAndPassword(email, password);
      }
      //   console.log({ res });
      localStorage.setItem("user", true);
      setEmail("");
      setPassword("");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          {formType === "login" ? "Sign In" : "Sign Up"}
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {formType === "login" ? "Sign In" : "Sign Up"}
        </button>
        {isLogin && (
          <p className="text-xs pt-4 text-center">
            Don't have an account{" "}
            <Link href="/auth/register" className="text-blue-800">
              Signup
            </Link>
          </p>
        )}
        {!isLogin && (
          <p className="text-xs pt-4 text-center">
            Already have an account{" "}
            <Link href="/auth/login" className="text-blue-800">
              Login
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default AuthForm;

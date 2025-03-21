"use client";
import { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config.js";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { getAuthErrorMessage, isPasswordValid } from "@/utils/authErrors";

const AuthForm = ({ formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [
    createUserWithEmailAndPassword,
    userRegister,
    loadingRegister,
    errorRegister,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword, userLogin, loadingLogin, errorLogin] =
    useSignInWithEmailAndPassword(auth);

  const router = useRouter();
  const pathname = usePathname();
  const isLogin = pathname === "/auth/login";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!isPasswordValid(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long, include a number and a special character."
      );
      return;
    }

    let res;
    if (formType === "login") {
      res = await signInWithEmailAndPassword(email, password);
    } else {
      res = await createUserWithEmailAndPassword(email, password);
    }

    if (res?.user) {
      localStorage.setItem("user", true);
      setEmail("");
      setPassword("");
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    const error = errorLogin || errorRegister;
    if (error) {
      setErrorMessage(getAuthErrorMessage(error.code));
    }
  }, [errorLogin, errorRegister]);

  const renderFormLinks = () => {
    if (isLogin) {
      return (
        <p className="text-xs pt-2 text-center">
          Don't have an account{" "}
          <Link href="/auth/register" className="text-blue-800">
            Sign up
          </Link>
        </p>
      );
    }
    return (
      <p className="text-xs pt-4 text-center">
        Already have an account{" "}
        <Link href="/auth/login" className="text-blue-800">
          Login
        </Link>
      </p>
    );
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
        {errorMessage !== "" && (
          <p className="text-red-500 text-xs mb-2">{errorMessage}</p>
        )}
        {isLogin && (
          <Link
            href="/auth/forgot-password"
            className="text-xs text-blue-800 pb-2"
          >
            Forgot your password?
          </Link>
        )}
        <button
          type="submit"
          disabled={loadingLogin || loadingRegister}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {formType === "login" ? "Sign In" : "Sign Up"}
        </button>
        {renderFormLinks()}
      </form>
    </div>
  );
};

export default AuthForm;

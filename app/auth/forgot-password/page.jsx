import AuthLayout from "@/components/auth/AuthLayout";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <h2>Forgot Passwort Form</h2>
      <Link href="/auth/login">Login</Link>
    </AuthLayout>
  );
}

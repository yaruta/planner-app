import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthForm formType="register" />
    </AuthLayout>
  );
}

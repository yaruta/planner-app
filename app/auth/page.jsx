import Link from "next/link";

export default function AuthPage() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/auth/login">Login</Link>
          </li>
          <li>
            <Link href="/auth/register">Register</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

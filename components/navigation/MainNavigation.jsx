import Link from "next/link";

export default function MainNavigation() {
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
      </ul>
    </nav>
  );
}

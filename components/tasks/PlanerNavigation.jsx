import Link from "next/link";

export default function PlanerNavigation() {
  return (
    <nav>
      <ul className="flex justify-baseline gap-8">
        <li>
          <Link href="/tasks/daily">Daily</Link>
        </li>
        <li>
          <Link href="/tasks/weekly">Weekly</Link>
        </li>
        <li>
          <Link href="/tasks/monthly">Monthly</Link>
        </li>
      </ul>
    </nav>
  );
}

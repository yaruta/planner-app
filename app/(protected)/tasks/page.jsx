import Link from "next/link";

export default function TasksPage() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/tasks/create">Create Task</Link>
          </li>
          <li>
            <Link href="/tasks/daily">Daily Planer</Link>
          </li>
          <li>
            <Link href="/tasks/weekly">Weekly Planer</Link>
          </li>
          <li>
            <Link href="/tasks/monthly">Monthly Planer</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

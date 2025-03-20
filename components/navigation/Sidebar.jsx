import MainNavigation from "./MainNavigation";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white text-gray-900 h-11/12 p-6 m-6 rounded-lg shadow-md">
      <MainNavigation />
    </aside>
  );
}

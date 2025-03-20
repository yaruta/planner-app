import ProtectedLayout from "../protected-layout";
import Sidebar from "@/components/navigation/Sidebar";

export default function ProtectedAreaLayout({ children }) {
  return (
    <ProtectedLayout>
      <main className="bg-gray-100 flex justify-between w-full gap-2 h-screen">
        <Sidebar />
        {children}
      </main>
    </ProtectedLayout>
  );
}

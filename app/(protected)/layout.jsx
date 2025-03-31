import ProtectedLayout from "../protected-layout";
import Sidebar from "@/components/navigation/Sidebar";

export default function ProtectedAreaLayout({ children }) {
  return (
    <ProtectedLayout>
      <main className="flex justify-between w-full h-screen overflow-y-hidden">
        <Sidebar />
        {children}
      </main>
    </ProtectedLayout>
  );
}

import "./globals.css";
import Sidebar from "@/components/navigation/Sidebar";

export const metadata = {
  title: "Planner App",
  description: "A simple planner app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 flex justify-between w-full gap-2">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}

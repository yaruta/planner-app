import "./globals.css";
import Sidebar from "@/components/navigation/Sidebar";

export const metadata = {
  title: "Planner App",
  description: "A simple planner app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}

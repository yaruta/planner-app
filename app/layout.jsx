import "./globals.css";

export const metadata = {
  title: "Planner App",
  description: "A simple planner app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 flex justify-between w-full gap-2">
        {children}
      </body>
    </html>
  );
}

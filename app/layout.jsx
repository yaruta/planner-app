import "./globals.css";

export const metadata = {
  title: "Planner App",
  description: "A simple planner app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-between w-full gap-2">
        {children}
      </body>
    </html>
  );
}

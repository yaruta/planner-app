import "./globals.css";

export const metadata = {
  title: "Planner App",
  description: "A simple planner app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

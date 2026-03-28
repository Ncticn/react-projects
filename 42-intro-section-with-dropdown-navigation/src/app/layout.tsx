import "@/libraries/tailwind.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor | Intro Section with Dropdown Navigation",
  description:
    "This challenge will test your ability to create dropdown navigation menus, a common pattern on larger sites. It will also provide some nice basic layout challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

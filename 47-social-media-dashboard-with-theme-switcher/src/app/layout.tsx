import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/libraries/tailwind.css";

const inter = Inter({
  variable: '--font-inter',
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Frontend Mentor | Social Media Dashboard with Theme Switcher",
  description: "This challenge will be a perfect chance to practice your Grid skills. The color theme switcher also adds a nice additional test.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

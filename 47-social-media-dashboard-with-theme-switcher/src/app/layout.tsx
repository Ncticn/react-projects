import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/libraries/tailwind.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Social Media Dashboard with Theme Switcher",
  description:
    "This challenge will be a perfect chance to practice your Grid skills. The color theme switcher also adds a nice additional test.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col items-stretch justify-center before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-58.75 before:w-full before:rounded-b-[20px] before:bg-blue-50 before:md:h-61 dark:before:bg-gray-900">
        <main>{children}</main>
      </body>
    </html>
  );
}

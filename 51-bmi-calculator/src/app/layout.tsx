import type { Metadata } from "next";
import "@/src/libraries/tailwind.css";

import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Frontend Mentor | Body Mass Index Calculator",
  description: "This body mass index (BMI) tool will be fun to build, testing your layout, JS and HTML form skills.",
};

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-Inter"
});

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
      <body className="min-h-full flex flex-col items-center justify-center gap-0 relative overflow-x-hidden">{children}</body>
    </html>
  );
}

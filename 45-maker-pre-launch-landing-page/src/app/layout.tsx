import "@/libraries/tailwind.css";

import type { Metadata } from "next";

import { Manrope } from "next/font/google";

const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Frontend Mentor | Maker Pre-Launch Landing Page",
  description: "Put your layout skills to the test with this landing page challenge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manropeSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

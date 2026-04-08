import "@/libraries/tailwind.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Frontend Mentor | Coding Bootcamp Testimonials Slider",
  description: "This challenge will be a nice test if you're new to JavaScript. It's also a great opportunity to play around with content animations and transitions.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import "@/libraries/tailwind.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PatternCurve from "@/assets/patterns/pattern-curve.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Frontend Mentor | Coding Bootcamp Testimonials Slider",
  description:
    "This challenge will be a nice test if you're new to JavaScript. It's also a great opportunity to play around with content animations and transitions.",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col items-center justify-center">
        <main className="relative z-20">{children}</main>
        <div className="absolute inset-x-0 bottom-0 left-0 z-10">
          <Image src={PatternCurve} alt="" className="object-contain" />
        </div>
      </body>
    </html>
  );
}

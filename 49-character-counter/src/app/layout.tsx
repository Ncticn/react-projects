import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import "@/libraries/tailwind.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Character Counter",
  description: "This project will test a range of your skills, especially your JavaScript, with the counters and letter density graph.",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm_sans"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

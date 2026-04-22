import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import "@/libraries/tailwind.css";
import Header from "@/components/layout/Header";

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
      <body className="min-h-full flex flex-col items-stretch gap-10 lg:gap-12 justify-start max-w-85.75 md:max-w-176 lg:max-w-247.5 mx-auto pb-8 md:pb-23.25 pt-4 lg:pt-8 lg:pb-16">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

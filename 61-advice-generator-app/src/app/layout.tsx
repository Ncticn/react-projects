import "@/src/libraries/tailwind.css";
import { Manrope } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor | Advice Generator App",
  description: "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
};

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center justify-center gap-0">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

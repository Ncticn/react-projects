import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "@/libraries/tailwind.css";


export const metadata: Metadata = {
  title: "Frontend Mentor | Pricing Component with Toggle",
  description: "This challenge will get you thinking about building an accessible custom toggle control and also test your layout skills.",
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

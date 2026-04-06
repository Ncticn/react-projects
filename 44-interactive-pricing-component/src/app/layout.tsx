import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/libraries/tailwind.css";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Interactive Pricing Component",
  description:
    "In this project, you'll build out an interactive pricing component complete with custom range input slider and pricing toggle. A perfect way to test your JS skills!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${manrope.className}`}>
      <body className="relative flex min-h-full flex-col items-center justify-center">
        <div className="absolute inset-x-0 top-0 h-112.25 bg-[url(src/assets/patterns/bg-pattern.svg)] bg-cover bg-no-repeat"></div>
        {children}
      </body>
    </html>
  );
}

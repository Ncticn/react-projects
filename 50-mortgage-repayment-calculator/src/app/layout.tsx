import type { Metadata } from "next";
import "@/libraries/tailwind.css";
import { Plus_Jakarta_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Frontend Mentor | Mortgage Repayment Calculator",
  description:
    "This mortgage calculator is an excellent project for practicing working with forms, client-side validation, and updating the DOM.",
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}

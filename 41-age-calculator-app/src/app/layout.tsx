import type { Metadata } from "next";
import "@/libraries/tailwind.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Age Calculator App",
  description:
    "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col items-stretch justify-center">
        <main>{children}</main>
      </body>
    </html>
  );
}

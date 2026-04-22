import type { Metadata } from "next";
import "@/libraries/tailwind.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Mortgage Repayment Calculator",
  description: "This mortgage calculator is an excellent project for practicing working with forms, client-side validation, and updating the DOM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

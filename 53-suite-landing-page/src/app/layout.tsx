import "@/libraries/tailwind.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor | Suite Landing Page",
  description: "This small-ish HTML and CSS only landing page includes some interesting layout decisions. Perfect if you want to put your layout and responsive skills to the test!",
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

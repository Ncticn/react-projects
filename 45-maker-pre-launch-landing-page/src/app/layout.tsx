import type { Metadata } from "next";
import "@/libraries/tailwind.css"; 

export const metadata: Metadata = {
  title: "Frontend Mentor | Maker Pre-Launch Landing Page",
  description: "Put your layout skills to the test with this landing page challenge.",
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

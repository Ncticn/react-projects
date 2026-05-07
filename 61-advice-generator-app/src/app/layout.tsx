import type { Metadata } from "next";
import "@/src/libraries/tailwind.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Advice Generator App",
  description: "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
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

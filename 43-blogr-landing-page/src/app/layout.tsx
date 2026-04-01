import type { Metadata } from "next";
import "@/libraries/tailwind.css";
import FooterApp from "@/components/FooterApp";
import HeaderApp from "@/components/HeaderApp";

export const metadata: Metadata = {
  title: "Frontend Mentor | Blogr Landing Page",
  description:
    "Flex your layout muscles with this landing page challenge. You'll mostly be working with HTML & CSS for this project with a tiny bit of JS for the mobile menu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <HeaderApp />
        <main>{children}</main>
        <FooterApp />
      </body>
    </html>
  );
}

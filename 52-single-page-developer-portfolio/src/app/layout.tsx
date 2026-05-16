import "@/src/libraries/tailwind.css";
import { Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

// Components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space_grotesk"
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Single-Page Developer Portfolio",
  description: "Test your HTML and CSS skills with this portfolio site. Basic JS knowledge is needed for the form validation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${space_Grotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-stretch justify-start gap-35 relative overflow-x-hidden">
        <Header />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

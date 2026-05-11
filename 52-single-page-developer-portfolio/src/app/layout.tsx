import "@/src/libraries/tailwind.css";
import { Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";


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
      <body className="min-h-full flex flex-col items-center justify-start gap-0">
        <main className="mx-auto lg:max-w-277.5 md:max-w-177 max-w-86.25">
          {children}
        </main>
      </body>
    </html>
  );
}

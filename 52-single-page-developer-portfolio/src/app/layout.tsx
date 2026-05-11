import "@/src/libraries/tailwind.css";
import type { Metadata } from "next";

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
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/libraries/tailwind.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Newsletter Sign-Up Form",
  description: "This will test your skills with basic form structure, validation, and submission. The success state will also be an excellent opportunity to work with DOM manipulation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

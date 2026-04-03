import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor | Interactive Pricing Component",
  description: "In this project, you'll build out an interactive pricing component complete with custom range input slider and pricing toggle. A perfect way to test your JS skills!",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

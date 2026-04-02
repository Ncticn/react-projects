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
      <body className="relative flex min-h-full flex-col gap-20">
        <HeaderApp />
        <div className="absolute top-0 z-10 min-h-150 w-full overflow-hidden rounded-bl-[100px] bg-linear-to-br from-[#FF8F71] from-0% to-[#FF3E55] to-100%">
          <div className="h-150 w-full bg-[url(src/assets/patterns/bg-pattern-intro-mobile.svg)] bg-size-[400%] bg-position-[40%_40%] bg-no-repeat md:bg-[url(src/assets/patterns/bg-pattern-intro-desktop.svg)] md:bg-auto md:bg-position-[33%_50%] lg:bg-position-[25%_50%]"></div>
        </div>
        <main className="z-20 flex flex-col items-stretch justify-start gap-16">
          {children}
        </main>
        <FooterApp />
      </body>
    </html>
  );
}

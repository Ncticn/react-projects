import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "@/libraries/tailwind.css";

// NextJS
import Image from "next/image";

// Images
import BgTop from "@/assets/images/bg-top.svg";
import BgBottom from "@/assets/images/bg-bottom.svg";


export const metadata: Metadata = {
  title: "Frontend Mentor | Pricing Component with Toggle",
  description: "This challenge will get you thinking about building an accessible custom toggle control and also test your layout skills.",
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="relative overflow-x-hidden min-h-full flex flex-col items-stretch justify-center">
        <main>
          {children}
        </main>
        <Image src={BgTop} alt="" className="object-center object-cover absolute right-0 top-0 z-10" loading="eager" />
        <Image src={BgBottom} alt="" className="object-center object-cover absolute left-0 bottom-0 z-10 hidden lg:inline-block" loading="eager" />
      </body>
    </html>
  );
}

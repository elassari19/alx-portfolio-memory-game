import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import back from "../../public/back.jpeg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memory Game",
  description: "Memory Game is a game where you have to click all the images without clicking the same image twice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-svh overflow-hidden`}>
        <Image src={back} alt="background image" width="1000" height="1000" className="w-full h-full absolute top-0 left-0 -z-10" />
        {children}
      </body>
    </html>
  );
}

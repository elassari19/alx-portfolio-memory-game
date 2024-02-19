import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import back from "../../public/back.jpeg";
import Link from "next/link";

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
      <body className={`${inter.className} h-[100vh] overflow-hidden`}>
        <div className="flex gap-4 p-2">
          <Link className="opacity-80 hover:opacity-100" href="/">Home</Link>
          <Link className="opacity-80 hover:opacity-100" href="/game">Play</Link>
          <Link className="opacity-80 hover:opacity-100" href="/about-us">About us</Link>
        </div>
        {children}
      </body>
    </html>
  );
}

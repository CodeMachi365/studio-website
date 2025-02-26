import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

import "./globals.css";
import "@/views/HomeView/HomeView.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HomePageButton />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function HomePageButton() {
  return (
    <div className="w-full h-[3.5rem] pl-5 flex items-center">
      <Link href="/">
        <FaHome size={24} />
      </Link>
    </div>
  );
}

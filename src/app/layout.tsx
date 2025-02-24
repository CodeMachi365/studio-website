import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  title: "Code Machi Studio | Full-Stack Development Solutions",
  description: "Code Machi Studio offers comprehensive tech solutions including Flutter app development, web applications, database setup, and full-stack services. Your one-stop partner for transforming ideas into digital reality.",
  keywords: ["app development", "Flutter", "web development", "database", "full-stack", "tech solutions", "software development", "Code Machi"],
  icons: {
    icon: "/images/favicon.ico",
  },
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

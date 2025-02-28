import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BaseLayout from "@/components/layout/BaseLayout";

import "@/views/HomeView/HomeView.css";

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
    <BaseLayout header={<Navbar />} footer={<Footer />}>
      {children}
    </BaseLayout>
  );
}

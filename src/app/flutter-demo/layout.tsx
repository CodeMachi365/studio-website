import type { Metadata } from "next";

import BaseLayout from "@/components/layout/BaseLayout";
import Footer from "@/components/layout/Footer";
import "@/views/HomeView/HomeView.css";

export const metadata: Metadata = {
  title: "Flutter Demo",
  description: "To showcase Flutter web support features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BaseLayout footer={<Footer />}>{children}</BaseLayout>;
}

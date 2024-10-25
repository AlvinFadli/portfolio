import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { GeistSans } from "geist/font/sans";
import Footer from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import Background from "@/components/background";

export const metadata: Metadata = {
  title: "Alvin Fadli Dwi Mulya",
  description: "Personal portfolio of Alvin Fadli Dwi Mulya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} scroll-smooth`}>
      <body className={`antialiased w-full mx-auto`}>
        <Background>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </Background>
      </body>
    </html>
  );
}

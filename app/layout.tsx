import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { GeistSans } from "geist/font/sans";
import Footer from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";

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
        <div className="min-h-screen relative text-stone-900 dark:text-stone-100">
          <div className="absolute top-0 -z-50 w-full h-full dark:bg-stone-800 overflow-hidden">
            <div className="absolute top-[15%] right-0 w-52 h-52 bg-gradient-to-r from-[#059669] via-[#66d9c4] to-[#89c2d9] rounded-full opacity-15 filter blur-3xl animate-move animate-colorChange"></div>
            <div className="absolute top-[5%] right-[10%] w-64 h-64 bg-gradient-to-r from-[#66d9c4] to-[#89c2d9] rounded-full opacity-40 filter blur-3xl animate-move animate-colorChange"></div>
            <div className="absolute top-[15%] left-0 w-64 h-64 bg-gradient-to-r from-[#89c2d9] to-[#f3e99f] rounded-full opacity-40 filter blur-3xl animate-move animate-colorChange"></div>
          </div>

          <div className="w-full px-5 sm:px-10 md:w-10/12 lg:w-8/12 2xl:w-6/12 mx-auto">
            <Navbar />
            {children}
            <Analytics />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

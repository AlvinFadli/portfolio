import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Background from "@/components/background";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Alvin Fadli Dwi Mulya",
  description: "Personal portfolio of Alvin Fadli Dwi Mulya",
};

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} scroll-smooth`}>
      <body className={`antialiased w-full mx-auto`}>
        <Background>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Analytics />
        </Background>
      </body>
    </html>
  );
}

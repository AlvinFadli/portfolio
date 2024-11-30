import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Background from "@/components/background";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Container } from "@/components/craft";
import { ModeToggle } from "@/components/toogle-mode";

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
      <body className={`relative antialiased w-full mx-auto`}>
        <Background>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Container className="mx-auto max-w-[45rem] z-50 absolute top-5 right-0">
              <ModeToggle />
            </Container>
            {children}
          </ThemeProvider>
          <Analytics />
        </Background>
      </body>
    </html>
  );
}

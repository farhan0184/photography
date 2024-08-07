import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";

// add toaster
import { Toaster } from "@/components/ui/toaster"

// import Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

interface SenFontOptions {
  subsets: string[];
  weight: string[];
  display: string;
}


const SenFont = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
    <html lang="en" suppressHydrationWarning>
      <body className={SenFont.className}>
        <Toaster />
        <ThemeProvider attribute="class" defaultTheme="light">

          <Header />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

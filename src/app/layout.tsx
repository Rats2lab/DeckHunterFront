import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "../lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
/* 
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
}); */

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased h-96",
         // fontSans.variable,
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
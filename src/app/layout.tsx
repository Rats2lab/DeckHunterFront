"use client";
import "./globals.css";

import Navbar from "@/components/navbar";
import { cn } from "../lib/utils";
import LeaderboardProvider from "./context/leaderboardContext";
import ProductProvider from "./context/productContext";
import Header from "@/components/Header";
import Hotjar from "@hotjar/browser";

const siteId = 5093526;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Header
        title="AI-Enhanced Product Hunt Decks"
        description="Discover daily Product Hunt launches enhanced with AI-generated deck information including problem statements, solutions, TAM, and more."
        keywords="Product Hunt, AI, startup decks, market analysis, TAM, product launch"
      />
      <body
        className={cn("min-h-screen bg-background font-sans antialiased h-96")}
      >
        <LeaderboardProvider>
          <ProductProvider>
            <Navbar />
            {children}
          </ProductProvider>
        </LeaderboardProvider>
      </body>
    </html>
  );
}

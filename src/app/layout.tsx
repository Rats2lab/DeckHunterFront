import "./globals.css";

import Navbar from "@/components/navbar";
import { cn } from "../lib/utils";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased h-96",
         // fontSans.variable,
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
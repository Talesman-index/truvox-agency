import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truvox | Designing trust. Building digital presence.",
  description: "Digital agency for small businesses. We create clean, strategic websites that build credibility and turn visitors into clients.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

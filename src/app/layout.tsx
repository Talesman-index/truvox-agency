import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Truvox | Web Design Agency for Small Businesses in Charlotte, NC",
  description: "Truvox is a Charlotte-based web design agency helping small businesses attract more clients with clean, strategic, high-converting websites. Get a free consultation.",
  keywords: "web design Charlotte NC, small business website, digital agency Charlotte, website design North Carolina",
  alternates: {
    canonical: "https://truvox-agency.vercel.app/",
  },
  openGraph: {
    title: "Truvox | Web Design Agency for Small Businesses in Charlotte, NC",
    description: "We create clean, strategic websites that build credibility and turn visitors into clients. Based in Charlotte, NC.",
    url: "https://truvox-agency.vercel.app/",
    siteName: "Truvox Agency",
    images: [
      {
        url: "https://truvox-agency.vercel.app/assets/og/truvox-og.jpg",
        width: 1200,
        height: 630,
        alt: "Truvox Agency Charlotte NC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truvox | Web Design Agency Charlotte NC",
    description: "Strategic web design for small businesses. Clean, high-converting websites.",
    images: ["https://truvox-agency.vercel.app/assets/og/truvox-og.jpg"],
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className={`${archivo.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

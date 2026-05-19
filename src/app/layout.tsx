import type { Metadata } from "next";
import { Syne, Instrument_Sans } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Truvox | Web Design Agency for Small Businesses in Charlotte, NC",
  description: "Truvox is a Charlotte-based web design agency helping small businesses attract more clients with clean, strategic, high-converting websites. Get a free consultation.",
  keywords: "web design Charlotte NC, small business website, digital agency Charlotte, website design North Carolina",
  metadataBase: new URL("https://truvox.studio"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: ['/favicon.svg'],
    apple: ['/favicon.svg']
  },
  openGraph: {
    title: "Truvox | Web Design Agency for Small Businesses in Charlotte, NC",
    description: "We create clean, strategic websites that build credibility and turn visitors into clients. Based in Charlotte, NC.",
    url: "https://truvox.studio",
    siteName: "Truvox Agency",
    images: [{ url: "/assets/og/truvox-og.jpg", width: 1200, height: 630, alt: "Truvox Agency Charlotte NC" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truvox | Web Design Agency Charlotte NC",
    description: "Strategic web design for small businesses. Clean, high-converting websites.",
    images: ["/assets/og/truvox-og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${instrument.variable}`}>
      <body className={`${instrument.className} antialiased min-h-screen flex flex-col overflow-x-hidden`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PC3HNC9G"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PC3HNC9G');`,
          }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

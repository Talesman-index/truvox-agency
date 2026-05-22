import type { Metadata } from "next";
import { BioRhyme, DM_Sans, Space_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const bioRhyme = BioRhyme({
  subsets: ["latin"],
  variable: "--font-display"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Truvox | Web Design Agency for Small Businesses",
  description: "Truvox is a web design agency helping small businesses attract more clients with clean, strategic, high-converting websites. Get a free consultation.",
  keywords: "web design, small business website, digital agency, website design",
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
    title: "Truvox | Web Design Agency for Small Businesses",
    description: "We create clean, strategic websites that build credibility and turn visitors into clients.",
    url: "https://truvox.studio",
    siteName: "Truvox Agency",
    images: [{ url: "/assets/og/truvox-og.jpg", width: 1200, height: 630, alt: "Truvox Agency" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truvox | Web Design Agency",
    description: "Strategic web design for small businesses. Clean, high-converting websites.",
    images: ["/assets/og/truvox-og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bioRhyme.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <body className={`${dmSans.className} antialiased min-h-screen flex flex-col overflow-x-hidden`}>
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

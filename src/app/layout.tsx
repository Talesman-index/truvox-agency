import type { Metadata } from "next";
import { Geist_Mono, Inter as InterFont, Geist, Space_Grotesk } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-geist-mono",
});

const interDisplay = InterFont({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter-display",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geist",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Truvox | Web Design Agency for Small Businesses",
  description: "Truvox is a web design agency helping small businesses attract more clients with clean, strategic, high-converting websites. Get a free consultation.",
  keywords: "web design, small business website, digital agency, website design",
  metadataBase: new URL("https://truvox.studio"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: '/truvox_pixel.png', sizes: '32x32', type: 'image/png' },
      { url: '/truvox_pixel.png', sizes: '16x16', type: 'image/png' },
      { url: '/truvox_pixel.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: [{ url: '/truvox_pixel.png', type: 'image/png' }],
    apple: [{ url: '/truvox_pixel.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: "Truvox | Web Design Agency for Small Businesses",
    description: "We create clean, strategic websites that build credibility and turn visitors into clients.",
    url: "https://truvox.studio",
    siteName: "Truvox Agency",
    images: [{ url: "/assets/og/truvox-og.png", width: 1200, height: 630, alt: "Truvox Agency" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truvox | Web Design Agency",
    description: "Strategic web design for small businesses. Clean, high-converting websites.",
    images: ["/assets/og/truvox-og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistMono.variable} ${interDisplay.variable} ${geist.variable} ${spaceGrotesk.variable}`}>
      <body className={`${geist.className} antialiased min-h-screen flex flex-col overflow-x-hidden`}>
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
            j=d.createElement(s),dl=l!='dataLayer'? '&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PC3HNC9G');`,
          }}
        />
        <div className="relative min-h-screen flex flex-col overflow-x-hidden">
          {/* Global Background Vertical Grid Lines */}
          <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-30 max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-6">
            <div className="border-r border-neutral-500/[0.08] h-full"></div>
            <div className="border-r border-neutral-500/[0.08] h-full"></div>
            <div className="border-r border-neutral-500/[0.08] h-full"></div>
            <div className="border-r border-neutral-500/[0.08] h-full"></div>
            <div className="border-r border-neutral-500/[0.08] h-full"></div>
            <div className="h-full"></div>
          </div>
          
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}

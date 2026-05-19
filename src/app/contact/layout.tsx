import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Truvox | Get a Free Web Design Consultation",
  description: "Ready to build your digital presence? Contact Truvox for a free consultation. Based in Charlotte, NC, and serving clients worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Truvox | Free Web Design Consultation",
    description: "Tell us about your project. We respond within 24 hours.",
    url: "https://truvox.studio/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

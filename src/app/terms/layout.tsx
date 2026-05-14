import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Truvox Agency",
  description: "Read the terms and conditions for using Truvox's services and website.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Truvox Agency",
    description: "Terms and conditions for our digital services.",
    url: "https://truvox.studio/terms",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Truvox Agency",
  description: "Learn how Truvox collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Truvox Agency",
    description: "Our commitment to protecting your privacy.",
    url: "https://truvox.studio/privacy",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

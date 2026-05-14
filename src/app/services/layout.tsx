import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Services | Truvox Agency Charlotte NC",
  description: "Premium web design, UI/UX, full-stack development, and digital strategy services for small businesses in Charlotte and worldwide.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Web Design Services | Truvox Agency",
    description: "High-fidelity design and strategic engineering services.",
    url: "https://truvox.studio/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Truvox | Web Design Agency Charlotte NC",
  description: "Truvox is a Charlotte-based digital agency bridging creative vision and technical precision. We craft premium websites for ambitious brands.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Truvox | Web Design Agency Charlotte NC",
    description: "High-fidelity design meets strategic engineering. Meet the team behind Truvox.",
    url: "https://truvox.studio/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

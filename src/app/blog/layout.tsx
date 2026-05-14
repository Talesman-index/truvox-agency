import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Truvox Web Design & Growth Insights Charlotte NC",
  description: "Insights on web design, digital strategy, and business growth. Read the Truvox Journal for practical tips and resources.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Truvox Web Design & Growth Insights",
    description: "Insights on web design, digital strategy, and business growth.",
    url: "https://truvox.studio/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

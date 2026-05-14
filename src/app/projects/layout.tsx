import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Truvox Web Design Portfolio Charlotte NC",
  description: "Explore Truvox's portfolio of premium web design and digital experiences built for ambitious small businesses and startups.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Truvox Web Design Portfolio",
    description: "Selected works in web design, UI/UX, and digital strategy.",
    url: "https://truvox.studio/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

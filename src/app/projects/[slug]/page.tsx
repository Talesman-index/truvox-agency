import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allProjects } from '@/data/projects';
import { ProjectDetailContent } from '@/components/projects/ProjectDetailContent';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find(p => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Truvox Agency',
    };
  }

  return {
    title: `${project.title} | Truvox Agency Portfolio`,
    description: `${project.description} — Truvox Agency Charlotte NC`,
    openGraph: {
      title: `${project.title} | Truvox Agency`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = allProjects.find(p => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return <ProjectDetailContent project={project} />;
}

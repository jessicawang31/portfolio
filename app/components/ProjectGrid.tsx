import Card from '../card';

export interface ProjectSection {
  title: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  imageSrc: string;
  siteUrl: string;
  tags: string[];
  year: string;
  highlights?: string[];
  sections?: ProjectSection[];
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="container mx-auto px-6 py-16 max-w-6xl">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-8">
        Selected Work
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            siteUrl={project.siteUrl}
            tags={project.tags}
            year={project.year}
            highlights={project.highlights}
            sections={project.sections}
          />
        ))}
      </div>
    </section>
  );
}

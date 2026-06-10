import { projects } from "../../data/projects";
import { SectionHeader } from "../layout/SectionHeader";
import { ProjectCard } from "../cards/ProjectCard";

export function Projects() {
  return (
    <section id="projets" className="section-shell overflow-hidden">
      <div className="absolute bottom-8 left-4 h-52 w-52 bg-dotted opacity-60" />
      <SectionHeader
        eyebrow="Projets principaux"
        title="Mes projets phares"
        description="Une sélection de projets où j’ai conçu, développé et déployé des solutions à fort impact."
      />
      <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

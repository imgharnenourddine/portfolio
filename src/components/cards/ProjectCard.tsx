import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/project";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden p-4 transition duration-300 hover:-translate-y-2 hover:shadow-soft">
      <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-brand-50 p-8 ring-1 ring-brand-100">
        <img
          src={project.image}
          alt={project.title}
          className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-1 pb-1 pt-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-black text-ink">{project.title}</h3>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-brand-600 opacity-0 transition group-hover:opacity-100" />
        </div>
        <p className="text-sm leading-7 text-muted">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology} className="px-3 py-1.5 text-xs">
              {technology}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

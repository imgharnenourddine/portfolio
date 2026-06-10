import { CalendarDays } from "lucide-react";
import type { Experience } from "../../types/experience";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="flex h-full flex-col gap-6 lg:flex-row">
      <div className="flex h-40 w-full items-center justify-center rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100 lg:h-36 lg:w-36 lg:shrink-0">
        <img
          src={experience.image}
          alt={experience.company}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-2xl font-black text-ink">{experience.company}</h3>
        <p className="mt-1 font-bold text-brand-700">{experience.role}</p>
        <p className="mt-5 leading-7 text-muted">{experience.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <Badge key={`${experience.company}-${technology}`} className="px-3 py-1.5 text-xs">
              {technology}
            </Badge>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-3 pt-6 font-semibold text-muted">
          <CalendarDays className="h-5 w-5 text-brand-600" />
          <span>{experience.period}</span>
        </div>
      </div>
    </Card>
  );
}

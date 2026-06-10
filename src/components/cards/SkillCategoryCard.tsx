import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { SkillCategory } from "../../types/skill";
import { Card } from "../ui/Card";
import { SkillCard } from "./SkillCard";

const icons: Record<string, LucideIcon> = {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Server,
};

type SkillCategoryCardProps = {
  category: SkillCategory;
};

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  const Icon = icons[category.icon] ?? Wrench;

  return (
    <Card className="p-6">
      <div className="mb-5 flex items-center gap-3">
        <Icon className="h-8 w-8 text-brand-600" />
        <h3 className="text-xl font-black text-brand-700">{category.title}</h3>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {category.technologies.map((technology) => (
          <SkillCard key={`${category.title}-${technology.name}`} technology={technology} />
        ))}
      </div>
    </Card>
  );
}

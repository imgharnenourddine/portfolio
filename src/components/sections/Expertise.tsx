import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { expertiseDomains } from "../../data/skills";
import { SectionHeader } from "../layout/SectionHeader";
import { Card } from "../ui/Card";

const icons: Record<string, LucideIcon> = {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
};

export function Expertise() {
  return (
    <section className="section-shell overflow-hidden">
      <div className="absolute -right-10 top-10 h-72 w-72 bg-dotted opacity-60" />
      <div className="absolute -bottom-10 -left-10 h-56 w-56 bg-dotted opacity-60" />
      <SectionHeader
        eyebrow="Domaines d’expertise"
        title="Mes domaines d’expertise"
        description="Une expertise polyvalente pour concevoir des solutions intelligentes, robustes et scalables."
      />

      <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {expertiseDomains.map((domain) => {
          const Icon = icons[domain.icon] ?? Sparkles;

          return (
            <Card key={domain.title} className="group min-h-80 p-8">
              <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <Icon className="h-11 w-11" />
              </div>
              <h3 className="text-2xl font-black leading-tight text-ink">{domain.title}</h3>
              <p className="mt-6 text-base leading-8 text-muted">{domain.description}</p>
              <span className="mt-10 block h-1.5 w-14 rounded-full bg-brand-600 transition group-hover:w-24" />
            </Card>
          );
        })}
      </div>
    </section>
  );
}

import {
  BadgeCheck,
  BriefcaseBusiness,
  FolderKanban,
  Layers3,
  type LucideIcon,
} from "lucide-react";
import { stats } from "../../data/personal";
import { Card } from "../ui/Card";

const icons: Record<string, LucideIcon> = {
  BadgeCheck,
  BriefcaseBusiness,
  FolderKanban,
  Layers3,
};

export function Stats() {
  return (
    <section className="section-shell">
      <p className="mb-10 text-sm font-black uppercase tracking-[0.18em] text-brand-600 sm:text-base">
        Chiffres clés
      </p>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = icons[item.icon] ?? FolderKanban;

          return (
            <Card key={item.label} className="min-h-64">
              <div className="mb-12 inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <Icon className="h-10 w-10" />
              </div>
              <p className="text-6xl font-black text-brand-700">{item.value}</p>
              <h3 className="mt-3 text-3xl font-black text-ink">{item.label}</h3>
              <p className="mt-3 text-lg leading-7 text-muted">{item.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

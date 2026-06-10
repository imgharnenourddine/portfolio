import { CalendarDays, FileText, MapPin } from "lucide-react";
import { personal } from "../../data/personal";
import { Badge } from "../ui/Badge";

export function About() {
  return (
    <section id="apropos" className="section-shell overflow-hidden">
      <img
        src={personal.logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-1/3 h-96 w-96 object-contain opacity-[0.045]"
      />
      <div className="absolute left-6 top-20 h-52 w-52 bg-dotted opacity-60" />

      <div className="relative grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="mx-auto w-full max-w-lg rounded-[2rem] border border-brand-100 bg-white p-5 shadow-soft">
          <div className="overflow-hidden rounded-[1.5rem] bg-brand-50">
            <img src={personal.profile} alt={personal.name} className="aspect-square w-full object-cover" />
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-brand-600 sm:text-base">
            À propos
          </p>
          <h2 className="text-balance text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
            Étudiant passionné par la tech et l’IA
          </h2>
          <p className="mt-7 max-w-4xl text-lg leading-9 text-muted sm:text-xl">{personal.about}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Badge icon={<MapPin className="h-4 w-4" />}>{personal.location}</Badge>
            <Badge icon={<CalendarDays className="h-4 w-4" />}>{personal.availability}</Badge>
            <Badge icon={<FileText className="h-4 w-4" />}>{personal.internship}</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

import { experiences } from "../../data/experiences";
import { personal } from "../../data/personal";
import { ExperienceCard } from "../cards/ExperienceCard";
import { SectionHeader } from "../layout/SectionHeader";

export function Experience() {
  return (
    <section id="experiences" className="section-shell overflow-hidden">
      <img
        src={personal.logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-20 top-24 hidden h-96 w-96 object-contain opacity-[0.045] lg:block"
      />
      <div className="absolute right-8 top-14 h-56 w-56 bg-dotted opacity-60" />
      <SectionHeader eyebrow="Expériences professionnelles" title="Expériences professionnelles" />
      <div className="relative grid gap-6 xl:grid-cols-3">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
    </section>
  );
}

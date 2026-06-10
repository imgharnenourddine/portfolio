import { skillCategories } from "../../data/skills";
import { personal } from "../../data/personal";
import { SectionHeader } from "../layout/SectionHeader";
import { SkillCategoryCard } from "../cards/SkillCategoryCard";

export function Skills() {
  return (
    <section id="competences" className="section-shell overflow-hidden">
      <img
        src={personal.logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-20 top-12 hidden h-96 w-96 object-contain opacity-[0.045] lg:block"
      />
      <div className="absolute right-6 top-24 h-60 w-60 bg-dotted opacity-60" />
      <SectionHeader
        eyebrow="Compétences"
        title="Compétences techniques"
        description="Technologies et outils que j’utilise pour concevoir, développer et déployer des solutions intelligentes, scalables et orientées impact."
      />

      <div className="relative grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <SkillCategoryCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}

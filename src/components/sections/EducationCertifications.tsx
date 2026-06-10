import { Award, GraduationCap } from "lucide-react";
import { CertificationCard } from "../cards/CertificationCard";
import { EducationCard } from "../cards/EducationCard";
import { SectionHeader } from "../layout/SectionHeader";
import { certifications } from "../../data/certifications";
import { education } from "../../data/education";
import { personal } from "../../data/personal";

export function EducationCertifications() {
  return (
    <section id="formation" className="section-shell overflow-hidden">
      <img
        src={personal.logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-0 hidden h-80 w-80 object-contain opacity-[0.045] lg:block"
      />
      <div className="absolute bottom-12 right-6 h-56 w-56 bg-dotted opacity-60" />
      <SectionHeader
        eyebrow="Parcours académique"
        title="Formation & Certifications"
        description="Mon parcours académique et les certifications qui renforcent mon expertise."
      />

      <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <div className="mb-7 flex items-center gap-5">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <GraduationCap className="h-10 w-10" />
            </span>
            <div>
              <h3 className="text-2xl font-black text-brand-700">Formation</h3>
              <p className="mt-2 text-muted">
                Parcours académique orienté ingénierie, data et cloud computing.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {education.map((item) => (
              <EducationCard key={item.school} education={item} />
            ))}
          </div>
        </div>

        <div className="lg:border-l lg:border-dashed lg:border-brand-200 lg:pl-14">
          <div className="mb-7 flex items-center gap-5">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <Award className="h-10 w-10" />
            </span>
            <div>
              <h3 className="text-2xl font-black text-brand-700">Certifications</h3>
              <p className="mt-2 text-muted">
                Certifications professionnelles pour valider mes compétences techniques.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {certifications.map((item) => (
              <CertificationCard key={item.title} certification={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { CalendarDays, Medal } from "lucide-react";
import type { Education } from "../../types/education";
import { cn } from "../../utils/helpers";
import { Card } from "../ui/Card";

type EducationCardProps = {
  education: Education;
};

export function EducationCard({ education }: EducationCardProps) {
  const isEnset = education.school.toLowerCase().includes("enset");

  return (
    <Card className="flex items-center gap-6">
      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-brand-50 p-4 ring-1 ring-brand-100">
        <img
          src={education.image}
          alt={education.school}
          className={cn("max-h-full max-w-full object-contain", isEnset && "scale-150")}
        />
      </div>
      <div>
        <h3 className="text-2xl font-black text-ink">{education.school}</h3>
        <p className="mt-3 leading-7 text-muted">{education.degree}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4 font-semibold text-ink">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-brand-600" />
            {education.period}
          </span>
          {education.mention ? (
            <span className="inline-flex items-center gap-2 text-brand-700">
              <Medal className="h-5 w-5" />
              Mention {education.mention}
            </span>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

import type { Technology } from "../../types/skill";
import { cn } from "../../utils/helpers";

type SkillCardProps = {
  technology: Technology;
};

const logoTweaks: Record<string, string> = {
  Docker: "h-10 w-10 scale-125",
  FastAPI: "h-10 w-10 scale-125",
  Flask: "h-10 w-10 scale-125",
  Java: "h-10 w-10 scale-125",
  Pandas: "h-10 w-10 scale-150",
  Talend: "h-10 w-10 scale-150",
};

export function SkillCard({ technology }: SkillCardProps) {
  return (
    <div className="flex min-h-16 min-w-0 items-center gap-3 rounded-xl border border-brand-100 bg-white px-3 py-3 text-left text-sm font-bold leading-tight text-brand-700">
      <img
        src={technology.logo}
        alt=""
        className={cn("h-8 w-8 shrink-0 object-contain", logoTweaks[technology.name])}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <span className="min-w-0 flex-1 break-words text-[0.78rem] leading-tight">
        {technology.name}
      </span>
    </div>
  );
}

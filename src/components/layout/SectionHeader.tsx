import { cn } from "../../utils/helpers";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 max-w-4xl", centered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-sm font-black uppercase tracking-[0.18em] text-brand-600 sm:text-base",
            centered && "justify-center",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">{description}</p>
      ) : null}
      <span className={cn("mt-7 block h-1 w-20 rounded-full bg-brand-600", centered && "mx-auto")} />
    </div>
  );
}

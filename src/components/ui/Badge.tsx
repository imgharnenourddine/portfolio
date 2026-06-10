import type { ReactNode } from "react";
import { cn } from "../../utils/helpers";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
};

export function Badge({ children, className, icon }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-xl bg-brand-50 px-3 py-2 text-xs font-bold text-brand-700 ring-1 ring-brand-100 sm:text-sm",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}

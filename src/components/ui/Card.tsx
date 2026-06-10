import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/helpers";

type CardProps = {
  children: ReactNode;
  className?: string;
  padded?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function Card({ children, className, padded = true, ...props }: CardProps) {
  return (
    <div className={cn("soft-card", padded && "p-6 sm:p-8", className)} {...props}>
      {children}
    </div>
  );
}

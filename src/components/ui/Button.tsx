import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/helpers";

type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: ReactNode;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white shadow-glow hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg",
  outline:
    "border border-brand-600 bg-white text-brand-700 hover:-translate-y-0.5 hover:bg-brand-50",
  ghost: "bg-brand-50 text-brand-700 hover:bg-brand-100",
};

export function Button({
  children,
  className,
  href,
  icon,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition duration-200 focus:outline-none focus:ring-4 focus:ring-brand-200 sm:text-base",
    variants[variant],
    className,
  );

  if (href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a href={href} className={classes} {...anchorProps}>
        {icon}
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} {...buttonProps}>
      {icon}
      {children}
    </button>
  );
}

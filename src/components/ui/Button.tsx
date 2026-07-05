import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-card hover:shadow-card-hover",
  secondary:
    "bg-white text-navy-900 border border-navy-900/15 hover:border-brand hover:text-brand dark:bg-navy-900 dark:text-white dark:border-white/15",
  ghost: "bg-white/10 text-white border border-white/30 hover:bg-white/20",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: BaseProps & { href: string }) {
  return (
    <Link
      href={href}
      className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: BaseProps & { type?: "button" | "submit"; disabled?: boolean }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {children}
    </button>
  );
}

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "signal" | "carbon" | "ghost-light" | "ghost-dark";
type Icon = "arrow" | "external" | "phone" | "none";

const variants: Record<Variant, string> = {
  signal: "bg-signal text-carbon hover:bg-signal-hover",
  carbon: "bg-carbon text-white hover:bg-graphite",
  "ghost-light": "border border-white/25 text-white hover:border-white hover:bg-white/5",
  "ghost-dark": "border border-carbon/20 text-carbon hover:border-carbon hover:bg-carbon/[0.03]",
};

const icons = { arrow: ArrowRight, external: ArrowUpRight, phone: Phone } as const;

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: Icon;
  size?: "md" | "lg";
  newTab?: boolean;
  className?: string;
};

/** Button-styled link. Internal paths use next/link; tel:, mailto: and external URLs use a plain anchor. */
export function ActionLink({
  href,
  children,
  variant = "signal",
  icon = "arrow",
  size = "md",
  newTab = false,
  className = "",
}: ActionLinkProps) {
  const Icon = icon === "none" ? null : icons[icon];
  const classes = [
    "group inline-flex items-center justify-between gap-4 type-label transition-colors duration-200",
    size === "lg" ? "min-h-14 px-6" : "min-h-12 px-5",
    variants[variant],
    className,
  ].join(" ");

  const content = (
    <>
      <span>{children}</span>
      {Icon && (
        <Icon
          aria-hidden
          className={`size-4 shrink-0 transition-transform duration-300 ease-precise ${
            icon === "arrow" ? "group-hover:translate-x-1" : icon === "external" ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5" : ""
          }`}
        />
      )}
    </>
  );

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {content}
    </a>
  );
}

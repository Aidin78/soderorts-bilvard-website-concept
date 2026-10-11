import type { ReactNode } from "react";

type Tone = "light" | "dark";

/** Condensed uppercase label with the orange index tick. */
export function Eyebrow({ children, tone = "light", index }: { children: ReactNode; tone?: Tone; index?: string }) {
  return (
    <p className={`type-label flex items-center gap-3 ${tone === "dark" ? "text-steel" : "text-muted"}`}>
      <span aria-hidden className="h-px w-8 bg-signal" />
      {index && <span className={tone === "dark" ? "text-signal" : "text-signal-ink"}>{index}</span>}
      <span>{children}</span>
    </p>
  );
}

type SectionIntroProps = {
  eyebrow: string;
  index?: string;
  title: ReactNode;
  children?: ReactNode;
  tone?: Tone;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionIntro({ eyebrow, index, title, children, tone = "light", as: Heading = "h2", className = "" }: SectionIntroProps) {
  return (
    <div className={`reveal max-w-3xl ${className}`}>
      <Eyebrow tone={tone} index={index}>
        {eyebrow}
      </Eyebrow>
      <Heading className={`type-heading text-heading-1 mt-5 ${tone === "dark" ? "text-white" : "text-carbon"}`}>{title}</Heading>
      {children && (
        <div className={`mt-5 max-w-2xl text-lg leading-relaxed ${tone === "dark" ? "text-white/70" : "text-muted"}`}>{children}</div>
      )}
    </div>
  );
}

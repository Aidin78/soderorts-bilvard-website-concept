/** Typographic lockup of the company name with the orange signal mark. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span aria-hidden className="relative block size-7 shrink-0 bg-signal [clip-path:polygon(0_0,100%_0,100%_62%,62%_100%,0_100%)]">
        <span className="absolute inset-[7px] bg-carbon [clip-path:polygon(0_0,100%_0,100%_45%,45%_100%,0_100%)]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="type-display text-[1.05rem] tracking-[0.04em] uppercase">Söderorts</span>
        <span className="type-label mt-1 text-[0.62rem] tracking-[0.42em] text-steel">Bilvård</span>
      </span>
    </span>
  );
}

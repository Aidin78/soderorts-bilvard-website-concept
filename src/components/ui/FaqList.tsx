import { Plus } from "lucide-react";
import type { Faq } from "@/content/services";

/** Accessible accordion built on native details/summary – no JavaScript required. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-line">
          <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-lg font-semibold transition-colors hover:text-signal-ink">
            {item.question}
            <Plus
              aria-hidden
              className="mt-1 size-5 shrink-0 text-signal-ink transition-transform duration-300 ease-precise group-open:rotate-45"
            />
          </summary>
          <p className="max-w-2xl pb-6 leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

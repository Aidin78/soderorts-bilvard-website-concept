import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { business } from "@/content/business";

/** Sticky call/booking bar on small screens. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-carbon pb-[env(safe-area-inset-bottom)] lg:hidden">
      <a href={business.phone.href} className="type-label flex min-h-14 items-center justify-center gap-2 text-white">
        <Phone aria-hidden className="size-4 text-signal" />
        Ring oss
      </a>
      <Link href="/boka" className="type-label flex min-h-14 items-center justify-center gap-2 bg-signal text-carbon">
        <CalendarCheck aria-hidden className="size-4" />
        Boka tid
      </Link>
    </div>
  );
}

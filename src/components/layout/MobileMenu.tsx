"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { business } from "@/content/business";
import { mainLinks, serviceLinks } from "@/content/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobilmeny"
        aria-label={open ? "Stäng meny" : "Öppna meny"}
        onClick={() => setOpen((value) => !value)}
        className="flex size-12 items-center justify-center border border-white/20 text-white transition-colors hover:border-white"
      >
        {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
      </button>

      <div
        id="mobilmeny"
        ref={panelRef}
        inert={!open}
        className={`fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto bg-carbon transition duration-300 ease-precise ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav aria-label="Mobilmeny" className="flex min-h-full flex-col px-4 pt-6 pb-10 sm:px-6">
          <ul>
            {mainLinks.map((link, index) => (
              <li key={link.href} className="border-b border-white/10">
                <Link href={link.href} onClick={close} className="flex items-baseline gap-4 py-4 text-white">
                  <span className="type-label text-signal">{String(index + 1).padStart(2, "0")}</span>
                  <span className="type-heading text-3xl">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="type-label mt-8 text-steel">Tjänster</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4">
            {serviceLinks.map((service) => (
              <li key={service.href}>
                <Link href={service.href} onClick={close} className="block py-2.5 text-white/80 hover:text-white">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto grid gap-3 pt-10">
            <Link
              href="/boka"
              onClick={close}
              className="type-label flex min-h-14 items-center justify-between bg-signal px-6 text-carbon"
            >
              Boka tid
              <ArrowRight aria-hidden className="size-4" />
            </Link>
            <a
              href={business.phone.href}
              className="type-label flex min-h-14 items-center justify-between border border-white/25 px-6 text-white"
            >
              Ring {business.phone.display}
              <Phone aria-hidden className="size-4" />
            </a>
            <p className="mt-2 text-sm text-steel">
              {business.openingHours[0].days} {business.openingHours[0].opens}–{business.openingHours[0].closes} · {business.address.street},{" "}
              {business.address.locality}
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}

"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/contact/ContactForm";

/** Preselects the service from ?tjanst= so booking links land on a pre-filled form. */
export function ContactFormFromUrl({ enabled }: { enabled: boolean }) {
  const searchParams = useSearchParams();
  return <ContactForm enabled={enabled} defaultService={searchParams.get("tjanst")} />;
}

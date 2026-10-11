import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { business } from "@/content/business";

type FinalCtaProps = {
  title?: string;
  text?: string;
  primary?: { href: string; label: string; external?: boolean };
};

export function FinalCta({
  title = "Redo att ge din bil lite extra omtanke?",
  text = "Boka tid online för däckskifte, eller hör av dig så hittar vi en tid för tvätt, rekond eller verkstad.",
  primary = { href: "/boka", label: "Boka tid" },
}: FinalCtaProps) {
  return (
    <section className="relative overflow-hidden bg-signal text-carbon">
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-1/3 bg-[repeating-linear-gradient(90deg,transparent_0_23px,rgb(21_25_28/0.12)_23px_24px)] lg:block" />
      <Container className="relative grid gap-10 py-16 lg:grid-cols-12 lg:items-end lg:py-24">
        <div className="reveal lg:col-span-8">
          <h2 className="type-display text-display-2">{title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-carbon/80">{text}</p>
        </div>
        <div className="reveal grid gap-3 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
          <ActionLink
            href={primary.href}
            variant="carbon"
            size="lg"
            icon={primary.external ? "external" : "arrow"}
          >
            {primary.label}
          </ActionLink>
          <ActionLink href={business.phone.href} variant="ghost-dark" size="lg" icon="phone">
            Ring {business.phone.display}
          </ActionLink>
        </div>
      </Container>
    </section>
  );
}

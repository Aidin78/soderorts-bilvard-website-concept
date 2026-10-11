import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionIntro";

export default function NotFound() {
  return (
    <section className="bg-carbon text-white">
      <Container className="py-24 lg:py-36">
        <Eyebrow tone="dark">Fel 404</Eyebrow>
        <h1 className="type-display text-display-2 mt-6 max-w-3xl">Sidan finns inte – men vi hjälper dig vidare.</h1>
        <p className="mt-6 max-w-xl text-lg text-white/75">Sidan kan ha flyttats när webbplatsen gjordes om. Börja om från startsidan eller se våra tjänster.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ActionLink href="/">Till startsidan</ActionLink>
          <ActionLink href="/tjanster" variant="ghost-light">
            Våra tjänster
          </ActionLink>
        </div>
      </Container>
    </section>
  );
}

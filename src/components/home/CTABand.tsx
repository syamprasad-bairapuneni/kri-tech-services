import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function CTABand({
  title = "Ready to get started?",
  description = "Tell us what you need and we'll get back to you within one business day.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-padding bg-white dark:bg-navy-950">
      <Container className="flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-br from-brand to-navy-900 px-8 py-14 text-center shadow-card">
        <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
        <p className="max-w-xl text-sky-100/90">{description}</p>
        <ButtonLink href="/contact" variant="ghost">
          Book a Consultation
        </ButtonLink>
      </Container>
    </section>
  );
}

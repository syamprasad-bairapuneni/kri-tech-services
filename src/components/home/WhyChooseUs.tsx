import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-sky-50 dark:bg-navy-900">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built on reliability, not guesswork"
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className="rounded-xl bg-white p-6 shadow-card dark:bg-navy-950 dark:shadow-none dark:border dark:border-white/10"
            >
              <span className="font-display text-2xl font-bold text-brand/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-navy-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-light dark:text-sky-100/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/why-choose-us" variant="secondary">
            Learn more about our approach
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

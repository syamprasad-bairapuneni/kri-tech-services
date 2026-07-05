import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/home/CTABand";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore KRI Tech & Services' offerings: technical support, customer support, and education consulting for businesses and students.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Support built around how you work"
            description="Three focused service lines, delivered by people who treat your business — or your future — like it matters."
            light
          />
        </Container>
      </section>

      <section className="section-padding bg-white dark:bg-navy-950">
        <Container className="space-y-16">
          {SERVICES.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid gap-8 rounded-2xl border border-navy-900/10 bg-sky-50 p-8 md:grid-cols-3 md:p-10 scroll-mt-24 dark:border-white/10 dark:bg-navy-900"
            >
              <div className="md:col-span-1">
                <span className="font-display text-sm font-semibold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-2xl font-bold text-navy-900 dark:text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-light dark:text-sky-100/70">
                  {service.summary}
                </p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-light dark:text-sky-100/60">
                  What's included
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-lg bg-white p-4 text-sm text-ink shadow-sm dark:bg-navy-950 dark:text-sky-100/85"
                    >
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-teal" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <CTABand
        title="Not sure which service fits?"
        description="Tell us about your business or your goals, and we'll recommend the right starting point."
      />
    </>
  );
}

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, JSX.Element> = {
  "technical-support": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path strokeLinecap="round" d="M8 20h8M12 16v4" />
    </svg>
  ),
  "customer-support": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-3.5-7.1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01" />
    </svg>
  ),
  "education-consulting": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5" />
    </svg>
  ),
};

export default function WhatWeDo() {
  return (
    <section className="section-padding bg-white dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Three ways we support your goals"
          description="Whether you're running a business or planning your next academic step, KRI brings dedicated, dependable support."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="rounded-xl border border-navy-900/10 bg-sky-50 p-7 shadow-card transition-shadow hover:shadow-card-hover dark:border-white/10 dark:bg-navy-900 dark:shadow-none"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                {ICONS[service.slug]}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy-900 dark:text-white">
                {service.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-light dark:text-sky-100/70">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

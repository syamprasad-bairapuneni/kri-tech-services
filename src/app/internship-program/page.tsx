import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import CTABand from "@/components/home/CTABand";
import { INTERNSHIP_PROGRAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Internship Program",
  description:
    "A 6-month industry internship program from KRI Tech & Services, combining CCNA-aligned networking, cybersecurity fundamentals, and hands-on practical training.",
};

export default function InternshipProgramPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Internship Program"
            title={INTERNSHIP_PROGRAM.headline}
            description={INTERNSHIP_PROGRAM.subheadline}
            light
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary">
              Partner With Us
            </ButtonLink>
            <ButtonLink href="/about" variant="ghost">
              Meet the Team
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white dark:bg-navy-950">
        <Container className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-navy-900/10 bg-sky-50 p-6 dark:border-white/10 dark:bg-navy-900">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-light dark:text-sky-100/60">
              Duration
            </h3>
            <p className="mt-2 text-2xl font-bold text-navy-900 dark:text-white">
              {INTERNSHIP_PROGRAM.duration}
            </p>
          </div>
          <div className="rounded-2xl border border-navy-900/10 bg-sky-50 p-6 md:col-span-2 dark:border-white/10 dark:bg-navy-900">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-light dark:text-sky-100/60">
              Who It's For
            </h3>
            <p className="mt-2 text-base leading-relaxed text-ink dark:text-sky-100/80">
              {INTERNSHIP_PROGRAM.targetAudience}
            </p>
          </div>
        </Container>
      </section>

      {/* Curriculum tracks */}
      <section className="section-padding bg-sky-50 dark:bg-navy-900">
        <Container>
          <SectionHeading
            eyebrow="Curriculum"
            title="What students will learn"
            align="left"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {INTERNSHIP_PROGRAM.tracks.map((track, index) => (
              <div
                key={track.title}
                className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-950"
              >
                <span className="font-display text-sm font-semibold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-bold text-navy-900 dark:text-white">
                  {track.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light dark:text-sky-100/70">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-white dark:bg-navy-950">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Outcomes" title="What students walk away with" />
          <ul className="mt-8 space-y-4">
            {INTERNSHIP_PROGRAM.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex items-start gap-3 rounded-lg bg-sky-50 p-4 text-sm text-ink dark:bg-navy-900 dark:text-sky-100/85"
              >
                <span
                  className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-teal"
                  aria-hidden="true"
                />
                {outcome}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand
        title="Bring the Internship Program to your college"
        description="We'll walk your department through the curriculum, structure, and student outcomes."
      />
    </>
  );
}

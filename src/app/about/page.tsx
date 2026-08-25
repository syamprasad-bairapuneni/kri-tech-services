import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/home/CTABand";
import { TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KRI Tech & Services — a support and consulting company built on reliability, service quality, and trust.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="About Us"
            title="A support partner you can rely on"
            light
          />
        </Container>
      </section>

      <section className="section-padding bg-white dark:bg-navy-950">
        <Container className="max-w-3xl">
          <div className="space-y-6 text-base leading-relaxed text-ink dark:text-sky-100/80">
            <p>
              KRI Tech &amp; Services was founded on a simple idea: businesses
              grow faster when their support is dependable, and students make
              better decisions when their guidance is honest. We work at the
              intersection of both, delivering technical support, customer
              support, and education consulting with the same standard of
              care in every engagement.
            </p>
            <p>
              We know that handing over support responsibilities — whether
              that's your customers' inboxes, your team's IT issues, or a
              student's education path — requires trust. That's why we
              prioritize clear communication, consistent response times, and
              measurable service quality over shortcuts. Every ticket,
              conversation, and consultation is treated as a reflection of
              our reputation, not just a task to close.
            </p>
            <p>
              Our team combines experienced support professionals with a
              growing network of trained graduates, giving clients access to
              capable people while giving those graduates a genuine start to
              their careers. It's a model built for long-term reliability,
              not one-off transactions.
            </p>
            <p>
              Today, KRI Tech &amp; Services supports small and growing
              businesses that need remote technical and customer support they
              can count on, alongside students who need clear, practical
              guidance on studying abroad, applying to universities, and
              planning their careers. In both cases, our commitment is the
              same: show up reliably, communicate honestly, and do the work
              well.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-sky-50 dark:bg-navy-900">
        <Container>
          <SectionHeading eyebrow="Our Team" title="Founders" align="left" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-950"
              >
                {/* Photo if provided, otherwise initials placeholder */}
                {member.photo ? (
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-lg font-bold text-brand dark:bg-teal-light/10 dark:text-teal-light"
                    aria-hidden="true"
                  >
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
                <h3 className="mt-4 text-lg font-bold text-navy-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-brand dark:text-teal-light">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-light dark:text-sky-100/70">
                  {member.bio}
                </p>
                {member.credentials && member.credentials.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {member.credentials.map((credential) => (
                      <li
                        key={credential}
                        className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-ink dark:bg-navy-900 dark:text-sky-100/80"
                      >
                        {credential}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
